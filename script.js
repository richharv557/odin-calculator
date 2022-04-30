const digits = document.querySelectorAll(".digit");

digits.forEach((digit) => {
    digit.addEventListener('click', () => {
        displayValue.push(digit.textContent);
        updateDisplay();
    })
})

const display = document.querySelector(".display");

let displayValue = [];
display.textContent = displayValue.join("");

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

function operate(operator,a,b) {
    if (operator == "+") {
        return add(a,b)
    }
    else if (operator == "-") {
        return subtract(a,b)
    }
    else if (operator == "*") {
        return multiply(a,b)
    }
    else if (operator == "/") {
        return divide(a,b)
    }
}

function updateDisplay(){
    display.textContent = displayValue.join("");
}

