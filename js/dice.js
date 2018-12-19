var playerOne = ""
var playerTwo = ""

function PlayGame() {
  this.dicerolled = 0;
  this.currentresult = 0;
  this.totalscore = 0;
}

PlayGame.prototype.diceRoll = function() {
  if (this.dicerolled === 1) {
    this.currentresult = 0;
    alert("You rolled a 1");
  } else {
    this.currentresult += this.dicerolled
  }
}
PlayGame.prototype.total = function() {
  this.totalscore += this.currentresult
}
PlayGame.prototype.hold = function() {
  alert("Your turn is over");
  this.totalscore += this.currentresult
}

var roll = function() {
  return Math.floor(Math.random() * 6) + 1; // returns a random integer from 1 to 6
}
$(document).ready(function() {
      playerOne = new PlayGame(true);
      playerTwo = new PlayGame(true);

      $("#roller1").click(function() {
        playerOne.dicerolled = roll();
        $("#roll1").val(playerOne.dicerolled)
        playerOne.diceRoll();
        $("#result1").val(playerOne.currentresult);
        playerOne.total();
        $("#score1").val(playerOne.totalscore);
        });
      });
      $(document).ready(function() {
        $("#roller2").click(function() {
          playerTwo.dicerolled = roll();
          $("#roll2").val(playerTwo.dicerolled)
          playerTwo.diceRoll();
          $("#result2").val(playerTwo.currentresult);
          playerTwo.total();
          $("#score2").val(playerTwo.totalscore);
        });
      });
