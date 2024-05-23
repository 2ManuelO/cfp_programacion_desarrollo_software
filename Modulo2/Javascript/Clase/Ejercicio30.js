function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let digitos = 0;

while (digitos < 8) {
    contra = aleatorio(9999998, 10000000);
    let conversion = String(contra);
    digitos = conversion.length;
    console.log(digitos);
}

console.log('Has ingresados tu contraseña con 8 digitos');