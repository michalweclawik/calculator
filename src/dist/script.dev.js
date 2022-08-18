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
  // console.log("clicked")
  // console.log(event.target.innerHTML)
  var currentNUmber = event.target.innerHTML;
  console.log(currentNUmber);
  if (currentNUmber === '.' && currentNumber.innerHTML.includes('.')) return;
  if (currentNUmber === '.' && currentNumber.innerHTML === '') return currentNumber.innerHTML = '0.';

  if (currentNumber.innerHTML.length < 8) {
    return currentNumber.innerHTML += currentNUmber;
  } else {
    return currentNumber.innerHTML;
  }
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
  var testResult = Number();

  switch (sign) {
    case '+':
      testResult.innerHTML = a + b;
      break;

    case '-':
      testResult.innerHTML = b - a;
      break;

    case '*':
      testResult.innerHTML = a * b;
      break;

    case '/':
      testResult.innerHTML = b / a;
      break;
  }

  console.log(testResult);
}

function clearAll() {
  result = '';
  currentNumber.innerHTML = '';
  previousNum = '';
  sign = '';
}