var cisloSekce = 1
var cisloOtazky = 1
const pocetSekci = 7
const objektSekcePersony = document.getElementById('persona')

function zmenitSekciNa(cislo) {
    switch (cislo) {
        case 1:
            cisloSekce = cislo
            aktualizovatHideTriduCSS(cisloSekce-1)
            break;
        case 2:
            cisloSekce = cislo
            aktualizovatHideTriduCSS(cisloSekce-1)
            break;
        case 3:
            cisloSekce = cislo
            aktualizovatHideTriduCSS(cisloSekce-1)
            break;
        case 4:
            cisloSekce = cislo
            aktualizovatHideTriduCSS(cisloSekce-1)
            break;
        case 5:
            cisloSekce = cislo
            aktualizovatHideTriduCSS(cisloSekce-1)
            break;
        case 6:
            cisloSekce = cislo
            aktualizovatHideTriduCSS(cisloSekce-1)
            objektSekcePersony.classList.remove("active")
            break;
        case 7:
            cisloSekce = cislo
            aktualizovatHideTriduCSS(cisloSekce-2)
            objektSekcePersony.classList.add("active")
            break;
        default:
            console.log("Pouziti neplatneho cisla sekce pro zmenu")
            break;
    }
}

function predchoziSekce() {
    if( cisloSekce > 1) {
        zmenitSekciNa(cisloSekce-1)
    } else {
        console.log("Cislo sekce nelze vice snizit")
    }
}

function dalsiSekce() {
    if( cisloSekce < pocetSekci) {
        zmenitSekciNa(cisloSekce+1)
    } else {
        console.log("Cislo sekce nelze vice zvysit")
    }
}

function resetovatSekce() {
    zmenitSekciNa(1)
}

function zmenitOtazkuNa(cislo) {
    cisloOtazky = cislo
    // zobrazitOtazku()
}
let aktualniObjektSekce, vsechnySekce
function aktualizovatHideTriduCSS(cislo) {
    vsechnySekce = document.getElementsByTagName("SECTION")
    aktualniObjektSekce = vsechnySekce[cislo]

    //console.log(vsechnySekce)

    for (let index = 0; index < vsechnySekce.length; index++) {
        const element = vsechnySekce[index];
        element.classList.add('hide')        
    }

    aktualniObjektSekce.classList.remove('hide')
}


document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        dalsiSekce()
    }
    else if (e.keyCode == '40') {
        predchoziSekce()
    }
    else if (e.keyCode == '37') {
       predchoziSekce()
    }
    else if (e.keyCode == '39') {
        dalsiSekce()
    }

}