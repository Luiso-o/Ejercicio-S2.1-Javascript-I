const crearPromesaConRetraso = (mensaje, tiempo) => new Promise((resolver) => {
    setTimeout(() => {
      resolver(mensaje);
    }, tiempo);
  });
  
  const promesa1 = crearPromesaConRetraso('Promesa 1 resuelta', 2000);
  const promesa2 = crearPromesaConRetraso('Promesa 2 resuelta', 3000);
  
  Promise.all([promesa1, promesa2])
    .then(resultados => {
      console.log('Resultados:', resultados);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  