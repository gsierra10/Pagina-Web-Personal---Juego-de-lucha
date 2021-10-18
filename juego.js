console.log('Juego de lucha con JavaScript')

//Variables Globales//
var bottomRow = document.getElementById('bottom-row');
var vida = document.getElementsByClassName('vida');
var player1 = document.getElementById('player1-vida');
var player1Hp = document.getElementsByClassName('player1-hp');
var player2Hp = document.getElementsByClassName('player2-hp');

function start(){
    bottomRow.innerHTML = "Pick Megamans ability by clicking above.";
    for(let x=0; x<vida.length; x++){
        vida[x].style.visibility = "visible";
    }
}

function ataque1(){
    var hitChance = Math.round(Math.random()*10)
}
