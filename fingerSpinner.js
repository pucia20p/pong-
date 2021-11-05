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

let mons = 1000;
money.innerText = mons;

function addMons(wololo){
    
    if (bet.value == null)
        bet.value = 0;
    let val = parseInt(bet.value) + wololo;
    bet.value = parseInt(val);
}

select[0].addEventListener("click",function(){
    addMons(-1000)
})
select[1].addEventListener("click",function(){
    addMons(-100)
})
select[2].addEventListener("click",function(){
    addMons(-10)
})
select[3].addEventListener("click",function(){
    bet.value = 0
})
select[4].addEventListener("click",function(){
    addMons(10)
})
select[5].addEventListener("click",function(){
    addMons(100)
})
select[6].addEventListener("click",function(){
    addMons(1000)
})

betMons = new Array();
for(i=0; i<4; i++)
    betMons[i]=0;

function obstaw(wololo){
    better = parseInt(bet.value)
    if(better > 0 && better <= mons){
        betMons[wololo] += better;
        mons -= better;
        przycisk[wololo].querySelector(".inside2").innerText = betMons[wololo];
        money.innerText = mons;
    } else
        alert("podaj poprawną liczbę!")
    
}
przycisk[0].addEventListener("click",function(){
    obstaw(0)
})
przycisk[1].addEventListener("click",function(){
    obstaw(1)
})
przycisk[2].addEventListener("click",function(){
    obstaw(2)
})
przycisk[3].addEventListener("click",function(){
    obstaw(3)
})


//zrobić clicka na kółko i losowanie

//losowanie od 0 do 360, zależnie od wylosowanej liczby kręci kółkiem o tyle + 10*360'
//sprawdza wylosowaną liczbę do tablic z numerkami i daje taki bonus jak się skończy kręcić

//90

let blue = [ 4,5,6,7,8,15,16,17,18,19,20,26,27,28,29,30,31,37,38,39,40,41,42,49,50,51,52,53,60,61,62,63,64,65,71,72,73,74,75,76,82,83,84,85,86,87,94,95,96,97,98,105,106,107,108,109,110,116,117,118,119,120,121,127,128,129,130,131,132,139,140,141,142,143,144,150,151,152,153,154,155,161,162,163,164,165,166,173,174,175,176,177,184,185,186,187,188,195,196,197,198,199,200,206,207,208,209,210,211,217,218,219,220,221,222,228,229,230,231,232,233,240,241,242,243,244,251,252,253,254,255,256,262,263,264,265,266,267,274,275,276,277,278,285,286,287,288,289,296,297,298,299,300,301,307,308,309,310,311,312,318,319,320,321,322,323,330,331,332,333,334,335,341,342,343,344,345,346,352,353,354,355,356,357]
let red = [ 9,10,11,12,13,14,21,22,23,24,25,32,33,34,35,36,54,55,56,57,58,59,66,67,68,69,70,77,78,79,80,81,99,100,101,102,103,104,111,112,113,114,115,123,124,125,126,145,146,147,148,149,156,157,158,159,160,167,168,169,170,171,172,189,190,191,192,193,194,201,202,203,204,205,212,213,214,215,216,234,235,236,237,238,239,245,246,247,248,249,250,257,258,259,260,261,279,280,281,282,283,284,290,291,292,293,294,295,302,303,304,305,306,324,325,326,327,328,329,336,337,338,339,340,347,348,349,350,351]
let green = [ 1,2,3,43,44,45,46,47,48,88,89,90,91,92,93,133,134,135,136,137,138,223,224,225,226,227,268,269,270,271,272,273,313,314,315,316,317,358,359,360]
let gold = [ 178,179,180,181,182,183]
let wlacz = true

function checkColor(color, losowanie){
    for(i=0; i<blue.length; i++){
        if(blue[i] == losowanie)
            return 1
    }
    if(color == null){
        for(i=0; i<red.length; i++){
            if(red[i] == losowanie)
                return 2
        }   
    }
    if(color == null){
        for(i=0; i<green.length; i++){
            if(green[i] == losowanie)
                return 3
        }   
    }
    if(color == null){
        for(i=0; i<gold.length; i++){
            if(gold[i] == losowanie)
                return 4
        }   
    }
}

kolko.addEventListener("click",function (){
    if(wlacz){
        wlacz = false
        let losowanie = Math.ceil(Math.random()*360)
        let wyn = losowanie + (3*360)
        let color;
        kolko.style.transitionDuration = "5s" 
        kolko.style.transform = `rotate(${wyn}deg)`;
        setTimeout(function(){
            color = checkColor(color, losowanie);
            console.log(color)

            switch(color){
                case 1:
                    mons +=  2*betMons[0]
                    break;
                case 2:
                    mons +=  3*betMons[1]
                    break;
                case 3:
                    mons +=  5*betMons[2]
                    break;
                case 4:
                    mons +=  50*betMons[3]
                    break;
                default:
                    console.log("wtf")
            }
            money.innerText = mons;
            for(let i = 0; i < 4; i++){
                betMons[i] = 0;
                przycisk[i].querySelector(".inside2").innerText = "";
            }


        },6000)
        setTimeout(function(){
            kolko.style.transitionDuration = "1s"
            kolko.style.transform = `rotate(0deg)`
            
        }, 8000)
        console.log(losowanie)
        setTimeout(function (){
            wlacz = true
        }, 9500)
    }
})

function cheatCode(num){
    mons += parseInt(num);
    money.innerText = mons;
}


let x = Math.ceil(Math.random()*100)
if(x == 69)
    alert("nice")
