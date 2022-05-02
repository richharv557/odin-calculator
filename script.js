const digits = document.querySelectorAll(".digit");
const operators = document.querySelectorAll(".operator");
const del = document.querySelector(".del");
const allClear = document.querySelector(".allclear");
const equals = document.querySelector(".equals");
const display = document.querySelector(".display");
const decimal = document.querySelector(".decimal");

// Need these flags to impact future behavior on button presses

let firstOperand = '';
let secondOperand = '';
let currentOperation = null;
let shouldDisplayReset = true;

// initialize joke

display.textContent = "Moo."

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

// Assigning clearAll and delete function to button

allClear.addEventListener('click', () => {
    clearAll();
})

decimal.addEventListener('click', () => {
    if (shouldDisplayReset === true) {
        resetScreen()
        shouldDisplayReset = false
    }
    appendDecimal();
})

del.addEventListener('click', () => {
    delLastNumber();
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
        return round(add(a,b))
    }
    else if (operator === "-") {
        return round(subtract(a,b))
    }
    else if (operator === "x") {
        return round(multiply(a,b))
    }
    else if (operator === "÷") {
        if (b === 0) {
            shouldDisplayReset = true;
            return "Nice Try, Pal"
        }
        else {
            return round(divide(a,b))
        }
    } else return null
}
// smaller functions to update the display or clear display/variables

function appendDecimal(){
    if (display.textContent.includes(".")) {
        return null
    }
    appendToDisplay(".")
}

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

function delLastNumber(){
    let tempArray = display.textContent.split("");
    tempArray = tempArray.slice(0,-1)
    display.textContent = tempArray.join("")
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

// Want to leave it without fixed number if there is no need, round at 8 decimals 

function round(number){
    return Math.round(number * 100000000) / 100000000
}

