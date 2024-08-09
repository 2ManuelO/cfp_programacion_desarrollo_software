let array = [5, 2, 3, 4, 7, 9, 8, 12]
let minimo = 0;
let maximo = 0;

for (let i = 0; i < 10; i++) {
    if (minimo === 0) {
        minimo = array[1];
    } else if (array[i] < minimo) {
        minimo = array[i];
    }

    if (array[i] > maximo) {
        maximo = array[i]
    }
}

console.log(minimo);
console.log(maximo);

