function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let miNum = aleatorio(1, 1500);
let contador = 1;

for (i = 0; i <= 1; i++) {
    if (miNum < 10) {
        i = 1;
    } else {
        i = 0;
        contador += 1;
        miNum = miNum/10;
    }
}

console.log(contador);
