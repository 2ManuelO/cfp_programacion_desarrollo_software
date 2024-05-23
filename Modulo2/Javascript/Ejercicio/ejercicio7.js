function range(inicio, fin, paso = 1) {

    let array = [];
    if(paso > 0){
       for (i = inicio; i <= fin; i+=paso) {
        array.push(i)
       } 
    } else if(paso < 0) {
        for (i = inicio; i >= fin; i+=paso) {
            array.push(i)
        } 
    }
    return array
}

function sum(arraynumero) {
    let suma = 0;
    for (num of arraynumero) {
        suma += num;
    }
    return suma
}

let arrayRango = range(5, 2, -1);
console.log(arrayRango);
console.log(sum(arrayRango));