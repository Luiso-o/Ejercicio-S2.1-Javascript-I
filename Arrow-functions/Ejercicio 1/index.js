const calcularSuma = (numeroUno,numeroDos) => {
  const num1 = parseFloat(numeroUno);
  const num2 = parseFloat(numeroDos);

  const suma = num1 + num2;

  document.getElementById("resultado").innerText = "La suma es: " + suma;

  //imprimir resultado por consola
  console.log("La suma es: " + suma)

  return suma;
}

