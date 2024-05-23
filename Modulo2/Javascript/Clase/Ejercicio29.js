function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const NUM_FACTORIAL = aleatorio(1,10);
let contador = 0
let multi = 1

while (contador < NUM_FACTORIAL) {
    contador += 1;
    multi *= contador
}

console.log(NUM_FACTORIAL);
console.log(multi);
