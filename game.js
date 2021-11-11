//constantes
const roll = document.getElementById('lancer');
const hold = document.getElementById('garder');
const reset = document.getElementById('reset');
const scorePlayer1 = document.getElementById('scorePlayer1');
const currentScorePlayer1 = document.getElementById('currentScorePlayer1');
const scorePlayer2 = document.getElementById('scorePlayer2');
const currentScorePlayer2 = document.getElementById('currentScorePlayer2');
const diceImage = document.getElementById('diceImg');
const player1Font = document.getElementById('player1');
const player2Font = document.getElementById('player2');

// dice face images
var diceFaceNumber = {
  1: "images/1.png",
  2: "images/2.png" ,
  3: "images/3.png" ,
  4: "images/4.png" ,
  5: "images/5.png" ,
  6: "images/6.png"
};

// create object Player

let currentPlayer;
let currentDiceScore = 0;
let globalDiceScore = 0;
let gameRunning = false;
let playerFontColor = "paleturquoise";
let playerFontColorNotPlaying = "white";

let Player1 = {
  name: "Joueur 1",
  currentDiceScore : currentScorePlayer1,
  globalDiceScore : scorePlayer1,
  playerFont : player1Font
};

let Player2 = {
  name: "Joueur 2",
  currentDiceScore : currentScorePlayer2,
  globalDiceScore : scorePlayer2,
  playerFont : player2Font
};

// Functions
function randomNumber () {
  return Math.floor(Math.random() * 5) +1;
}
function resetGame () {
  gameRunning = true;
  currentPlayer = Player1;
  player1Font.style.backgroundColor= playerFontColor;
  player2Font.style.backgroundColor= playerFontColorNotPlaying;
  scorePlayer1.textContent = 0;
  currentScorePlayer1.textContent = 0;
  scorePlayer2.textContent = 0;
  currentScorePlayer2.textContent = 0;
  currentDiceScore = 0;
  globalDiceScore = 0;
}
function changePlayer(){
  if(currentPlayer == Player1){
    currentPlayer.playerFont.style.backgroundColor =playerFontColorNotPlaying;
    currentPlayer = Player2;
    currentPlayer.playerFont.style.backgroundColor = playerFontColor;
    
  }
  else{
    currentPlayer.playerFont.style.backgroundColor=playerFontColorNotPlaying;
    currentPlayer = Player1;
    currentPlayer.playerFont.style.backgroundColor = playerFontColor;
  }
}
function play(){
  if(gameRunning){
    let random = randomNumber();
      diceImage.setAttribute("src", diceFaceNumber[random]);
    if (random !== 1){
      currentDiceScore += random;
      currentPlayer.currentDiceScore.textContent = currentDiceScore;
    }
    else{
      currentDiceScore = 0;
      currentPlayer.currentDiceScore.textContent = currentDiceScore;
      changePlayer();
    }
  }
}
function holdScore(){

  let score = currentDiceScore + Number(currentPlayer.globalDiceScore.textContent);
  currentPlayer.globalDiceScore.textContent = score;
  
  if(score >= 100) {
    resetGame ()
    win();
  }
  currentDiceScore = 0;
  currentPlayer.currentDiceScore.textContent = currentDiceScore;
}
function win(){
  alert(currentPlayer.name +" Gagne la partie !")
}

// events

reset.addEventListener('click', () =>{
  resetGame();
});
roll.addEventListener('click', () =>{
  play();
});
hold.addEventListener('click', () =>{
  holdScore();
});
