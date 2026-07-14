console.log("prueba de conexion");

// Ejemplo bucle for
function contarHasta5() {
    for (let i = 1; i <= 5; i++) {
        alert(i);
    }
}

function cuentaRegresiva() {
    for (let i = 10; i > 0; i--) {
        alert(i);
    }
}

function recorreLista() {
    let usuarios = ["Ana", "Luis", "María", "Sans", "Papyrus"];
    //Lista es un tipo de dato (array/lista)
    // [] = ["nombre", 4, true, [2,4]]
    /*
    let nombre 0 "carlos*;
    alert(nombre);
                        0           1
    let nombre = ["carlos", "maria"]
    alert(nombres[0]) --> Imprime carlos 
    alert(nombres[1]) --> Imprime maria
    alert(nombre.length) --> 2 (la cantidad de elementos de la lista)
    alert(nombre[0].length) --> 6 (la cantidad de caracteres del elementos selecionado)
    */
    for (let i = 0; i < usuarios.length; i++) {
        alert("Bienvenido, " + usuarios[i]);
    }
}
//ejemplo bucle while
function reproducirCancion() {
    let reproduciendo = true;

    while (reproduciendo) {
        alert("La canción sigue sonando...");
        // Simulación de una acción que detendría la reproducción
        reproduciendo = false;
    }
}

function cargarDatos() {
    let datosPendientes = 5;

    while (datosPendientes > 0) {
        alert(`Cargando datos...${datosPendientes} de 5`);
        datosPendientes--;
    }
}
function validarContrasena() {
    let contrasenaCorrecta = false;
// !variables = variable es distinta a verdadera
    while (!contrasenaCorrecta) {
        let intento = prompt("Ingresa tu contraseña:");
        if (intento === "1234") {
            contrasenaCorrecta = true;
            alert("Acceso concedido.");
            break
            alert("No se ejecuta")
        } else {
            alert("Contraseña incorrecta, intenta de nuevo.");
        }
    }
}
