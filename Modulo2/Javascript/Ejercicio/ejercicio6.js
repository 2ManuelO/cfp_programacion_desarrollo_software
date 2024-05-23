function contarCaracteres(palabra2) {
    let contador = 0;
    for (let i = 0; i < palabra2.length - 1; i++) {
        if (palabra2[i] === 'B') {
            contador++;
        }
    }
    return contador
}

function contarBs(cadena) {
    return contarCaracteres(cadena, "c")
}

let cadena = 'Barco Biscopal';
let numero = contarBs(cadena)
// let numero2 = contarCaracteres(cadena)
console.log(`Las letras B en tu cadena de texto son: ${numero}`);