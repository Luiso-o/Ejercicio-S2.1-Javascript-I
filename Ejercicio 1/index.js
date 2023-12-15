const calcularSuma = () => {
  const numeroUno = parseFloat(document.getElementById("numeroUno").value);
  const numeroDos = parseFloat(document.getElementById("numeroDos").value);

  const suma = numeroUno + numeroDos;

  document.getElementById("resultado").innerText = "La suma es: " + suma;
}

