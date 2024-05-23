function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


let numeroAleatorio = 0;
let suma = 0;

while (numeroAleatorio > -1) {
    let min = -2;
    let max = 10;
    suma += numeroAleatorio;
    numeroAleatorio = aleatorio(min, max);
    console.log(numeroAleatorio);
}

console.log(suma);
