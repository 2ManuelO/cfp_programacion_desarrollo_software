function numero (num) {

    if (num < 0) {
        let positivo = numero(1 * -(num));
        return positivo;
    }

    if (num == 0) {
        return true
    } else if (num == 1) {
        return false
    } else {
        let n = numero(num - 2);
        return n
    }
}

console.log(numero(8));

