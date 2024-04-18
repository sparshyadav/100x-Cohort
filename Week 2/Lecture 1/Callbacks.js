function square(n) {
    return n * n;
}

function cube(n) {
    return n * n * n;
}

function sumOfSomething(a, b, c) {
    return c(a) + c(b);
}

let ans1 = sumOfSomething(2, 3, square);
let ans2 = sumOfSomething(2, 3, cube);

console.log(ans1);
console.log(ans2);

