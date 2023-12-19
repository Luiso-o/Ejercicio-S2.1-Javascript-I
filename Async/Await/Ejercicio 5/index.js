const miPromesa = new Promise((resolver, rechazar) => {
    setTimeout(() => {
      // Lógica asíncrona que eventualmente se resuelve
      let exito = true;
  
      if (exito) {
        resolver('¡Hola, mundo!');
      } else {
        rechazar('¡Hubo un error!');
      }
    }, 2000);
  });

async function funcionAsincrona() {
    try {
      const resultado = await miPromesa;
      console.log(resultado);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  funcionAsincrona();

  //forzando un error

const miPromesaConError = new Promise((resolver, rechazar) => {
    setTimeout(() => {
      rechazar('¡Hubo un error!');
    }, 2000);
  });
  
  async function funcionAsincronaConError() {
    try {
      const resultado = await miPromesaConError;
      console.log(resultado);
    } catch (error) {
      console.error('Error:', error);
    }
  }
 
  funcionAsincronaConError();
  
  