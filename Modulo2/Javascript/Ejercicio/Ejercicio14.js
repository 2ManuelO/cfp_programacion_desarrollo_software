let num1 = 4;
let num2 = 5;
let num3 = 3;

if (num1 < num2 && num1 < num3) {
    console.log(num1);
} else if (num2 < num3 && num2 < num1) {
    console.log(num2);
} if (num3 < num2 && num3 < num1) {
    console.log(num3);
} else {
    console.log('su números son iguales');
}