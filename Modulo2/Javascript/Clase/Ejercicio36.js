let num = 2;
let resultado = 0; 

for (potencia = 0; potencia <= 10; potencia++) {
    if (potencia == 0) {
        resultado = 1;
    } else {
        resultado = resultado * num;
    }
}

console.log(resultado);