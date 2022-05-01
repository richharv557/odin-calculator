//TO ADD: DELETE FUNCTION, some kind of convert to array, look for a . if present, add if not, convert back to string logic.
// MAKE IT LOOK NICE, MAYBE ADD AN ANIMATION AND COOL COLOR SCHEME.

const digits = document.querySelectorAll(".digit");
const operators = document.querySelectorAll(".operator");
const del = document.querySelector(".del");
const allClear = document.querySelector(".allclear");
const equals = document.querySelector(".equals");
const display = document.querySelector(".display");
const decimal = document.querySelector(".decimal");

// Need flags to impact future behavior on button presses

let firstOperand = '';
let secondOperand = '';
let currentOperation = null;
let shouldDisplayReset = false;

// assign number appending function to string, and facilitate reset behavior based on the flag above

digits.forEach((digit) => {
    digit.addEventListener('click', () => {
        if (shouldDisplayReset === true) {
            resetScreen()
            shouldDisplayReset = false
        }
        appendToDisplay(digit.textContent);
    })
})

// similar to above, but just assigning the operation

operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        if (shouldDisplayReset === true) {
            resetScreen()
            shouldDisplayReset = false
        }
        assignOperation(operator.textContent);
    })
})

// Assigning clearAll function to button

allClear.addEventListener('click', () => {
    clearAll();
})

// Assigning operator function to equals. Takes content of screen, maps it to second operand, and then operates. Sets current operation to null
// since none are selected anymore.

equals.addEventListener('click', () => {
    if (shouldDisplayReset === true) {
        resetScreen()
        shouldDisplayReset = false
    }
    if (currentOperation !== null) {
        secondOperand = display.textContent;
        display.textContent = operate(currentOperation,firstOperand,secondOperand);
        currentOperation = null;
    } else null

})

// key functions - these handle the working of operator buttons. The first function finishes the processing of an existing operation
// if it's ongoing, and then resumes the normal functioning of assigning to the first operand and receiving input for the second operand into
// the display. Second function calls the specific operator functions to return the value.

function assignOperation(operator) {
    if (currentOperation !== null){
        secondOperand = display.textContent;
        display.textContent = operate(currentOperation,firstOperand,secondOperand)
    }
    firstOperand = display.textContent;
    currentOperation = operator;
    shouldDisplayReset = true;
    }

function operate(operator,a,b) {
    a = Number(a);
    b = Number(b);
    
    if (operator === "+") {
        return add(a,b)
    }
    else if (operator === "-") {
        return subtract(a,b)
    }
    else if (operator === "x") {
        return multiply(a,b)
    }
    else if (operator === "÷") {
        if (b === 0) {
            shouldDisplayReset = true;
            return "Nice Try, Pal"
        }
        else {
            return divide(a,b)
        }
    } else return null
}
// smaller functions to update the display or clear display/variables

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

// basic math functions

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