const dice = document.getElementById("dice");
const rollButton = document.querySelector("button");
const rollHistory = document.getElementById("roll-history");
let rollNum = 0;
function roll() {
  const rollHistoryItem = document.createElement("li");
  const number = 1 + Math.floor(Math.random() * 5);
  let symbol = null;
  if (number == 1) {
    symbol = "&#9856";
  } else if (number == 2) {
    symbol = "&#9857";
  } else if (number == 3) {
    symbol = "&#9858";
  } else if (number == 4) {
    symbol = "&#9859";
  } else if (number == 5) {
    symbol = "&#9860";
  } else {
    symbol = "&#9861";
  }
  dice.innerHTML = symbol;
  rollNum++;
  rollHistoryItem.innerHTML = `Roll ${rollNum}: <span> ${symbol} </span>`;
  console.log(rollHistoryItem);
  rollHistory.appendChild(rollHistoryItem);
  dice.classList.add("rotate-center");
  setTimeout(() => {
    dice.classList.remove("rotate-center");
  }, 600);
}
rollButton.addEventListener("click", roll);
