var elementCurrentNumber = document.getElementById("currentNumber");
var currentNumber = 0;

function increment() {
  currentNumber = currentNumber + 1;
  elementCurrentNumber.innerHTML = currentNumber;
}
