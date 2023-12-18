lenguajes = ["Java","Python","JavaScript","Angular","TypeScript"]

function procesarElementos(lenguajes, callback){
    callback(lenguajes);
}

function callback(lenguajes){
    for (const lenguaje of lenguajes){
        let mayuscula = lenguaje.toUpperCase();
        console.log(`Lenguaje de programación ${mayuscula}`)
    }
}

procesarElementos(lenguajes, callback);