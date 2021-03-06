const startButton = document.getElementById('tlacitko-pridat-se')
const restartButton = document.getElementById('restart-btn')
// const nextButton = document.getElementById('schvalit-btn')
const openFullScreen = document.getElementById('tlacitko-fullscreen')
const questionContainerElement = document.getElementById('rozhodovani')
const questionElement = document.getElementById('zneni-otazky')
const answerButtonsElement = document.getElementById('moznosti-rozhodnuti')
const kontejnerVyhodnoceni = document.getElementById('boxy-vyhodnoceni')

const sekceUvod = document.getElementById('uvod')

   // const sekceCekaniNaSkupinu = document.getElementById('cekani-na-skupinu')//

const sekceRozhodovani = document.getElementById('rozhodovani')
const sekceVyhodnoceni = document.getElementById('vyhodnoceni')

   // const sekcePredVyhodnocenim = document.getElementById('pred-vyhodnocenim')
   // const sekcePersona = document.getElementById('persona')//

let shuffledQuestions, currentQuestionIndex

var odpovediUzivatele = [0, 0, 0, 0] //pole, array javascript tutorial / datove typy datatypes js//

startButton.addEventListener('click', startGame)
restartButton.addEventListener('click', ()=> {
    odpovediUzivatele = [0, 0, 0, 0]
    
    document.body.style.backgroundPositionY = '22%'

    sekceUvod.classList.remove('hide')
    sekceVyhodnoceni.classList.add('hide')
})

//window.onload = function(){
//startGame()
//}

//let moznostiRozhodnuti = document.querySelector('moznosti-rozhodnuti');
//moznostiRozhodnuti.addEventListener('click', () => moznostiRozhodnuti.style.backgroudColor='#ffffff')//

openFullScreen.addEventListener('click', toggleFullscreen)

var jsemFullscreen = 0
function toggleFullscreen() {
  if(jsemFullscreen) {
    closeFullscreen()
    jsemFullscreen=0
  } else {
    openFullscreenFunkce()
    jsemFullscreen=1
  }
}

var elem = document.documentElement;
function openFullscreenFunkce() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
      }
}

function closeFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
      document.msExitFullscreen();
    }
  }
    
    //function startGame() {
        //console.log('uvod')
      //  sekceUvod.classList.add('hide')
 //   sekceCekaniNaSkupinu.classList.remove('hide')//
    //} 

function startGame() {
    console.log('uvod') 
    sekceUvod.classList.add('hide')
    sekceRozhodovani.classList.remove('hide')
    // shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    setNextQuestion()
}


function vyhodnoceni() {
    console.log('vyhodnoceni') 
    sekceVyhodnoceni.classList.remove('hide')
    sekceRozhodovani.classList.add('hide')

    document.body.style.backgroundPositionY = '50%'

    // vzcistit
    while (kontejnerVyhodnoceni.firstChild) {
        kontejnerVyhodnoceni.removeChild(kontejnerVyhodnoceni.firstChild) 
    }

    cisloOdpovedi=0
    questions.forEach(question => {
        const paragraph = document.createElement('p')
        paragraph.innerText = question.answers[odpovediUzivatele[cisloOdpovedi]-1].zakon
        cisloOdpovedi++
        kontejnerVyhodnoceni.appendChild(paragraph)
    })

}

function ulozitOdpovedAPokracovatNaDalsiOtazku(cisloKliknuteOdpovedi) {
    odpovediUzivatele[currentQuestionIndex] = cisloKliknuteOdpovedi.target.dataset.cisloOdpovedi
    console.log('cisloKliknuteOdpovedi')
    console.log(cisloKliknuteOdpovedi)
    console.log('odpovediUzivatele')
    console.log(odpovediUzivatele)
    currentQuestionIndex++

//najit rodice //javascript DOM parent children tutorial
//vzit mu deti do promenne listDeti
//pouyit for each loop a kazdemu diteti odebrat tridu .classlist.remove

    cisloKliknuteOdpovedi.target.classList.toggle('stisknuto')
return
    if(currentQuestionIndex<4) {
        setNextQuestion()
    } else {
        vyhodnoceni()
    }
}

function setNextQuestion() {
    resetState()
    showQuestion(questions[currentQuestionIndex])
}

function showQuestion(vybranaOtazka) {
    questionElement.innerText = vybranaOtazka.question
    var cisloOdpovedi = 0;
    vybranaOtazka.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        // if (answer.correct) {
        //     button.dataset.correct = answer.correct
        // }
        cisloOdpovedi++
        button.dataset.cisloOdpovedi = cisloOdpovedi
        button.addEventListener('click',ulozitOdpovedAPokracovatNaDalsiOtazku)
        answerButtonsElement.appendChild(button)
    })
}
function resetState() {
    //clearStatusClass(document.body)
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild) 
    }
}

const questions = [
{
question: 'Mlad?? d??vka se u ????ad?? dovol??v?? pomoci potom, co ji rodina zakazuje s??atek, pro kter?? se rozhodla a hroz?? j?? vyhn??n??m z domu. Tradice, k n???? se jej?? rodina hl??s??, p??ikazuje, ??e v??b??r ??ivotn??ho partnera z??vis?? na rozhodnut?? rodi????.', 
        answers: [
            {text: 'Nebudete d??vce pom??hat, proto??e jde o soukromou z??le??itost.', zakon: '????ADY NIJAK NEZASAHUJ?? DO RODINN??HO ??IVOTA'},
           
            {text: 'Zak????ete tradici t??kaj??c?? se v??b??ru partner?? a budete postihovat jej?? dodr??ov??n??.', zakon:'JSOU ZAK??Z??NY NUCEN?? S??ATKY A DODR??OV??N?? TRADIC (JAKO JE V??B??R PARTNERA RODI??I) JE TREST??NO.'},
           
            {text: 'Z ve??ejn??ch zdroj?? d??vce zajist??te do??asn?? bydlen??, pro realizaci jej??ho rozhodnut??.', zakon: 'JSOU RESPEKTOV??NY KULTURN?? TRADICE, ALE JE POSKYTOV??NA PODPORA JEDINC??M, KTE???? NESOU NEGATIVN?? N??SLEDKY JEJICH NEDODR??EN??.' },
                ]
            },
{
    question: 'Skupina ob??an?? ve??ejn?? prezentuje sv??j n??zor, ??e ur??it?? etnick?? a sexu??ln?? men??iny podr??vaj?? po????dek a dobrou mor??lku na ostrov??. Tato skupina otev??en?? usiluje o omezen?? n??kter??ch pr??v ??len?? men??in.', 
        answers: [
            {text: 'Budete ??innost t??to skupiny ignorovat.', zakon: 'NEV??NUJE SE POZORNOST P??SOBEN?? SKUPIN, KTER?? USILUJ?? O POTLA??EN?? PR??V P????SLU??N??K?? MEN??IN.'},
           
            {text: 'Nech??te ob??any hlasovat o schv??len?? n??vrhu na omezen?? pr??v men??in a rozhodnete se podle v??sledku hlasov??n??.', zakon:'O OMEZOV??N?? PR??V P????SLU??N??K?? MEN??IN SE ROZHODUJE VE V??EOBECN??M HLASOV??N??.'},
           
            {text: 'Zak????ete ??innost t??to skupiny a budete trestat ve??ejn?? prosazov??n?? podobn??ch nen??vistn??ch a diskrimina??n??ch n??zor??.', zakon: 'PROSAZOV??N?? OMEZOV??N?? PR??V P????SLU??N??K?? MEN??IN JE ZAK??Z??NO A TREST??NO.'},
                ]
            },
            
 {       
question: 'Na ostrov?? dojde k brut??ln?? vra??d?? n??ctilet?? d??vky vracej??c?? se ve??er dom??. Na z??klad?? v??pov??d?? sv??dk?? je obvin??n mu?? s krimin??ln?? minulost?? trp??c?? psychick??mi probl??my. Chyb?? p????m?? d??kaz dokazuj?? jeho vinu, on s??m vinu pop??r??. ', 
        answers: [
            {text: 'Obvin??n??ho odsoud??te za jeho brut??ln?? ??in k trestu smrti.', zakon: 'ZA VRA??DU JE UD??LOV??N TREST SMRTI. TREST JE VYKONV??N OKAM??IT?? PO UZAV??EN?? PROCESU.'},
            
            {text: 'Obvin??n??ho odsoud??te k do??ivotn??mu v??zen?? v maxim??ln?? izolaci, bez n??roku na propu??t??n??.', zakon: 'PACHATEL?? VRA??D JSOU ODSUZOV??NI K DO??IVOTN??MU V??ZEN?? V NAPROST?? IZOLACI OD LID??.'},
            
            {text: 'Obvin??n??ho odsoud??te k dlouholet??mu v??zen?? a na????d??te mu psychiatrick?? l????en??.', zakon: 'V ZEMI FUNGUJE SOCI??LN?? SYST??M P??EV??CHOVY PACHATEL?? T????K??CH ZLO??IN??.'},
                ]
            },

{      
question: 'Z jin??ho ostrova p??ipluly stovky lid?? ut??kaj??c?? p??ed v??lkou. Tito lid?? maj?? jin?? zvyky, mluv?? ciz??m jazykem a p??ich??zej?? bez prost??edk??. Pro v??s by jejich p??ijet?? znamenalo tolerovat jejich odli??nost (projevovanou v mez??ch z??kona) a pomoci jim ur??it??mi materi??ln??mi prost??edky.', 
        answers: [
            {text: 'P??ijmete ute??ence a dovol??te jim, aby s v??mi ??ili na ostrov?? do doby, ne?? se budou moci vr??tit.', zakon: 'P??IJ??M??TE A MATERI??LN?? PODPORUJETE P????CHOZ?? UPRHCL??KY Z V??LKOU POSTI??EN??CH OBLAST??.'},
            
            {text: 'Odm??tnete je v??echny s t??m, aby pokra??ovali v cest??.', zakon: 'ODM??T??TE V??ECHNY UPRHCL??KY Z V??LKOU POSTI??EN??CH OBLAST??.'},
            
            {text: 'P??ijmete pouze ty b????ence, kte???? prok????ou, ??e jim v jejich vlasti opravdu hroz?? v????n?? nebezpe???? pro p??edejet?? komplikac??.', zakon: 'P??IJET?? UPRCHL??K?? Z??VIS?? NA ????EDN??C??CH, KE???? V MEZ??CH Z??KONA POSUZUJ?? Z??VA??NOST D??VODU JEJICH ??T??KU.'}, 
        
                 ]}
]
