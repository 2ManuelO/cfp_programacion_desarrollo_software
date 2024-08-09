let array = [2,3,4,6,7,8,9,1],
    contador = 0;

for (let i = 0; i < 10; i++){
    if (array[i]%2 == 0) {
        contador += 1;
    }
}

console.log(contador);