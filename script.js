var form = document.getElementById("calculator-form");
var firstNumberInput = document.getElementById("first-number");
var secondNumberInput = document.getElementById("second-number");
var operationInput = document.getElementById("operation");
var resultOutput = document.getElementById("calculator-result");
var topicButtons = document.getElementsByClassName("topic-button");
var topicPanels = document.getElementsByClassName("topic-panel");

function showTopic(button) {
  var panelId = button.getAttribute("data-panel");

  for (var i = 0; i < topicButtons.length; i++) {
    topicButtons[i].classList.remove("active");
    topicButtons[i].setAttribute("aria-pressed", "false");
  }

  for (var i = 0; i < topicPanels.length; i++) {
    topicPanels[i].classList.remove("active");
  }

  document.getElementById(panelId).classList.add("active");
  button.classList.add("active");
  button.setAttribute("aria-pressed", "true");
}

for (var i = 0; i < topicButtons.length; i++) {
  topicButtons[i].addEventListener("click", function () {
    showTopic(this);
  });
}

form.addEventListener("submit", calculate);

function calculate(event) {
  event.preventDefault();

  var firstNumber = Number(firstNumberInput.value);
  var secondNumber = Number(secondNumberInput.value);
  var operation = operationInput.value;
  var result;

  if (!Number.isFinite(firstNumber) || !Number.isFinite(secondNumber)) {
    resultOutput.textContent = "Please enter two valid numbers.";
    return;
  }

  if (operation === "add") {
    result = firstNumber + secondNumber;
  } else if (operation === "subtract") {
    result = firstNumber - secondNumber;
  } else if (operation === "multiply") {
    result = firstNumber * secondNumber;
  } else if (operation === "divide") {
    if (secondNumber === 0) {
      resultOutput.textContent = "Cannot divide by zero. Try another number.";
      return;
    }

    result = firstNumber / secondNumber;
  }

  if (!Number.isFinite(result)) {
    resultOutput.textContent = "Result is too large. Try smaller numbers.";
    return;
  }

  result = Number(result.toPrecision(12));
  resultOutput.textContent = result;
}
