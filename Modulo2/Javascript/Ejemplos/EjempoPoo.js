class Lavadora {
    constructor(tamanio, capacidad, modelo, marca, tipo){
        this.tamanio = tamanio,
        this.capacidad = capacidad,
        this.modelo = modelo,
        this.marca = marca,
        this.tipo = tipo
    }
    lavar(cantidad){
        let total = cantidad * 1;
        if (total <= lavadora.capacidad ? 'No soporta la maquian' : 'Lo soporta la maquina');
    }
    exprimir(){console.log('Esta exprimiendo')}
    enjuagar(){console.log('Esta enjuagando')}
}

let lavadora = new Lavadora('5pies', 45, 'lm200', 'Samsung', 'Electrico');
// console.log(lavadora);
lavadora.lavar(15);
// lavadora.exprimir();
// lavadora.enjuagar();



