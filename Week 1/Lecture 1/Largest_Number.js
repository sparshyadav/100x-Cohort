const ages = [21, 22, 23, 24, 25, 26];

let largest = 0;
for (let i = 0; i < ages.length; i++) {
    if (ages[i] > largest) {
        largest = ages[i];
    }
}

console.log(largest);