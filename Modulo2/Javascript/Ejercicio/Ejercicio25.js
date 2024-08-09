function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let contraIngresada = aleatorio(1, 100);
let contraseña = 50;
let intentos = 0

while (contraseña !== contraIngresada) {
    intentos += 1;
    contraIngresada = aleatorio(1, 100);
}

console.log(`El número es ${contraseña} en el intento ${intentos}`);