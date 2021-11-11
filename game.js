//constantes
const roll = document.getElementById('lancer');
const hold = document.getElementById('garder');
const reset = document.getElementById('reset');
const scorePlayer1 = document.getElementById('scorePlayer1');
const currentScorePlayer1 = document.getElementById('currentScorePlayer1');
const scorePlayer2 = document.getElementById('scorePlayer2');
const currentScorePlayer2 = document.getElementById('currentScorePlayer2');
const diceImage = document.getElementById('diceImg');

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

let Player1 = {
  name: "Joueur 1",
  currentDiceScore : currentScorePlayer1,
  globalDiceScore : scorePlayer1
};

let Player2 = {
  name: "Joueur 2",
  currentDiceScore : currentScorePlayer2,
  globalDiceScore : scorePlayer2
};

// Functions
function randomNumber () {
  return Math.floor(Math.random() * 5) +1;
}
function resetGame () {
  currentPlayer = Player1;
  scorePlayer1.textContent = 0;
  currentScorePlayer1.textContent = 0;
  scorePlayer2.textContent = 0;
  currentScorePlayer2.textContent = 0;
  currentDiceScore = 0;
  globalDiceScore = 0;
}
function changePlayer(){
  if(currentPlayer == Player1){
    currentPlayer = Player2;
  }
  else{
    currentPlayer = Player1;
  }
}
function play(){
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
