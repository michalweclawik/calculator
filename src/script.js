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
const delButton = document.querySelector('.delButton');
// query selector for ul
const historyList = document.querySelector(".history__list");
// input box in progres
// const input__box = document.querySelector(".input__box")


let previousNum = '';
let sign = '';
let testResult = '';


// arrays
calculatorNumbers.forEach((button) => button.addEventListener('click', listNumbers));

calculatorOperators.forEach((button) => button.addEventListener('click', operatorFunction))



// sigle buttons
calculatorOutput.addEventListener('click', getResult);
calculatorAc.addEventListener('click', clearAll);
delButton.addEventListener('click', backSpace);



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
    // trap logical operator

    // console.log(sign)
    // scenario minus in front number 
    if (currentNumber.innerHTML === '' && sign === '-') {
        currentNumber.innerHTML = '-';
        sign = '';
        return;
    }
    // check if current number is empty 
    else if (currentNumber.innerHTML === '') {
        return;
    }

    //  if want to keep calculating
    if (sign !== '') {
        getResult();
    }

    sign = event.target.innerHTML;





    // trap current number 
    previousNum = currentNumber.innerHTML;
    // reset number 
    currentNumber.innerHTML = '';
}



function getResult() {
    //  check if numbers been assign 
    if (previousNum === '' || currentNumber.innerHTML === '') return;

    // math 
    let a = Number(currentNumber.innerHTML);
    let b = Number(previousNum);
    // switch
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


    // space control on display 
    let message = "error";
    // control decimal and convert to string 

    let testResultFixed = parseFloat(Number(testResult).toFixed(3));

    console.log(testResult)

    testResult = testResultFixed.toString();

    // console.log(testResult)
    // console.log(typeof testResult)

    if (testResult.length < 12) {


        moveToHistory()
        previousNum = '';
        sign = '';
        currentNumber.innerHTML = testResult;

    } else {
        return currentNumber.innerHTML = message;
    }

    // let message = "error";
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






}
// AC function set variable to empty strings
function clearAll() {

    currentNumber.innerHTML = '';
    previousNum = '';
    sign = '';
}

//  backSpace function array operation 
function backSpace() {

    if (currentNumber.innerHTML === '') return;
    let current = [...currentNumber.innerHTML];
    // console.log(current);
    current.pop();
    current = current.join("");
    currentNumber.innerHTML = current;

}

function moveToHistory() {

    //  add result to list 

    // first create element -> li under ul
    const resultHistory = document.createElement("li");

    // assign value
    resultHistory.innerHTML = `${testResult}`;

    // assing class to listed item 
    resultHistory.classList.add("history__item");

    //  add ls to ul 
    historyList.appendChild(resultHistory);

    // remove history 
    resultHistory.addEventListener('click', (event) => {

        if (event.target = resultHistory.innerHTML) {
            event.target.remove()
        }
        return
    })


}