const screenDisplay = document.querySelector('.screen');
const button = document.querySelectorAll('button');


let calculation = [];
let accumulativeCalculation;

function calculate(button) {
    const value = button.textContent;
    if (value === 'Clear') {
        calculation = [];
        screenDisplay.textContent = '.';
    } else if (value === '=') {
        screenDisplay.textContent = eval(accumulativeCalculation)
    } else {
        calculation.push(value);
        accumulativeCalculation = calculation.join('');
        screenDisplay.textContent = accumulativeCalculation;
    }

   
}
button.forEach(button => button.addEventListener('click', () => calculate(button)));