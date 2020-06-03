function add(numbers) {
    // let sum = 0;
    // for(let x = 0; x<numbers.length; x++){
    //     sum += numbers[x];
    // }
    // console.log(sum);
    // return sum;
    let sum = numbers.reduce((total, num) => total + num);
    console.log(sum);
    return sum; 
}

function subtract(numbers) {
    let difference = numbers.reduce((total, num) => total - num);
    console.log(difference);
    return difference;
}

function multiply(numbers) {
    let product = numbers.reduce((total, num) => total * num);
    console.log(product);
    return product;
}

function divide(numbers) {
    let quotient = numbers.reduce((total, num) => total / num);
    console.log(quotient);
    return quotient;
}

numbers = [8,4,2];
add(numbers);
subtract(numbers);
multiply(numbers);
divide(numbers);