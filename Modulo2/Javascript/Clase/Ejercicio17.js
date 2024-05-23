let edad = 7;

if (edad > 65) {
    console.log('Eres una persona de tercera edad');
} else if (edad >= 18 && edad <= 65) {
    console.log('Eres un adulto');
} else if (edad >= 13 && edad >= 17) {
    console.log('Eres un joven');
} else if (edad > 0 && edad <= 12) {
    console.log('Eres un niño');
} else {
    console.log('Edad invalida');
}