function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let suma = 0;
let repeticiones = 0;
let num = 0

while (repeticiones < 10) {
    repeticiones += 1
    if(num%2 == 0) {
        num = aleatorio (1,100);
        suma += num;
        console.log(num);
    } else (
        num = aleatorio (1,100)
    )
}

console.log(suma);