function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let array = [];
let num;
let suma = 0;
for (i = 1; i <= 5; i++) {
    num = aleatorio(1, 10);
    suma += num
    array.push(num);
}


console.log(`El array es ${array} y la suma de sus valores es ${suma}`);