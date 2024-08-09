function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


let numeroAleatorio = 0;
let suma = 0;

while (numeroAleatorio <= 0) {
    let min = -10;
    let max = 2;
    suma += numeroAleatorio;
    numeroAleatorio = aleatorio(min, max);
    console.log(numeroAleatorio);
}

console.log(1*-(suma));