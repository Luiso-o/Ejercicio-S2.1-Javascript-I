function suma(...numeros) {
    let resultado = 0;
    for (const numero of numeros) {
      resultado += numero;
    }
    return resultado;
  }

const resultado1 = suma(1, 2, 3, 4, 5);
console.log(resultado1);

const resultado2 = suma(1, 2, 3, 4, 5, 6, 7);
console.log(resultado2);

const resultado3 = suma(1, 2, 3, 4, 5, 6, 7, 8, 9);
console.log(resultado3);
