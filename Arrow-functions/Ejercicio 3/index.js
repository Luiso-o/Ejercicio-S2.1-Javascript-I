class Persona {

    constructor(nombre = "programador"){
        this.nombre = nombre;
    }

    saludar = () => {
        console.log(`Hola ${this.nombre}, Bienvenid@ al Mundo de la Programación en JavaScript :)`);
    }
}

//montrar en consola
const personaSinNombre = new Persona();
personaSinNombre.saludar();

const personaConNombre = new Persona("Pepe");
personaConNombre.saludar();

//montrar por interfaz de usuario
function saludarDesdeHtml(nombre) {
    const nombreInput = document.getElementById(nombre).value;

    const nombreVerificado = nombreInput.trim() !== "" ? nombreInput : "programador"

    const personaIngresadaPorUsuario = new Persona(nombreVerificado);
    
    const resultadoSaludo = document.getElementById("resultadoSaludo");
    resultadoSaludo.innerText = "Hola " + nombreVerificado + ", Bienvenid@ al Mundo de la Programación en JavaScript :)"

    personaIngresadaPorUsuario.saludar();
}