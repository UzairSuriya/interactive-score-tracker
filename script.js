const countElHome = document.getElementById("countdownHome");
const countElGuest = document.getElementById("countdownGuest");
const add1Home = document.getElementById("add1Home");
const add2Home = document.getElementById("add2Home");
const add3Home = document.getElementById("add3Home");
const add1Guest = document.getElementById("add1Guest");
const add2Guest = document.getElementById("add2Guest");
const add3Guest = document.getElementById("add3Guest");

let homeScore = localStorage.getItem("homeScore");
let guestScore = localStorage.getItem("guestScore");
let scoreHome = 0;
let scoreGuest = 0;

function showScore() {
  if (homeScore === null || homeScore.length === 0) {
    countElHome.textContent = 0;
  } else {
    countElHome.textContent = localStorage.getItem("homeScore");
  }
  if (guestScore === null || guestScore.length === 0) {
    countElGuest.textContent = 0;
  } else {
    countElGuest.textContent = localStorage.getItem("guestScore");
  }
}
showScore();


function add1Guest() {
    scoreGuest += 1
    countElGuest.textContent = scoreGuest
}
function add2Guest() {
    scoreGuest += 2
    countElGuest.textContent = scoreGuest
}
function add3Guest() {
    scoreGuest += 3
    countElGuest.textContent = scoreGuest
}
