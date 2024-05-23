
// ejemplo funciones

// ejemplo1
const square = function(x,y,) {
    return x * y;
};

let resultado = square(3,5);
console.log(resultado)


// ejemplo2
const roundTo = function(n) {
    if ( typeof n != 'number') {  //Si el parameto es no es númerico entra y regresa un underfine, pero no se muestra en la consola
        return;
    }
    console.log('El tipo de dato es númerico'); //En el caso que sea númerico imprimira en la consola
}

roundTo(3);


// ejemplo3
let suma = function(x,y) {
    return x + y;
}
console.log(suma(12, 4));


suma = function(x, y, v){
    return x + y + v;
}
console.log(suma(12, 3, 5));


