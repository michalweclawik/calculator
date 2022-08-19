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

var delButton = document.querySelector('.delButton');
var previousNum = '';
var sign = ''; // arrays

calculatorNumbers.forEach(function (button) {
  return button.addEventListener('click', listNumbers);
});
calculatorOperators.forEach(function (button) {
  return button.addEventListener('click', operatorFunction);
}); // sigle buttons

calculatorOutput.addEventListener('click', getResult);
calculatorAc.addEventListener('click', clearAll);
delButton.addEventListener('click', backspace); // listing digit on display

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
  // console.log(sign)
  // minus in front number 
  if (currentNumber.innerHTML === '' && sign === '-') {
    currentNumber.innerHTML = '-';
    return;
  } // check if current number is empty 
  else if (currentNumber.innerHTML === '') {
      return;
    } //  if want to keep adds values 


  if (sign !== '') {
    getResult();
  } // if we have operator trap current number 


  previousNum = currentNumber.innerHTML; // trap logical operator 

  sign = event.target.innerHTML; // reset number 

  currentNumber.innerHTML = '';
}

function getResult() {
  //  check if numbers been asign 
  if (previousNum === '' || currentNumber.innerHTML === '') return; // math 

  var a = Number(currentNumber.innerHTML);
  var b = Number(previousNum);
  var testResult = Number();

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

  console.log(testResult); // this is number 
  // console.log(typeof testResult)

  var message = "error";

  if (testResult < 99999999999) {
    currentNumber.innerHTML = testResult;
    previousNum = '';
    sign = '';
  } else {
    return currentNumber.innerHTML = message;
  } // let result = toString(testResult)
  // // this is string 
  // console.log(typeof result)
  // console.log(result.length)


  return currentNumber.innerHTML = testResult;
  console.log(testResult); // return testResult > 999999999 ? currentNumber.innerHTML = message : currentNumber.innerHTML = testResult;
}

function clearAll() {
  currentNumber.innerHTML = '';
  previousNum = '';
  sign = '';
  testResult = '';
}

function backspace() {
  if (currentNumber.innerHTML === '') return;

  var current = _toConsumableArray(currentNumber.innerHTML);

  console.log(current);
  current.pop();
  current = current.join("");
  currentNumber.innerHTML = current;
}