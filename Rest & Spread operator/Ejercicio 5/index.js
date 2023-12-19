function recogeElementos(num1, num2, num3) {
    console.log(num1, num2, num3);
  }

  const arrayDeNumeros = [1,2,3]
  const numeros = [4,5,6];

  //imprimir array
 console.log(arrayDeNumeros);

 // Llamar a la función y pasar los elementos del array como argumentos
  recogeElementos(...numeros);
