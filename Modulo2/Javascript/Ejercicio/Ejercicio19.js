let num = 15;
if (num % 5 == 0 && num % 3 == 0) {
    console.log(`El número ${num} es divisible entre 5 y 3`);
} else if(num%3 == 0) {
    console.log(`El número ${num} es divisible entre 3`);
} else if(num%5 == 0) {
    console.log(`El numero ${num} es divisible enter 5`);
} else {
    console.log(`El número ${num} no es divisible entre 3 o 5`);
}