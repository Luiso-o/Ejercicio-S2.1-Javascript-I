const numeros = [1, 2, 3, 4, 5];
const numerosNegativos = [-1,-2,-3,-4,-5];
const numerosDecimales = [1.1,2.2,3.3,4.4,5.5];
const numerosConArray = [5,4,"3","2",1]

const esPar = (numeros) => {

    for (const numero of numeros) {

        if(typeof numero === 'number'){
            const esPar = numero % 2 === 0 ? true : false;
            console.log(`${numero} es ${esPar ? 'par' : 'impar'}`);
        }else{
            console.log(`${numero} no es un dato válido`)
        }

      }
      
}

esPar(numeros);
console.log("\n");
esPar(numerosNegativos);
console.log("\n");
esPar(numerosDecimales);
console.log("\n");
esPar(numerosConArray);