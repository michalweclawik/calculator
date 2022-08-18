"use strict";

// query selector to store number which is on display
var currentNumber = document.querySelector('.currentNumber'); // query selector to store numbers from calculator 1-9 plus .

var calculatorNumbers = document.querySelectorAll('.calculator__number'); // // query selector to store operating signs 

var calculatorOperators = document.querySelectorAll('.calculator__operator'); // query selector to store number which is on display

var calculatorOutput = document.querySelector('.calculator__output');
var calculatorAc = document.querySelector('.calculator__AC');
var previousNum = '';
var sign = '';
calculatorNumbers.forEach(function (button) {
  return button.addEventListener('click', listNumbers);
});
calculatorOperators.forEach(function (button) {
  return button.addEventListener('click', operatorFunction);
});
calculatorOutput.addEventListener('click', getResult);
calculatorAc.addEventListener('click', clearAll);

function listNumbers(event) {
  console.log("clicked");
  console.log(event.target.innerHTML);
  if (this.textContent === '.' && currentNumber.innerHTML.includes('.')) return;
  if (this.textContent === '.' && currentNumber.innerHTML === '') return currentNumber.innerHTML = '0.';
  var currentNUmber = event.target.innerHTML;
  currentNumber.innerHTML += currentNUmber;
}

function operatorFunction(event) {
  previousNum = currentNumber.innerHTML;
  sign = event.target.innerHTML;
  console.log(sign);

  if (currentNumber.innerHTML === '' && sign === '-') {
    currentNumber.innerHTML = '-';
    return;
  } else if (currentNumber.innerHTML === '') {
    return;
  }

  if (sign !== '') {
    getResult();
  }

  currentNumber.innerHTML = '';
}

function getResult() {
  if (previousNum === '' || currentNumber.innerHTML === '') return;
  var a = Number(currentNumber.innerHTML);
  var b = Number(previousNum);

  switch (sign) {
    case '+':
      currentNumber.innerHTML = a + b;
      break;

    case '-':
      currentNumber.innerHTML = b - a;
      break;

    case '*':
      currentNumber.innerHTML = a * b;
      break;

    case '/':
      currentNumber.innerHTML = b / a;
      break;
  }
}

function clearAll() {
  result = '';
  currentNumber.innerHTML = '';
  previousNum = '';
  sign = '';
}