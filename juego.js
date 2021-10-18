console.log('Juego de lucha con JavaScript')

//Variables Globales//
var bottomRow = document.getElementById('bottom-row');
var vida = document.getElementsByClassName('vida');
var player1 = document.getElementById('player1-vida');
var player1Hp = document.getElementsByClassName('player1-hp');
var player2Hp = document.getElementsByClassName('player2-hp');
var gameOver = document.getElementById('game-over'); 
var players = document.querySelectorAll('#players>div')
let playerSelected = []
let startBtn = document.querySelector('.start-button')
let vidaDe1 = document.querySelector('.vida-label1')
let vidaDe2 = document.querySelector('.vida-label2')

//Variables de vida//
var playerHp = 100;
var secondPlayerHp = 100;

function selectPlayer(x){
    console.log(x.classList.value)
    if (!playerSelected.includes(x.classList.value)){
        if(playerSelected.length < 2){
            playerSelected.push(x.classList.value)
            console.log(playerSelected)
            if (playerSelected.length === 2) {
                startBtn.disabled = false;
                bottomRow.querySelector('p').innerHTML = 'Has seleccionado a ' +playerSelected[0]  + ' y a ' + playerSelected[1] + ' para que luchen.'
            }    
        } else{
            console.log('Too many players selected')
            console.log(playerSelected)
        } 
    }else {
        console.log('already selected')
    }
    }


function start(){
    bottomRow.innerHTML = "Presiona ATAQUE para quitar daño al enemigo.";
    for(let x=0; x<vida.length; x++){
        vida[x].style.visibility = "visible";
    }
    players.forEach(player => {
        if (!playerSelected.includes(player.classList.value)) {
            player.style.display = "none";
        }
    });
    vidaDe1.innerHTML = "Vida de " + playerSelected[0];
    vidaDe2.innerHTML = "Vida de " + playerSelected[1]; 
}

function ataque1(){
    var hitChance = Math.round(Math.random()*10);
    if (hitChance <=7){
        var dmg = Math.round(Math.random()*10)+10; 
        secondPlayerHp -= dmg;
        if(secondPlayerHp < 0){
            secondPlayerHp = 0;
        }
        bottomRow.innerHTML = "Le has quitado al enemigo " + dmg + " de daño. A " + playerSelected[1] + " le queda " + secondPlayerHp + " de vida";
        var secondPlayerBarHp = (secondPlayerHp/100)*295;
        player2Hp[0].style.width = secondPlayerBarHp + "px";
    } else{
        bottomRow.innerHTML = "Tu ataque ha fallado";
    }
    if(secondPlayerHp == 0){
        bottomRow.innerHTML += "<br>¡DERROTASTE A TU ENEMIGO!. ¡GAME OVER!<br><button onclick='restartGame()'>¿Jugar de nuevo?</button>"
        gameOver.style.visibility = "hidden"
    }
}

function ataque2(){
    var hitChance = Math.round(Math.random()*10);
    if (hitChance <=7){
        var dmg = Math.round(Math.random()*10)+10; 
        playerHp -= dmg;
        if(playerHp < 0){
            playerHp = 0;
        }
        bottomRow.innerHTML = "Le has quitado al enemigo " + dmg + " de daño. A " + playerSelected[0] + " le queda " + playerHp + " de vida";
        var PlayerBarHp = (playerHp/100)*295;
        player1Hp[0].style.width = PlayerBarHp + "px";
    } else{
        bottomRow.innerHTML = "Tu ataque ha fallado";
    }
    if(playerHp == 0){
        bottomRow.innerHTML += "<br>¡DERROTASTE A TU ENEMIGO!. ¡GAME OVER!<br><button onclick='restartGame()'>¿Jugar de nuevo?</button>"
        gameOver.style.visibility = "hidden"
    }
}

function restartGame(){
    playerHp = 100;
    secondPlayerHp = 100;
    var PlayerBarHp = (playerHp/100)*295;
        player1Hp[0].style.width = PlayerBarHp + "px";
    var secondPlayerBarHp = (secondPlayerHp/100)*295;
        player2Hp[0].style.width = secondPlayerBarHp + "px";
    gameOver.style.visibility = "visible";
    start();
}