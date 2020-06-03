function add(numbers) {
    let sum = 0;
    for(let x = 0; x<numbers.length; x++){
        sum += numbers[x];
    }
    console.log(sum);
    return sum;
}

function subtract(numbers) {
    let difference = 0;
    for(let x = 1; x<numbers.length; x++){
        difference = numbers[x-1] - numbers[x];
    }
    console.log(difference);
    return difference;
}

function multiply(numbers) {
    let product = 1;
    for(let x = 1; x<numbers.length; x++){
        product *= numbers[x-1] * numbers[x];
    }
    console.log(product);
    return product;
}

function divide(numbers) {
    let quotient = 0;
    for(let x = 1; x<numbers.length; x++){
        quotient = numbers[x-1] / numbers[x];
    }
    console.log(quotient);
    return quotient;
}

numbers = [8,4,2,2];
add(numbers);
subtract(numbers);
multiply(numbers);
divide(numbers);