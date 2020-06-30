function add(firstValue, secondValue) {
    // let sum = numbers.reduce(((total, num) => total + num), start_value);
    // console.log(sum);
    // start_value = sum;
    let sum = parseInt(firstValue) + parseInt(secondValue);
    return sum; 
}

function subtract(firstValue, secondValue) {
    // let difference = numbers.reduce(((total, num) => total - num), start_value);
    // console.log(difference);
    // start_value = difference;
    let difference = parseInt(firstValue) - parseInt(secondValue);
    return difference;
}

function multiply(firstValue, secondValue) {
    // start_value = 1;
    // let product = numbers.reduce(((total, num) => total * num), start_value);
    // console.log(product);
    // start_value = product;
    let product = parseInt(firstValue) * parseInt(secondValue);
    return product;
}

function divide(firstValue, secondValue) {
    // start_value = 1;
    // let quotient = numbers.reduce(((total, num) => total / num), start_value);
    // console.log(quotient);
    // start_value = quotient;
    let quotient = parseInt(firstValue) / parseInt(secondValue);
    return quotient;
}

function percent(value) {
    let percentage = parseInt(value)/100;
    start_value = percentage;
    console.log(percentage);
    return percentage;
}

// Create a new function operate that takes an operator 
// and 2 numbers and then calls one of the above functions on the numbers.
function calculate(operator, firstValue, secondValue){
    let result = '';
    switch (operator) {
        case 'multiply':
            result = multiply(firstValue, secondValue);
            return result;
    
        case 'divide':
            if (secondValue == 0){
                result = "You cannot divide by 0!"
                return result;
            }
            else {
                result = divide(firstValue, secondValue);
                return result;   
            }

        case 'add':
            result = add(firstValue, secondValue);
            return result;

        case 'subtract':
            result = subtract(firstValue, secondValue);
            return result;
    }
}

let displayedNum = "";
const calculator = document.querySelector('.calculator');
const display = document.querySelector('.inputDisplay');
display.textContent = "0";

const inputButtons = document.querySelectorAll('button');
inputButtons.forEach((button) => {
    button.addEventListener('click', function(e) {
        const key = e.target;
        console.log(key);
        const action = key.dataset.action;
        console.log(action);
        const buttonValue = key.textContent
        console.log(buttonValue);
        displayedNum = display.textContent;
        const previousKeyType = calculator.dataset.previousKeyType;
        console.log(calculator.dataset);

        if (!action) {
            calculator.dataset.previousKey = 'number';
            if (displayedNum === '0' || previousKeyType === 'operator') {
                display.textContent = buttonValue;
                displayedNum = display.textContent;
                // Remove .is-depressed class from all keys
                Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-pressed'));
                
            } 
            else {
                display.textContent = displayedNum + buttonValue;
            }
        }
        
        if (action === 'decimal') {
            if (!displayedNum.includes('.')) {
                display.textContent = displayedNum + '.';
            } 
            else if (previousKeyType === 'operator') {
                display.textContent = '0.';
            }
            calculator.dataset.previousKey = 'decimal';
        }

        
        if(action === "add" || 
           action === "subtract" ||
           action === "divide" ||
           action === "multiply") {
            const firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;
            const secondValue = displayedNum;

            if (firstValue && operator && previousKeyType == 'operator' && previousKeyType !== 'calculate') {
                const calcValue = calculate(operator, firstValue, secondValue);
                display.textContent = calcValue;
                
              // Update calculated value as firstValue
                calculator.dataset.firstValue = calcValue;
            } 
            else {
                // If there are no calculations, set displayedNum as the firstValue
                calculator.dataset.firstValue = displayedNum;
            }
            key.classList.add('is-pressed');
            calculator.dataset.previousKeyType = 'operator';
            calculator.dataset.operator = action;        
        }
        
        if(action == "calculate"){
            calculator.dataset.previousKeyType = 'calculate';
            let firstValue = calculator.dataset.firstValue;
            let secondValue = displayedNum;
            const operator = calculator.dataset.operator;        
            answer = calculate(operator, firstValue, secondValue);
            display.textContent = answer;
            //if (!operator){
                
            //}
        }

        if (action == "clear"){
            calculator.dataset.previousKeyType = 'clear';
            firstValue = 0;
            secondValue = 0;
            displayedNum = "";
            operator = "";
            display.textContent = "0";
            Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-pressed'));
        }

        

    });
});

