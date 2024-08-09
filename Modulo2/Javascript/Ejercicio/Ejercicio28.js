function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let numeroAleatorio = aleatorio(1, 50);
console.log(numeroAleatorio);
let miNumero = 0;
let intentos = 0

while (miNumero !== numeroAleatorio) {
    intentos += 1;
    miNumero = aleatorio(1, 50);
}

console.log(`El número es ${miNumero} en el intento ${intentos}`);
