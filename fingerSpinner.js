//okienka
const okienko = document.querySelector(".komunikat");
const okienkoText = document.querySelector("#txt");
const okienkoButt = document.querySelector(".button div");
let okienkoWlacz = false; //czy jest okienko włączone?
let okienkoMemory; //zapamięta 1 komunikat jeśli się okaże że 2 okienka będą naraz

okienko.style.display = "none"; //upewniam się że jest wszystko dobrze
okienkoText.innerText = " ";

function alertAleFajny(teksty){
    if(!okienkoWlacz){ //jeśli okienko nie jest już włączone
        okienkoText.innerText = teksty; //zmień komunikat w okienku
        okienko.style.display = "flex"; //flex B)
        okienkoWlacz = true; //jest okienko włączone
    } 
    else {
        okienkoMemory = teksty; //zapamiętaj komunikat jeśli na ekranie już jeden jest
    }
}

okienkoButt.addEventListener("click", function(){
    okienko.style.display = "none"; //ukryj okienko
    okienkoText.innerText = " ";
    okienkoWlacz = false; //ok wyłączyłem okienko
    if(okienkoMemory != null){ //jeśli coś jest w historii
        setTimeout(function(){ //po 0.5s
            alertAleFajny(okienkoMemory); //wyświetl to 
            okienkoMemory = null; //wyzeruj pamięć
        }, 500);
    }
})

//historia
const historia = document.querySelector(".historia");
let historiaIn = new Array();
for(i=0; i<5; i++){
    historiaIn[i] = document.querySelectorAll(".historiaIn")[i];
}
let historiaIn2 = [0, 0, 0, 0, 0]; //wyzeruj historię - nie chce mi się jej robić na localstorage plus w sumie nie trzeba

function updateHistoria(num){ //aktualizuje dany element w historii w zależności od jego wartości w historiaIn2
    switch(historiaIn2[num]){
        case 0:
            break;
        case 1:
            historiaIn[num].style.backgroundColor = "var(--common)";
            break;
        case 2:
            historiaIn[num].style.backgroundColor = "var(--uncommon)";
            break;
        case 3:
            historiaIn[num].style.backgroundColor = "var(--rare)";
            break;
        case 4:
            historiaIn[num].style.backgroundColor = "var(--legendary)";
            break;
        default:
            console.log("wtf");
    }
    if(historiaIn2[num]!=0) //jak nie ma wartości to go ukryj
        historiaIn[num].style.display = "block";
    else
        historiaIn[num].style.display = "none";
}

function dodajDoHistori(kolor){ //przesuwa wszystkie wartości i od razu je aktualizuje
    historiaIn2[4] = historiaIn2[3];
    updateHistoria(4);
    historiaIn2[3] = historiaIn2[2];
    updateHistoria(3);
    historiaIn2[2] = historiaIn2[1];
    updateHistoria(2);
    historiaIn2[1] = historiaIn2[0];
    updateHistoria(1);
    historiaIn2[0] = kolor;
    updateHistoria(0);
}
dodajDoHistori(0); //a bo nie chciało mi się w stylach zmieniać wszystkiego więc po prostu wykonuję tą funkcję i git B)B)B)


//definiowane zmiennych - skrótów
const money = document.querySelector(".money div"); 

let select = new Array();
for(i=0; i<7; i++){
    select[i] = document.querySelectorAll(".select")[i];
}
const bet = document.querySelector(".numberer");
let przycisk = new Array(); 
for(i=0; i<4; i++){
    przycisk[i] = document.querySelectorAll(".przycisk")[i];
}
const kolko = document.querySelector(".kolko");

//żeby pieniądze się zapisywały w localstorage
if(localStorage.getItem("mons") == null){
    localStorage.setItem("mons", 1000);
}
let mons = localStorage.getItem("mons");
money.innerText = mons;

//funkcja która dodaje pieniądze
function cheatCode(num){
    num += parseInt(localStorage.getItem("mons"));
    localStorage.setItem("mons", num);
    mons = parseInt(num);
    money.innerText = mons;
}
//funkcja która zmienia ilość pieniędzy
function cheatCodeAlt(num){
    localStorage.setItem("mons", parseInt(num));
    mons = parseInt(localStorage.getItem("mons"));
    money.innerText = mons;
}
//funkcja odpowiadająca za zmianę wartości inputa
function addMons(wololo){
    if (bet.value == null)
        bet.value = 0;
    let val = parseInt(bet.value) + wololo;
    bet.value = parseInt(val);
}
//programowanie buttonów
select[0].addEventListener("click",function(){
    addMons(-1000);
})
select[1].addEventListener("click",function(){
    addMons(-100);
})
select[2].addEventListener("click",function(){
    addMons(-10);
})
select[3].addEventListener("click",function(){
    bet.value = 0;
})
select[4].addEventListener("click",function(){
    addMons(10);
})
select[5].addEventListener("click",function(){
    addMons(100);
})
select[6].addEventListener("click",function(){
    addMons(1000);
})

//definiuje zmienne przechowujące zakłady na dany kolor
betMons = new Array();
for(i=0; i<4; i++)
    betMons[i]=0;
//funkcja która sprawdza wartość inputa, po czym daje zakład na podany kolor
function obstaw(wololo){
    better = parseInt(bet.value)
    if(better > 0 && better <= mons){
        betMons[wololo] += better;
        cheatCode(better*-1);
        przycisk[wololo].querySelector(".inside2").innerText = betMons[wololo];
        wlacz = true;
    } else
        alertAleFajny("podaj poprawną liczbę!")
    
}
let wlacz = false; //zmienna która sprawdza czy można włączyć losowanie
//programowanie buttonów
przycisk[0].addEventListener("click",function(){
    obstaw(0);
})
przycisk[1].addEventListener("click",function(){
    obstaw(1);
})
przycisk[2].addEventListener("click",function(){
    obstaw(2);
})
przycisk[3].addEventListener("click",function(){
    obstaw(3);
})

//jakie wartości odpowiadają jakiemu kolorowi
let blue = [4,5,6,7,8,15,16,17,18,19,20,26,27,28,29,30,31,37,38,39,40,41,42,49,50,51,52,53,60,61,62,63,64,65,71,72,73,74,75,76,82,83,84,85,86,87,94,95,96,97,98,105,106,107,108,109,110,116,117,118,119,120,121,127,128,129,130,131,132,139,140,141,142,143,144,150,151,152,153,154,155,161,162,163,164,165,166,173,174,175,176,177,184,185,186,187,188,195,196,197,198,199,200,206,207,208,209,210,211,217,218,219,220,221,222,228,229,230,231,232,233,240,241,242,243,244,251,252,253,254,255,256,262,263,264,265,266,267,274,275,276,277,278,285,286,287,288,289,296,297,298,299,300,301,307,308,309,310,311,312,318,319,320,321,322,323,330,331,332,333,334,335,341,342,343,344,345,346,352,353,354,355,356,357];
let red = [9,10,11,12,13,14,21,22,23,24,25,32,33,34,35,36,54,55,56,57,58,59,66,67,68,69,70,77,78,79,80,81,99,100,101,102,103,104,111,112,113,114,115,123,124,125,126,145,146,147,148,149,156,157,158,159,160,167,168,169,170,171,172,189,190,191,192,193,194,201,202,203,204,205,212,213,214,215,216,234,235,236,237,238,239,245,246,247,248,249,250,257,258,259,260,261,279,280,281,282,283,284,290,291,292,293,294,295,302,303,304,305,306,324,325,326,327,328,329,336,337,338,339,340,347,348,349,350,351];
let green = [1,2,3,43,44,45,46,47,48,88,89,90,91,92,93,133,134,135,136,137,138,223,224,225,226,227,268,269,270,271,272,273,313,314,315,316,317,358,359,360];
let gold = [178,179,180,181,182,183];

//sprawdza jaki kolor został wylosowany
function checkColor(color, losowanie){
    for(i=0; i<blue.length; i++){
        if(blue[i] == losowanie)
            return 1;
    }
    if(color == null){
        for(i=0; i<red.length; i++){
            if(red[i] == losowanie)
                return 2;
        }   
    }
    if(color == null){
        for(i=0; i<green.length; i++){
            if(green[i] == losowanie)
                return 3;
        }   
    }
    if(color == null){
        for(i=0; i<gold.length; i++){
            if(gold[i] == losowanie)
                return 4;
        }   
    }
}
//skrypt kręcenia się kółka i obliczeń
kolko.addEventListener("click",function (){
    if(wlacz){
        wlacz = false; //żeby użytkownik nie włączył po raz drugi tego
        let losowanie = Math.ceil(Math.random()*360)//rng numer od 1 do 360
        let wyn = losowanie + (3*360) //ile stopni ma się zakręcić kółko
        let color;
        kolko.style.transitionDuration = "5s"; 
        kolko.style.transform = `rotate(${wyn}deg)`;
        console.log(losowanie); //jaki stopień się wylosował
        setTimeout(function(){ //ma się wykonać po 6 sekundach (bo około wtedy się skończy kręcić kółko)
            color = checkColor(color, losowanie); //sprawdza jaki kolor został wylosowany
            console.log(color); //jaki kolor się wylosował
            dodajDoHistori(color); //no dodaje do historii

            function wygr(index, mnoznik){ //funkcja do podsumowania
                cheatCode(mnoznik*betMons[index]); //dodaj pieniądze (jak ktoś niczego nie obstawił to będzie *0)
                if(betMons[index] > 0) //jeśli cokolwiek na ten kolor obstawiłeś
                    alertAleFajny(`wygrałeś ${betMons[index]*mnoznik}`); //komunikat ile dostałeś
                else 
                    alertAleFajny("sadg"); //chyba nic nie dostałeś
            }
            switch(color){ //zależnie od tego jaki kolor się wylosował o tyle mnoży zakład
                case 1:
                    wygr(0,2);
                    break;
                case 2:
                    wygr(1,3);
                    break;
                case 3:
                    wygr(2,5);
                    break;
                case 4:
                    wygr(3,50);
                    break;
                default:
                    console.log("wtf");
            }
            for(let i = 0; i < 4; i++){ //zeruje zakłady
                betMons[i] = 0;
                przycisk[i].querySelector(".inside2").innerText = "";
            }
        },6000)
        setTimeout(function(){ //wykona się po 8 sekundach, resetuje kółko
            kolko.style.transitionDuration = "1s";
            kolko.style.transform = `rotate(0deg)`;
        }, 8000)
    }
})

let resete = false; //żeby się upewnić
document.querySelector(".reset").addEventListener("click", function(){
    if(resete){ //jeżeli użytkownik potwierdził
        cheatCodeAlt(1000);
        resete = false;
    }
    else{
        alertAleFajny("Spróbuj jeszcze raz aby potwierdzić; odśwież stronę aby anulować"); //czy jesteś pewien?
        resete = true;
    }
})

document.querySelector(".tutoriel").addEventListener("click", function(){ //czy jest tu co wyjaśniać?
    alertAleFajny(`1. Wprowadź ilość którą chcesz postawić.
2. Wybierz kolor który chcesz obstawić (można wybierać kilkukrotnie).
3. Naciśnij na koło i powodzenia!`)
});

//XD
let x = Math.ceil(Math.random()*100)
if(x == 69)
    alertAleFajny("nice")
let y = Math.ceil(Math.random()*10000)
if(x == 2137)
    alertAleFajny("ej fajna ta żółta twarz")

