let onDone = () => {
    console.log("Hi There, this is onDone Function");
}

setTimeout(onDone, 5000);

let ans = 0;
for (let i = 0; i <= 100; i++) {
    ans += i;
}
console.log(ans);