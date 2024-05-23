let fila = 8;
let columna = 8;
let tablero = '';

for (f=1; f<=8; f++) {
    for (c=1; c<=8; c++) {
        if((f+c)%2 == 0){
            tablero += '#';
        } else {
            tablero += ' '
        }
    }
    tablero += '\n'
}

console.log(tablero)

