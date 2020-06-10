var start_value = 0;
function add(num1, num2) {
    // let sum = numbers.reduce(((total, num) => total + num), start_value);
    // console.log(sum);
    // start_value = sum;
    let sum = num1 + num2;
    return sum; 
}

function subtract(num1, num2) {
    // let difference = numbers.reduce(((total, num) => total - num), start_value);
    // console.log(difference);
    // start_value = difference;
    let difference = num1 - num2;
    return difference;
}

function multiply(num1, num2) {
    // start_value = 1;
    // let product = numbers.reduce(((total, num) => total * num), start_value);
    // console.log(product);
    // start_value = product;
    let product = num1 * num2;
    return product;
}

function divide(num1, num2) {
    // start_value = 1;
    // let quotient = numbers.reduce(((total, num) => total / num), start_value);
    // console.log(quotient);
    // start_value = quotient;
    let quotient = num1 / num2;
    return quotient;
}

function percent(value) {
    let percentage = value/100;
    start_value = percentage;
    console.log(percentage);
    return percentage;
}

// Create a new function operate that takes an operator 
// and 2 numbers and then calls one of the above functions on the numbers.
function operate(operator, num1, num2){
    switch (operator) {
        case 'multiply':
            return multiply(num1, num2);
    
        case 'divide':
            return divide(num1, num2);
        
        case 'add':
            return add(num1, num2);
        
        case 'subtract':
            return subtract(num1, num2);
    }
}

let displayedNum = "";
let num1 = 0;
let num2 = 0;
let answer = 0;
let operator = "";
const calculator = document.querySelector('.calculator');
const display = document.querySelector('.inputDisplay');
display.textContent = "0";

const inputButtons = document.querySelectorAll('button');
inputButtons.forEach((button) => {
    button.addEventListener('click', function(e) {
        const key = e.target;
        const action = key.dataset.action;
        const buttonValue = key.textContent
        console.log(buttonValue);
        displayedNum = display.textContent;
        const previousKeyType = calculator.dataset.previousKeyType;

        if (!action) {
            calculator.dataset.previousKey = 'number';
            if (displayedNum === '0' || previousKeyType === 'operator') {
                display.textContent = buttonValue;
                // Remove .is-depressed class from all keys
                Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-pressed'))
                
            } 
            else {
                display.textContent = displayedNum + buttonValue;
            }
        }
        
        if (action === 'decimal') {
            if (!displayedNum.includes('.')) {
                display.textContent = displayedNum + '.'
            } 
            else if (previousKeyType === 'operator') {
                display.textContent = '0.'
            }
            calculator.dataset.previousKey = 'decimal';
        }

        
        if(action === "add" || 
           action === "subtract" ||
           action === "divide" ||
           action === "multiply") {
            key.classList.add('is-pressed');
            calculator.dataset.previousKeyType = 'operator';
            num1 = parseInt(displayedNum);
            operator = action;
        }
        
        if(action == "equals"){
            calculator.dataset.previousKeyType = 'calculate';
            num2 = parseInt(displayedNum);
            answer = operate(operator, num1, num2);
            display.textContent = answer;
        }

        if (action == "clear"){
            calculator.dataset.previousKeyType = 'clear';
            num1 = 0;
            num2 = 0;
            displayedNum = "";
            operator = "";
            display.textContent = "0";
        }


       

       /*  let buttonValue = button.value;
        console.log(buttonValue);
        displayedNum += buttonValue;
        displayedNum = parseInt(displayedNum);
        display.textContent = displayedNum;
        console.log(displayedNum);

        switch (buttonValue) {
            case "+":
                num1 = displayedNum;
                display.textContent = num1 + " " + buttonValue;
                operator = "+";
                 
                break;
        
            case "-":

                break;

            case "/":

                break;
            
            case "*":

                break;

            case "=":
                num2 = displayedNum;
                switch (operator) {
                    case "+":
                        answer = operate("+", num1, num2);
                        break;
                
                    case "-":
                        break;

                    case "/":

                        break;
                    
                    case "*":
        
                        break;
                }
                break;

            case "clear":
                num1 = 0;
                num2 = 0;
                displayedNum = "";
                display.textContent = "0";
                break;
        }
        if(operator != ""){
            displayedNum = "";
            displayedNum = buttonValue;
            display.textContent = displayedNum;
        } */
        

    });
});

