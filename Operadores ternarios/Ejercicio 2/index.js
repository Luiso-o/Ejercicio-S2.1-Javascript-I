const verificarNumeroConMasValor = (num1, num2) => {
    let mensaje = ``;

    if (typeof num1 === 'number' && typeof num2 === 'number') {
        if (num1 > num2) {
            mensaje = `El primer número es mayor que el segundo`;
        } else if (num1 < num2) {
            mensaje = `El segundo número es mayor que el primero`;
        } else {
            mensaje = `Ambos números tienen el mismo valor`;
        }
    } else {
        if(typeof num1 === 'string' && typeof num2 === 'string'){
            mensaje = `Ambos números han sido ingresado como cadena de texto`;
        }else{
            if (!(typeof num1 === 'number')) {
                mensaje = `${num1} ha sido ingresado como cadena de texto`;
            } else{
                mensaje = `${num2} ha sido ingresado como cadena de texto`;
            }
        }
    }

    console.log(mensaje);
};

verificarNumeroConMasValor(10, 9);
verificarNumeroConMasValor(9, 10);
verificarNumeroConMasValor(5, 5);
verificarNumeroConMasValor(-5, -9);
verificarNumeroConMasValor(1.5, 1.9);
verificarNumeroConMasValor(1.5, -1.9);
verificarNumeroConMasValor("1.5", 8);
verificarNumeroConMasValor(100, '67');
verificarNumeroConMasValor("87", '67');
