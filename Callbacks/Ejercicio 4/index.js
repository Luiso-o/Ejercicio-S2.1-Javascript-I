lenguajes = ["Java","Python","JavaScript","Angular","TypeScript"]

function procesarElementos(lenguajes, callback){
    callback(lenguajes);
}

function callback(lenguajes){
    for (const lenguaje of lenguajes){
        console.log(`Lenguaje de programación ${lenguaje}`)
    }
}

procesarElementos(lenguajes, callback);