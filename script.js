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

digits.forEach((digit) => {
    digit.addEventListener('click', () => {
        appendToDisplay(digit.textContent);
    })
})

operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        assignOperator(operator.textContent);
    })
})

function appendToDisplay(number){
    display.textContent += number
}

function resetScreen(){
    display.textContent = ""
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
    currentOperation = operator
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
    else if (operator == "*") {
        return multiply(a,b)
    }
    else if (operator == "÷") {
        if (b === 0) return "Nice Try Pal";
        else return divide(a,b)
    } else return null
}