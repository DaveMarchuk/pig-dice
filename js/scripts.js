function Game(p1,p2) {
  this.player1 = p1;
  this.player2 = p2;
  this.gameOver = false;
  this.playerTakingTurn = 1;
}

function Player(playerName) {
  this.playerName = playerName;
  this.currentScore = 0;
  this.totalScore = 0;
  this.diceRoll = 0;
}

Player.prototype.playDice = function () {
  this.diceRoll = Math.floor(Math.random() * 6 + 1);
  if (this.diceRoll === 1) {
    return (this.currentScore = 0);
  } else {
    this.currentScore += this.diceRoll;
    return this.currentScore;
  }
};

Player.prototype.holdDice = function () {
  this.totalScore += this.currentScore;
  this.diceRoll = 0;
  if (this.totalScore >= 100) {
    return this.playerName + " Has Won!";
  }
};

// UI Logic
function handleFormSubmisison(event)  {
  event.preventDefault();
  const player1Name = document.querySelector("input#player1-name").value;
  const player2Name = document.querySelector("ipnut#player2-name").value;
  let beginNewGame = new Game(player1Name,player2Name);
  console.log(beginNewGame);
}


window.addEventListener("load", function()  {
  document.querySelector("form#players-input").addEventListener("submit",handleFormSubmisison);
  document.querySelector("form#game-interact").addEventListener("submit",); 
})