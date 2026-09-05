const countElHome = document.getElementById("countdownHome");
const countElGuest = document.getElementById("countdownGuest");
const add1Home = document.getElementById("add1Home");
const add2Home = document.getElementById("add2Home");
const add3Home = document.getElementById("add3Home");
const add1Guest = document.getElementById("add1Guest");
const add2Guest = document.getElementById("add2Guest");
const add3Guest = document.getElementById("add3Guest");

let countElGuest = document.getElementById("countdownGuest")

let scoreHome = 0
let scoreGuest = 0

function add1Home() {
    scoreHome += 1
    countElHome.textContent = scoreHome
}
function add2Home() {
    scoreHome += 2
    countElHome.textContent = scoreHome
}
function add3Home() {
    scoreHome += 3
    countElHome.textContent = scoreHome
}


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
