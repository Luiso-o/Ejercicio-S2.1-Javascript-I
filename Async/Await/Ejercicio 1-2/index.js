const miPromesa = new Promise((resolver) => {
    setTimeout(() => {
      resolver('¡Hola, mundo!');
    }, 2000);
  });
  
  miPromesa
    .then(resultado => console.log(resultado))
    .catch(error => console.error(error));
  