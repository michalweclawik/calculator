"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// query selector to store number which is on display
var currentNumber = document.querySelector('.currentNumber'); // query selector to store numbers from calculator 1-9 plus .

var calculatorNumbers = document.querySelectorAll('.calculator__number'); // // query selector to store operating signs 

var calculatorOperators = document.querySelectorAll('.calculator__operator'); // query selector to get answer

var calculatorOutput = document.querySelector('.calculator__output'); // query selector to chain AC

var calculatorAc = document.querySelector('.calculator__AC'); // query selector to chain DEL

var delButton = document.querySelector('.delButton'); // query selector for ul

var historyList = document.querySelector(".history__list"); // input box in progres
// const input__box = document.querySelector(".input__box")

var previousNum = '';
var sign = '';
var testResult = ''; // arrays

calculatorNumbers.forEach(function (button) {
  return button.addEventListener('click', listNumbers);
});
calculatorOperators.forEach(function (button) {
  return button.addEventListener('click', operatorFunction);
}); // sigle buttons

calculatorOutput.addEventListener('click', getResult);
calculatorAc.addEventListener('click', clearAll);
delButton.addEventListener('click', backSpace); // listing digit on display

function listNumbers(event) {
  // console.log("clicked")
  // console.log(event.target.innerHTML)
  var currentNUmber = event.target.innerHTML; // console.log(currentNUmber)
  // condition to check dot

  if (currentNUmber === '.' && currentNumber.innerHTML.includes('.')) return;
  if (currentNUmber === '.' && currentNumber.innerHTML === '') return currentNumber.innerHTML = '0.'; // control number of digits 

  if (currentNumber.innerHTML.length < 11) {
    return currentNumber.innerHTML += currentNUmber;
  } else {
    return currentNumber.innerHTML;
  }
}

function operatorFunction(event) {
  // trap logical operator
  // console.log(sign)
  // scenario minus in front number 
  if (currentNumber.innerHTML === '' && sign === '-') {
    currentNumber.innerHTML = '-';
    sign = '';
    return;
  } // check if current number is empty 
  else if (currentNumber.innerHTML === '') {
      return;
    } //  if want to keep calculating


  if (sign !== '') {
    getResult();
  }

  sign = event.target.innerHTML; // trap current number 

  previousNum = currentNumber.innerHTML; // reset number 

  currentNumber.innerHTML = '';
}

function getResult() {
  //  check if numbers been assign 
  if (previousNum === '' || currentNumber.innerHTML === '') return; // math 

  var a = Number(currentNumber.innerHTML);
  var b = Number(previousNum); // switch

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
  } // space control on display 


  var message = "error"; // control decimal and convert to string 

  var testResultFixed = parseFloat(Number(testResult).toFixed(3));
  console.log(testResult);
  testResult = testResultFixed.toString(); // console.log(testResult)
  // console.log(typeof testResult)

  if (testResult.length < 12) {
    moveToHistory();
    previousNum = '';
    sign = '';
    currentNumber.innerHTML = testResult;
    testResult = '';
  } else {
    return currentNumber.innerHTML = message;
  } // let message = "error";
  // let testResultString = testResult.toString();
  // console.log(testResultString);
  // console.log(testResultString.length)
  // if (testResultString.length < 12) {
  //     currentNumber.innerHTML = testResult;
  //     moveToHistory()
  //     previousNum = '';
  //     sign = '';
  // } else {
  //     return currentNumber.innerHTML = message;
  // }

} // AC function set variable to empty strings


function clearAll() {
  currentNumber.innerHTML = '';
  previousNum = '';
  sign = '';
} //  backSpace function array operation 


function backSpace() {
  if (currentNumber.innerHTML === '') return;

  var current = _toConsumableArray(currentNumber.innerHTML); // console.log(current);


  current.pop();
  current = current.join("");
  currentNumber.innerHTML = current;
}

function moveToHistory() {
  //  add result to list 
  // first create element -> li under ul
  var resultHistory = document.createElement("li"); // assign value

  resultHistory.innerHTML = "".concat(testResult); // assing class to listed item 

  resultHistory.classList.add("history__item"); //  add ls to ul 

  historyList.appendChild(resultHistory); // remove history 

  resultHistory.addEventListener('click', function (event) {
    if (event.target = resultHistory.innerHTML) {
      event.target.remove();
    }

    return;
  });
}