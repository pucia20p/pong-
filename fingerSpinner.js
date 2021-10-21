const money = document.querySelector(".money div");

let select = new Array();
for(i=0; i<6; i++){
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

select[5].addEventListener("click",function(){
    addMons(1000)
})






