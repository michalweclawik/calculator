// query selector to store number which is on display

const currentNumber = document.querySelector('.currentNumber');
// query selector to store numbers from calculator 1-9 plus .
const calculatorNumbers = document.querySelectorAll('.calculator__number');
// // query selector to store operating signs 
const calculatorOperators = document.querySelectorAll('.calculator__operator');
// query selector to store number which is on display
const calculatorOutput = document.querySelector('.calculator__output');
const calculatorAc = document.querySelector('.calculator__AC');

const delButton = document.querySelector('.delButton')


let previousNum = '';
let sign = '';


calculatorNumbers.forEach((button) => button.addEventListener('click', listNumbers));

calculatorOperators.forEach((button) => button.addEventListener('click', operatorFunction))



calculatorOutput.addEventListener('click', getResult);
calculatorAc.addEventListener('click', clearAll);
delButton.addEventListener('click', backspace);


function backspace() {

    if (currentNumber.innerHTML === '') return;
    let current = [...currentNumber.innerHTML];
    console.log(current);
    current.pop();
    current = current.join("");
    currentNumber.innerHTML = current;

}



function listNumbers(event) {
    // console.log("clicked")
    // console.log(event.target.innerHTML)


    let currentNUmber = event.target.innerHTML;
    // console.log(currentNUmber)

    if (currentNUmber === '.' && currentNumber.innerHTML.includes('.')) return;
    if (currentNUmber === '.' && currentNumber.innerHTML === '') return currentNumber.innerHTML = '0.';

    if (currentNumber.innerHTML.length < 8) {
        return currentNumber.innerHTML += currentNUmber;
    } else {
        return currentNumber.innerHTML
    }
}


function operatorFunction(event) {


    previousNum = currentNumber.innerHTML;
    sign = event.target.innerHTML;
    console.log(sign)

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

    let a = Number(currentNumber.innerHTML);
    let b = Number(previousNum);
    let testResult = '';

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
    console.log(typeof testResult);

    return toString(testResult).length < 8 ? currentNumber.innerHTML = "error" : currentNumber.innerHTML = testResult;

}

function clearAll() {

    currentNumber.innerHTML = '';
    previousNum = '';
    sign = '';

}