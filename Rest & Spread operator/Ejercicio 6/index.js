const objeto1 = { a: 1, b: 2 };
const objeto2 = { b: 3, c: 4 };

//si el operador Spread encuentra dos objetos con el la misma clave, guardará la ultima por defecto
const objetoFusionado12 = { ...objeto1, ...objeto2 };

console.log(objetoFusionado12);

const objeto3 = { a: 5, b: 6 };
const objeto4 = { c: 7, d: 8 };

const objetoFusionado34 = { ...objeto3, ...objeto4 };

console.log(objetoFusionado34);