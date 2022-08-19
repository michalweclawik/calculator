"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// query selector to store number which is on display
var currentNumber = document.querySelector('.currentNumber'); // query selector to store numbers from calculator 1-9 plus .

var calculatorNumbers = document.querySelectorAll('.calculator__number'); // // query selector to store operating signs 

var calculatorOperators = document.querySelectorAll('.calculator__operator'); // query selector to store number which is on display

var calculatorOutput = document.querySelector('.calculator__output');
var calculatorAc = document.querySelector('.calculator__AC');
var delButton = document.querySelector('.delButton');
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
delButton.addEventListener('click', backspace);

function backspace() {
  if (currentNumber.innerHTML === '') return;

  var current = _toConsumableArray(currentNumber.innerHTML);

  console.log(current);
  current.pop();
  current = current.join("");
  currentNumber.innerHTML = current;
}

function listNumbers(event) {
  // console.log("clicked")
  // console.log(event.target.innerHTML)
  var currentNUmber = event.target.innerHTML; // console.log(currentNUmber)

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
  var testResult = '';

  switch (sign) {
    case '+':
      testResult = b + a;
      break;

    case '-':
      testResult = b - a;
      break;

    case '*':
      testResult = a * b;
      break;

    case '/':
      testResult = b / a;
      break;
  }

  console.log(_typeof(testResult));
  return toString(testResult).length < 8 ? currentNumber.innerHTML = "error" : currentNumber.innerHTML = testResult;
}

function clearAll() {
  currentNumber.innerHTML = '';
  previousNum = '';
  sign = '';
}