// Ejemplo1
let square = (x) => {
    return x * x;
}

square = (x) => {return x*x};
square = x => x*x;
square = (x,y) => {
    if (y==0) {
        y = 10;
    }
    return x*y;
}

console.log(square(5,4))


// ejemplo2
function saludar(quién) {
    console.log("Hola " + quién);
    }
    
saludar("Harry");
console.log("Adiós");

// ejemplo3
function roundTo(n, step = 1) {
    let remainder = n % step;
    return n - remainder + (remainder < step / 2 ? 0 : step);
    };
    console.log(roundTo(4.5));
    // → 5
    console.log(roundTo(4.5, 2));
    // → 4
    