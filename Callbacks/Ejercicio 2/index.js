function calculadora (num1, num2, callback) {
    callback(num1, num2);
}

function callback(num1,num2){
 console.log(`ELa suma de ${num1} y ${num2} es: ${num1 +num2}`);
}

calculadora(3, 4, callback);