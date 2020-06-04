var start_value = 0;
function add(numbers) {
    // let sum = 0;
    // for(let x = 0; x<numbers.length; x++){
    //     sum += numbers[x];
    // }
    // console.log(sum);
    // return sum;
    let sum = numbers.reduce(((total, num) => total + num), start_value);
    console.log(sum);
    start_value = sum;
    return sum; 
}

function subtract(numbers) {
    let difference = numbers.reduce(((total, num) => total - num), start_value);
    console.log(difference);
    start_value = difference;
    return difference;
}

function multiply(numbers) {
    start_value = 1;
    let product = numbers.reduce(((total, num) => total * num), start_value);
    console.log(product);
    start_value = product;
    return product;
}

function divide(numbers) {
    start_value = 1;
    let quotient = numbers.reduce(((total, num) => total / num), start_value);
    console.log(quotient);
    start_value = quotient;
    return quotient;
}

// Create a new function operate that takes an operator 
// and 2 numbers and then calls one of the above functions on the numbers.
function operate(operator, numbers){
    switch (operator) {
        case '*':
            multiply(numbers);
            break;
    
        case '/':
            divide(numbers);
            break;
        
        case '+':
            add(numbers);
            break;
        
        case '-':
            subtract(numbers);
            break;
    }
}

operate('/', [1,2,3,4,5]);
