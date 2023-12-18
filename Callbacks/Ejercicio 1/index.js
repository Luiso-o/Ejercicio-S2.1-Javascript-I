function procesar(numero, callback) {
    callback(numero);
  }

  function miCallback(num) {
    console.log(`El número procesado es: ${num}`);
  }

  const numero = 42;
  procesar(numero, miCallback);
  