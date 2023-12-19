const numeros = [11, 12, 13, 14];

console.log("Todos los números de la lista numeros son mayores a 10?");
const todosMayoresQue10 = numeros.every(numero => numero > 10);
console.log(todosMayoresQue10);

console.log("Algunos de los números de la lista numeros son mayores a 10?");
const algunosMayoresQue10 = numeros.some(numero => numero > 10);
console.log(algunosMayoresQue10);

const numerosMenores = [9, 8, 7, 6];

console.log("Todos los números de la lista numerosMenores son mayores a 10?");
const todosMenoresQue10 = numerosMenores.every(numero => numero > 10);
console.log(todosMenoresQue10);

console.log("Algunos de los números de la lista numerosMenores son mayores a 10?");
const algunosMenoresQue10 = numerosMenores.some(numero => numero > 10);
console.log(algunosMenoresQue10);