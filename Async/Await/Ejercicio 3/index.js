const miPromesaConReject = (input) => new Promise((resolver, rechazar) => {
    setTimeout(() => {
      if (input === 'Hola') {
        resolver('¡La entrada es igual a "Hola"!');
      } else {
        rechazar('¡La entrada no es "Hola"!');
      }
    }, 2000);
  });
  
  // Ejemplo de uso
  miPromesaConReject('Hola')
    .then(resultado => console.log(resultado))
    .catch(error => console.error(error));
  
  miPromesaConReject('Adiós')
    .then(resultado => console.log(resultado))
    .catch(error => console.error(error));
  