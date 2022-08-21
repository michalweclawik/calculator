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
var testResult = Number(); // arrays

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
  // console.log(sign)
  // minus in front number 
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
  } // trap logical operator


  sign = event.target.innerHTML; // trap current number 

  previousNum = currentNumber.innerHTML; // trap logical operator 
  // sign = event.target.innerHTML;
  // reset number 

  currentNumber.innerHTML = '';
}

function getResult() {
  //  check if numbers been asign 
  if (previousNum === '' || currentNumber.innerHTML === '') return; // math 

  var a = Number(currentNumber.innerHTML);
  var b = Number(previousNum);

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
  } // console.log(testResult)
  // this is number 
  // console.log(typeof testResult)
  // space control on display 


  var message = "error";
  var testResultString = testResult.toString();
  console.log(testResultString);
  console.log(testResultString.length);

  if (testResultString.length < 12) {
    currentNumber.innerHTML = testResult;
    moveToHistory();
    previousNum = '';
    sign = '';
  } else {
    return currentNumber.innerHTML = message;
  }
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
  // console.log("yo")
  // first create element -> li under ul
  var resultHistory = document.createElement("li"); // button to add coment in progress
  // const buttonAddComent = document.createElement("button");

  resultHistory.innerHTML = "".concat(testResult); // buttonAddComent.innerHTML = "addCom";
  // assing class to listed item 

  resultHistory.classList.add("history__item"); // buttonAddComent.classList.add("button")
  //  add ls to ul 

  historyList.appendChild(resultHistory); // resultHistory.appendChild(buttonAddComent);

  resultHistory.addEventListener('click', function (event) {
    // remove the li that has been clicked
    // if (event.target = buttonAddComent.innerHTML) {
    // console.log("buttin")
    // createDescription()
    // const input = document.createElement("input")
    // input.classList.add("input__box");
    // historyList.appendChild(input);
    //     input.addEventListener('click', () => {
    //         const description = input.value
    //         const text = document.createElement("p")
    //         text.innerHTML = description
    //         text.classList.add("text");
    //         resultHistory.appendChild(text);
    //         console.log(description)
    //     })
    // }
    if (event.target = resultHistory.innerHTML) {
      event.target.remove();
    }

    return;
  });
} // function createDescription() {
//     const input = document.createElement("input")
//     input.classList.add("input__box");
//     historyList.appendChild(input);
//     input.addEventListener('click', () => {
//         const description = input.value
//         const text = document.createElement("p")
//         text.innerHTML = description
//         text.classList.add("text");
//         resultHistory.appendChild(text);
//         console.log(description)
//     })
// }