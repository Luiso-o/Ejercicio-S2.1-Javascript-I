function esperarYSaludar(nombre, callback){
    setTimeout(function() {
        callback(nombre);
    }, 2000);
}

function callback(nombre){
    console.log(`Hola ${nombre}, estás ejecuntado una funcion con un retraso de 2 segundos`)
}

esperarYSaludar("Luis", callback);