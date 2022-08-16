let numbers = document.querySelectorAll('.calculator__number');
let operators = document.querySelectorAll('.calculator__operator');
let ac = document.querySelector('.calculator__AC');
let output = document.querySelector('.calculator__output');
let previousResult = document.querySelector('.calculator__currentperation');
let currentResult = document.querySelector('.calculator__previousoperation');




let currrentReading = '';
let previousReading = '';

const updateResult = () => {
    currentResult.innerText = currrentReading;
    previousResult.innerText = previousReading;
}



const listingNumbers = (number) => {
    currrentReading = currrentResult.toString() + number.toString();

}
console.log(numbers.innerText)


numbers.forEach((number) => {
    number.addEventListener('click', () => {
        console.log((number.innerText))

        listingNumbers(number.innerText)
        updateResult()
    })
})