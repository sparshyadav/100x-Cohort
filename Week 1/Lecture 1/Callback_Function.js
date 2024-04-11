function sum(num1, num2, fnToCall) {
    let result = num1 + num2;
    fnToCall(result);
}

function displayActive(data) {
    console.log("Result of the sum is: ", data);
}

function displayPassive(data) {
    console.log("Sum's result is: ", data);
}

sum(1, 2, displayActive);
sum(2, 3, displayPassive);