// query selector to store number which is on display

const currentNumber = document.querySelector('.currentNumber');
// query selector to store numbers from calculator 1-9 plus .
const calculatorNumbers = document.querySelectorAll('.calculator__number');
// // query selector to store operating signs 
const calculatorOperators = document.querySelectorAll('.calculator__operator');
// query selector to get answer
const calculatorOutput = document.querySelector('.calculator__output');
// query selector to chain AC
const calculatorAc = document.querySelector('.calculator__AC');
// query selector to chain DEL
const delButton = document.querySelector('.delButton')

let previousNum = '';
let sign = '';

// arrays
calculatorNumbers.forEach((button) => button.addEventListener('click', listNumbers));

calculatorOperators.forEach((button) => button.addEventListener('click', operatorFunction))


// sigle buttons
calculatorOutput.addEventListener('click', getResult);
calculatorAc.addEventListener('click', clearAll);
delButton.addEventListener('click', backspace);




// listing digit on display

function listNumbers(event) {
    // console.log("clicked")
    // console.log(event.target.innerHTML)


    let currentNUmber = event.target.innerHTML;
    // console.log(currentNUmber)
    // condition to check dot
    if (currentNUmber === '.' && currentNumber.innerHTML.includes('.')) return;
    if (currentNUmber === '.' && currentNumber.innerHTML === '') return currentNumber.innerHTML = '0.';

    // control number of digits 
    if (currentNumber.innerHTML.length < 11) {
        return currentNumber.innerHTML += currentNUmber;
    } else {
        return currentNumber.innerHTML
    }
}


function operatorFunction(event) {

    // trap current number 
    previousNum = currentNumber.innerHTML;
    // trap logical operator 
    sign = event.target.innerHTML;
    // console.log(sign)

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
    let testResult = Number();

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


    // this is number 
    // console.log(typeof testResult)
    let message = "error"
    if (testResult < 99999999999) {
        currentNumber.innerHTML = testResult
    }
    return currentNumber.innerHTML = message;


    // let result = toString(testResult)
    // // this is string 
    // console.log(typeof result)

    // console.log(result.length)
    return currentNumber.innerHTML = testResult

    console.log(testResult)
    // return testResult > 999999999 ? currentNumber.innerHTML = message : currentNumber.innerHTML = testResult;

}

function clearAll() {

    currentNumber.innerHTML = '';
    previousNum = '';
    sign = '';
    testResult = '';

}

function backspace() {

    if (currentNumber.innerHTML === '') return;
    let current = [...currentNumber.innerHTML];
    console.log(current);
    current.pop();
    current = current.join("");
    currentNumber.innerHTML = current;

}