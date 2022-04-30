const digits = document.querySelectorAll(".digit");
const operators = document.querySelectorAll(".operator");
const del = document.querySelector(".del");
const allClear = document.querySelector(".allclear");
const equals = document.querySelector(".equals");
const display = document.querySelector(".display");
const decimal = document.querySelector(".decimal");

let firstOperand = '';
let secondOperand = '';
let currentOperation = null
let shouldDisplayReset = false

digits.forEach((digit) => {
    digit.addEventListener('click', () => {
        if (shouldDisplayReset === true) {
            resetScreen()
            shouldDisplayReset = false
        }
        appendToDisplay(digit.textContent);
    })
})

operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        assignOperation(operator.textContent);
    })
})

allClear.addEventListener('click', () => {
    clearAll();
})

equals.addEventListener('click', () => {
    secondOperand = display.textContent;
    display.textContent = operate(currentOperation,firstOperand,secondOperand);
})

function appendToDisplay(number){
    display.textContent += number
}

function resetScreen(){
    display.textContent = ""
}

function clearAll(){
    firstOperand = '';
    secondOperand = '';
    currentOperation = null
    resetScreen();
}

function add(a,b) {
    return a + b
}

function subtract(a,b) {
    return a - b
}

function multiply(a,b) {
    return a * b
}

function divide(a,b) {
    return a / b
}

function assignOperation(operator) {
    firstOperand = display.textContent;
    currentOperation = operator;
    shouldDisplayReset = true;
}

function operate(operator,a,b) {
    a = Number(a)
    b = Number(b)
    
    if (operator == "+") {
        return add(a,b)
    }
    else if (operator == "-") {
        return subtract(a,b)
    }
    else if (operator == "x") {
        return multiply(a,b)
    }
    else if (operator == "÷") {
        if (b === 0) return "Nice Try Pal";
        else return divide(a,b)
    } else return null
}