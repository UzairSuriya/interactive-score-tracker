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

add1Home.addEventListener("click", () => {
  scoreHome++;
  localStorage.setItem("homeScore", scoreHome);
  let homeScore = localStorage.getItem("homeScore");
  countElHome.textContent = homeScore;
});
add2Home.addEventListener("click", () => {
  scoreHome += 2;
  localStorage.setItem("homeScore", scoreHome);
  let homeScore = localStorage.getItem("homeScore");
  countElHome.textContent = homeScore;
});
add3Home.addEventListener("click", () => {
  scoreHome += 3;
  localStorage.setItem("homeScore", scoreHome);
  let homeScore = localStorage.getItem("homeScore");
  countElHome.textContent = homeScore;
});

add1Guest.addEventListener("click", () => {
  scoreGuest++;
  localStorage.setItem("guestScore", scoreGuest);
  let guestScore = localStorage.getItem("guestScore");
  countElGuest.textContent = guestScore;
});
add2Guest.addEventListener("click", () => {
  scoreGuest += 2;
  localStorage.setItem("guestScore", scoreGuest);
  let guestScore = localStorage.getItem("guestScore");
  countElGuest.textContent = guestScore;
});
add3Guest.addEventListener("click", () => {
  scoreGuest += 3;
  localStorage.setItem("guestScore", scoreGuest);
  let guestScore = localStorage.getItem("guestScore");
  countElGuest.textContent = guestScore;
});
