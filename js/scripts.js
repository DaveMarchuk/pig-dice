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

let player1 = new Player("Rafael");
let player2 = new Player("Oscar");

