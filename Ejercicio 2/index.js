const random = () =>{
    const numRandom = Math.floor(Math.random() * 100) + 1;
    return document.getElementById("resultado").innerText = "Tu numero random es: " + numRandom;
}