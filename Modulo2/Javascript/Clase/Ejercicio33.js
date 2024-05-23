function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const num = aleatorio(1,10);
console.log(num);
let multi = 1

for (i = 1; i <= num; i++) {
    multi *= i
}

console.log(multi);