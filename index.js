scoreNumbersHome = document.getElementById("score-numbers-home");
scoreNumbersGuest = document.getElementById("score-numbers-guest");
newGame = document.getElementById("new-game");

let countHome = 0;
let countGuest = 0;

function increment(team, amount) {
  if (team === "home") {
    countHome += amount;
    scoreNumbersHome.textContent = countHome;
  }

  if (team === "guest") {
    countGuest += amount;
    scoreNumbersGuest.textContent = countGuest;
  }
}

function resetGame() {
  countHome = 0;
  countGuest = 0;
  scoreNumbersGuest.textContent = 0;
  scoreNumbersHome.textContent = 0;
}
