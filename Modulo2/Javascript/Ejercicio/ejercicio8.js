function reverso (numeros) {
    let cantidadArray = numeros.length;
    for (i = cantidadArray; i < 0; i= i-1) {
        console.log(numeros[i]);
        break
    }
}

reverso ([1,2,3,4,5,6,7,8,9,10]);