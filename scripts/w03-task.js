
function add(number1, number2) {
    return number1 + number2;
}

function addNumbers() {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}


document.querySelector('#addNumbers').addEventListener('click', addNumbers);

const subtract = function(number1, number2) {
    return number1 - number2;
};

const subtractNumbers = function() {
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
};


document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
    let factor1 = Number(document.querySelector('#factor1').value);
    let factor2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(factor1, factor2);
};

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);


function divide(number1, number2) {
    return number1 / number2;
}

function divideNumbers() {
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide(dividend, divisor);
}


document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

document.querySelector('#getTotal').addEventListener('click', function() {
    let subtotal = Number(document.querySelector('#subtotal').value);
    let isMember = document.querySelector('#member').checked;
    let total = isMember ? subtotal * 0.8 : subtotal;
    document.querySelector('#total').textContent = `Total: $${total.toFixed(2)}`;
});



document.addEventListener('DOMContentLoaded', function() {
    let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    document.querySelector('#array').innerHTML = numbersArray.join(', ');
    document.querySelector('#array').innerHTML = numbersArray.join(', ');
    document.querySelector('#odds').innerHTML = numbersArray.filter(number => number % 2).join(', ');
    document.querySelector('#evens').innerHTML = numbersArray.filter(number => number % 2 === 0).join(', ');
    document.querySelector('#sumOfArray').innerHTML = numbersArray.reduce((sum, number) => sum + number);
    document.querySelector('#multiplied').innerHTML = numbersArray.map(number => number * 2).join(', ');
    document.querySelector('#sumOfMultiplied').innerHTML = numbersArray.map(number => number * 2).reduce((sum, number) => sum + number);
});

//Getting used to the syntax, some things are defiently a growing pain but in due time! kept forgetting the #
// for querySelector and found the DOMContent online