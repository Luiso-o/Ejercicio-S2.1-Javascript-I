// Método para verificar si los números son positivos, negativos o 0
const encontrarValorDeNumero = (numero) => {
    const resultado = (numero > 0) ? 'es positivo' : (numero < 0) ? 'es negativo' : (numero === 0) ? 'es cero' : 'no es un número';
    return resultado;
};

// Método que verifica el número mayor
const encontrarNumeroMayor = (num1, num2, num3) => {
    let message = "";
 
    if (typeof num1 === 'number' && typeof num2 === 'number' && typeof num3 === 'number') {

        let primerNumero = encontrarValorDeNumero(num1);
        let segundoNumero = encontrarValorDeNumero(num2);
        let tercerNumero = encontrarValorDeNumero(num3);

        console.log(`El valor del primer número ${primerNumero}`);
        console.log(`El valor del segundo número  ${segundoNumero}`);
        console.log(`El valor del tercer número  ${tercerNumero}`);

        const numMayor = (num1 > num2) ? ((num1 > num3) ? num1 : num3) : ((num2 > num3) ? num2 : num3);
        message = `El número mayor es ${numMayor}`;

    } else {
        message = "Uno de los valores es una cadena de texto";
    }

    console.log(message);
    console.log("\n");
};

// Ejemplo de uso
encontrarNumeroMayor(5, -8, 3);
encontrarNumeroMayor(-80, 83, 0);
encontrarNumeroMayor(75, 0, -93);
encontrarNumeroMayor(75, 0, "-93");
encontrarNumeroMayor(75, "0", -93);
encontrarNumeroMayor("64", 78, -39);
