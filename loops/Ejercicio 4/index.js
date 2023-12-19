let obj = { nombre: 'Ona', edad: 25, ciudad: 'Barcelona' };

for (let clave in obj) {
    if (obj.hasOwnProperty(clave)) {
      console.log(`Clave: ${clave}, Valor: ${obj[clave]}`);
    }
  }