let numeros = [1, 2, 3, 4, 5, 6];

for (let numero of numeros) {
  console.log(numero);
  
  if (numero === 5) {
    console.log("Se encontró el número 5. El bucle se detiene.");
    break;
  }
}

console.log("*El número 6* :,(");