const objeto1 = { a: 1, b: 2, c: 3 };

const objeto2 = { ...objeto1 };

console.log("Objeto Original:", objeto1);
console.log("Objeto Copia:", objeto1);

console.log("\nModificando el objeto2");

objeto2.a = 10;

console.log("Objeto Original:", objeto1);
console.log("Objeto Copia:", objeto2);