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


function rando(){
    return Math.round(Math.random()*360)
}


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




