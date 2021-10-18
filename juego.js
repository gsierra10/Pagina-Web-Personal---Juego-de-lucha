console.log('Juego de lucha con JavaScript')

//Variables Globales//
var bottomRow = document.getElementById('bottom-row');
var vida = document.getElementsByClassName('vida');
var player1 = document.getElementById('player1-vida');
var player1Hp = document.getElementsByClassName('player1-hp');
var player2Hp = document.getElementsByClassName('player2-hp');

//Variables de vida//
var playerHp = 100;
var secondPlayerHp = 100;


function start(){
    bottomRow.innerHTML = "Presiona ATAQUE para quitar daño al enemigo.";
    for(let x=0; x<vida.length; x++){
        vida[x].style.visibility = "visible";
    }
}

function ataque1(){
    var hitChance = Math.round(Math.random()*10);
    if (hitChance <=7){
        var dmg = Math.round(Math.random()*10)+10; 
        secondPlayerHp -= dmg;
        if(secondPlayerHp < 0){
            secondPlayerHp = 0;
        }
        bottomRow.innerHTML = "Le has quitado al enemigo " + dmg + " de daño. Al Player 2 le queda " + secondPlayerHp + " de vida";
        var secondPlayerBarHp = (secondPlayerHp/100)*295;
        player2Hp[0].style.width = secondPlayerBarHp + "px";
    } else{
        bottomRow.innerHTML = "Tu ataque ha fallado";
    }
    if(secondPlayerHp == 0){
        bottomRow.innerHTML += "<br>¡DERROTASTE A TU ENEMIGO!. ¡GAME OVER!"
    }
}
