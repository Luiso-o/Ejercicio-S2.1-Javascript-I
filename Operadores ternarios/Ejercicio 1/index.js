const puedeConducir = (edad) => {

    let mensaje = "";

    if (typeof edad === 'number') {

        if (!isNaN(edad) && edad === parseInt(edad, 10)) {
            if (edad >= 18 && edad <= 89) {
                mensaje = `Tienes ${edad}, puedes conducir :D`;
            } else if (edad < 18 && edad >= 1) {
                mensaje = `Tienes ${edad}, no puedes conducir :V`;
            } else if (edad >= 89 && edad < 90) {
                mensaje = `Tienes ${edad}, no puedes conducir :P`;
            } else if (edad >= 90 && edad < 100) {
                mensaje = `Tienes ${edad}, superas una edad ideal para conducir x_x`;
            } else {
                mensaje = `Has ingresado ${edad}, ingresa un dato válido >:V`;
            }
        } else {
            mensaje = `Has ingresado ${edad}, ingresa un dato válido >:V (sin decimales)`;
        }
    } else {
        mensaje = `Has ingresado una cadena de texto, ingresa un dato válido >:V`;
    }

    console.log(mensaje);
};

//Datos válidos
edad1 = 20;
edad2 = 16;
edad3 = 90;

//Datos inválidos
edad4 = -1;
edad5 = 757;
edad6 = 3.2;
edad7 = "59";

puedeConducir(edad1);
puedeConducir(edad2);
puedeConducir(edad3);
puedeConducir(edad4);
puedeConducir(edad5);
puedeConducir(edad6);
puedeConducir(edad7);

