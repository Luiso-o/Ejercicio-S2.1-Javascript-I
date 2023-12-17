const randomNumber = () =>{
    const numRandom = Math.floor(Math.random() * 100) + 1;
    document.getElementById("resultado").innerText = "Tu numero random es: " + numRandom;

    //salida por consola
    console.log("Tu numero random es: " + numRandom);

    return numRandom;
}