const miPromesa = new Promise((resolver) => {
    setTimeout(() => {
      resolver('¡Hola, mundo!');
    }, 2000);
  });

async function funcionAsincrona() {
    try {
      const resultado = await miPromesa;
      console.log(resultado);
    } catch (error) {
      console.error(error);
    }
  }
  
  funcionAsincrona();
  