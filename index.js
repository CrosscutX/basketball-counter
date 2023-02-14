scoreNumbersHome = document.getElementById("score-numbers-home")
scoreNumbersGuest = document.getElementById("score-numbers-guest")
newGame = document.getElementById("new-game")

let countHome = 0
let countGuest = 0

function homeIncrementOne() {
    countHome += 1
    scoreNumbersHome.textContent = countHome
}

function homeIncrementTwo() {
    countHome += 2
    scoreNumbersHome.textContent = countHome
}

function homeIncrementThree() {
    countHome += 3
    scoreNumbersHome.textContent = countHome
}

function guestIncrementOne() {
    countGuest += 1
    scoreNumbersGuest.textContent = countGuest
}

function guestIncrementTwo() {
    countGuest += 2
    scoreNumbersGuest.textContent = countGuest
}

function guestIncrementThree() {
    countGuest += 3
    scoreNumbersGuest.textContent = countGuest
}

function resetGame() {
    countHome = 0
    countGuest = 0
    scoreNumbersGuest.textContent = 0
    scoreNumbersHome.textContent = 0

}
