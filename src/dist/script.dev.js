"use strict";

var numbers = document.querySelectorAll('.calculator__number');
var operators = document.querySelectorAll('.calculator__operator');
var ac = document.querySelector('.calculator__AC');
var output = document.querySelector('.calculator__output');
var previousResult = document.querySelector('.calculator__currentperation');
var currentResult = document.querySelector('.calculator__previousoperation');
var currrentReading = '';
var previousReading = '';

var updateResult = function updateResult() {
  currentResult.innerText = currrentReading;
  previousResult.innerText = previousReading;
};

var listingNumbers = function listingNumbers(number) {
  currrentReading = currrentResult.toString() + number.toString();
};

console.log(numbers.innerText);
numbers.forEach(function (number) {
  number.addEventListener('click', function () {
    console.log(number.innerText);
    listingNumbers(number.innerText);
    updateResult();
  });
});