let array = [7, 8, 9, 3, 6, 8, 6, 8, 5, 7],
    suma = 0,
    promedio;

for (let i = 1; i < 10; i++) {
    suma += array[i];
    promedio = suma / 10
}

console.log(promedio);