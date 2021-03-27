const startButton = document.getElementById('btn-zacit')
const restartButton = document.getElementById('restart-btn')
// const nextButton = document.getElementById('schvalit-btn')
const openFullScreen = document.getElementById('open-fullscreen-btn')
const questionContainerElement = document.getElementById('rozhodovani')
const questionElement = document.getElementById('zneni-otazky')
const answerButtonsElement = document.getElementById('moznosti-rozhodnuti')
const kontejnerVyhodnoceni = document.getElementById('boxy-vyhodnoceni')

const sekceUvod = document.getElementById('uvod')
const sekceRozhodovani = document.getElementById('rozhodovani')
const sekceVyhodnoceni = document.getElementById('vyhodnoceni')

let shuffledQuestions, currentQuestionIndex

var odpovediUzivatele = [0, 0, 0, 0]

startButton.addEventListener('click', startGame)
restartButton.addEventListener('click', ()=> {
    odpovediUzivatele = [0, 0, 0, 0]
    
    document.body.style.backgroundPositionY = '22%'

    sekceUvod.classList.remove('hide')
    sekceVyhodnoceni.classList.add('hide')
})

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
    console.log(odpovediUzivatele)
    currentQuestionIndex++

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
question: 'Mladá dívka se u úřadů dovolává pomoci potom, co ji rodina zakazuje sňatek, pro který se rozhodla a hrozí jí vyhnáním z domu. Tradice, k níž se její rodina hlásí, přikazuje, že výběr životního partnera závisí na rozhodnutí rodičů.', 
        answers: [
            {text: 'Nebudete dívce pomáhat, protože jde o soukromou záležitost.', zakon: 'ÚŘADY NIJAK NEZASAHUJÍ DO RODINNÉHO ŽIVOTA'},
           
            {text: 'Zakážete tradici týkající se výběru partnerů a budete postihovat její dodržování.', zakon:'JSOU ZAKÁZÁNY NUCENÉ SŇATKY A DODRŽOVÁNÍ TRADIC (JAKO JE VÝBĚR PARTNERA RODIČI) JE TRESTÁNO.'},
           
            {text: 'Z veřejných zdrojů dívce zajistíte dočasné bydlení, pro realizaci jejího rozhodnutí.', zakon: 'JSOU RESPEKTOVÁNY KULTURNÍ TRADICE, ALE JE POSKYTOVÁNA PODPORA JEDINCŮM, KTEŘÍ NESOU NEGATIVNÍ NÁSLEDKY JEJICH NEDODRŽENÍ.' },
                ]
            },
{
    question: 'Skupina občanů veřejně prezentuje svůj názor, že určité etnické a sexuální menšiny podrývají pořádek a dobrou morálku na ostrově. Tato skupina otevřeně usiluje o omezení některých práv členů menšin.', 
        answers: [
            {text: 'Budete činnost této skupiny ignorovat.', zakon: 'NEVĚNUJE SE POZORNOST PŮSOBENÍ SKUPIN, KTERÉ USILUJÍ O POTLAČENÍ PRÁV PŘÍSLUŠNÍKŮ MENŠIN.'},
           
            {text: 'Necháte občany hlasovat o schválení návrhu na omezení práv menšin a rozhodnete se podle výsledku hlasování.', zakon:'O OMEZOVÁNÍ PRÁV PŘÍSLUŠNÍKŮ MENŠIN SE ROZHODUJE VE VŠEOBECNÉM HLASOVÁNÍ.'},
           
            {text: 'Zakážete činnost této skupiny a budete trestat veřejné prosazování podobných nenávistných a diskriminačních názorů.', zakon: 'PROSAZOVÁNÍ OMEZOVÁNÍ PRÁV PŘÍSLUŠNÍKŮ MENŠIN JE ZAKÁZÁNO A TRESTÁNO.'},
                ]
            },
            
 {       
question: 'Na ostrově dojde k brutální vraždě náctileté dívky vracející se večer domů. Na základě výpovědí svědků je obviněn muž s kriminální minulostí trpící psychickými problémy. Chybí přímý důkaz dokazují jeho vinu, on sám vinu popírá. ', 
        answers: [
            {text: 'Obviněného odsoudíte za jeho brutální čin k trestu smrti.', zakon: 'ZA VRAŽDU JE UDĚLOVÁN TREST SMRTI. TREST JE VYKONVÁN OKAMŽITĚ PO UZAVŘENÍ PROCESU.'},
            
            {text: 'Obviněného odsoudíte k doživotnímu vězení v maximální izolaci, bez nároku na propuštění.', zakon: 'PACHATELÉ VRAŽD JSOU ODSUZOVÁNI K DOŽIVOTNÍMU VĚZENÍ V NAPROSTÉ IZOLACI OD LIDÍ.'},
            
            {text: 'Obviněného odsoudíte k dlouholetému vězení a nařídíte mu psychiatrické léčení.', zakon: 'V ZEMI FUNGUJE SOCIÁLNÍ SYSTÉM PŘEVÝCHOVY PACHATELŮ TĚŽKÝCH ZLOČINŮ.'},
                ]
            },

{      
question: 'Z jiného ostrova připluly stovky lidí utíkající před válkou. Tito lidé mají jiné zvyky, mluví cizím jazykem a přicházejí bez prostředků. Pro vás by jejich přijetí znamenalo tolerovat jejich odlišnost (projevovanou v mezích zákona) a pomoci jim určitými materiálními prostředky.', 
        answers: [
            {text: 'Přijmete utečence a dovolíte jim, aby s vámi žili na ostrově do doby, než se budou moci vrátit.', zakon: 'PŘIJÍMÁTE A MATERIÁLNĚ PODPORUJETE PŘÍCHOZÍ UPRHCLÍKY Z VÁLKOU POSTIŽENÝCH OBLASTÍ.'},
            
            {text: 'Odmítnete je všechny s tím, aby pokračovali v cestě.', zakon: 'ODMÍTÁTE VŠECHNY UPRHCLÍKY Z VÁLKOU POSTIŽENÝCH OBLASTÍ.'},
            
            {text: 'Přijmete pouze ty běžence, kteří prokážou, že jim v jejich vlasti opravdu hrozí vážné nebezpečí pro předejetí komplikací.', zakon: 'PŘIJETÍ UPRCHLÍKŮ ZÁVISÍ NA ÚŘEDNÍCÍCH, KEŘÍ V MEZÍCH ZÁKONA POSUZUJÍ ZÁVAŽNOST DŮVODU JEJICH ÚTĚKU.'}, 
        
                 ]}
]
