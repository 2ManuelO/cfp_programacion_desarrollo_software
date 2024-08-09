let precio = 150;

if (precio >= 100) {
    let descuento = (precio * 10) / 100
    let descuentoAplicado = precio -descuento
    console.log(`el descuento es del producto es de: ${descuento}`);
    console.log(`El precio del producto con descuento es de: ${descuentoAplicado}`);
} else if (precio>0 && precio<100) {
    console.log(`Su precio es de: ${precio}`);
} else {
    console.log('Precio no valido');
}