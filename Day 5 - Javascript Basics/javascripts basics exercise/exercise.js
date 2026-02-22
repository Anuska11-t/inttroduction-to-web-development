let count = 0;

const counterText = document.querySelector(".js-counter-text");
const incrementBtn = document.querySelector(".js-increment-btn");
const decrementBtn = document.querySelector(".js-decrement-btn");


incrementBtn.addEventListener("click", function () {
  count++;
  counterText.textContent = count;
});


decrementBtn.addEventListener("click", function () {
  count--;
  counterText.textContent = count;
});




const ageInput = document.querySelector(".js-age-input");
const calculateBtn = document.querySelector(".js-calculate-btn");
const resultText = document.querySelector(".js-result");

calculateBtn.addEventListener("click", function () {
  let humanAge = Number(ageInput.value);

  if (humanAge <= 0) {
    resultText.textContent = "Please enter a valid age!";
  } else {
    let dogAge = humanAge * 7;
    resultText.textContent = "Your dog age is: " + dogAge;
  }
});




