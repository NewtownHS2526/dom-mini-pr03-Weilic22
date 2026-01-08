console.log("Script Running");


const shift = (sprite, col) => (col <= 7 ? sprite.style.setProperty("grid-column", col) : null);

let pepperoni_step = 1;
let veggie_step = 1;
let bbq_step = 1;



// Query selectors for all buttons and scooters go here
const pepperoniScooter = document.querySelector("#pepperoni-scooter")
const veggieScooter = document.querySelector("#veggie-scooter")
const bbqScooter = document.querySelector("#bbq-scooter")
const pepperoniButton = document.querySelector("#pepperoni-button")
const veggieButton = document.querySelector("#veggie-button")
const bbqButton = document.querySelector("#bbq-button")

let winnerBox = document.querySelector("#winner")

const movePepperoni = () => {
  pepperoni_step += 1
  shift(pepperoniScooter, pepperoni_step)
  checkWinner(pepperoni_step, "Pepperoni")
}

const moveVeggie = () => {
  veggie_step += 1
  shift(veggieScooter, veggie_step)
  checkWinner(veggie_step, "Veggie")
}

const moveBbq = () => {
  bbq_step += 1
  shift(bbqScooter, bbq_step)
  checkWinner(bbq_step, "BBQ")
}



// Write a function that checks if a scooter reached column 7
// If so, display the winner message
// Disable all buttons when a winner is found
const checkWinner = (step, name) => {
  if (step >= 7) {
    winnerBox.textContent = `${name} Scooter Wins!`
    pepperoniButton.disabled = true
    veggieButton.disabled = true
    bbqButton.disabled = true
  }}

  //IMAGES NOT ADDED.
// Add event listeners for each button
// Each button should trigger its own movement function
pepperoniButton.addEventListener("click", movePepperoni)
veggieButton.addEventListener("click", moveVeggie)
bbqButton.addEventListener("click", moveBbq)