function findSum(n) {
    let ans = 0;

    for (let i = 1; i <= n; i++) {
        ans += i;
    }

    return ans;
}

function findSumTill100() {
    let sum = findSum(100);
    console.log(sum);
    return sum;
}

setTimeout(findSumTill100, 1000);
console.log("Hello World");