console.log("Conexión de js exítosa...");

// # Ejercicio 1: Calculadora de Envío

// ## Enunciado

// Una empresa de despacho cobra el envío dependiendo del peso del paquete.

// Solicitar:

// - Nombre del cliente
// - Peso del paquete (kg)

// Condiciones:

// - Hasta 2 kg
// - Más de 2 kg y hasta 5 kg
// - Más de 5 kg y hasta 10 kg
// - Más de 10 kg

// El programa debe indicar:

// - Nombre del cliente
// - Categoría del envío
// - Valor correspondiente al despacho
function ejercicio1(){
    let nombre = prompt("Ingresar nombre: ");
    let peso = parseInt(prompt("ingresar peso: "));
    let valorDespacho = 2000;
    let mensaje = "";
    // Condiciones
    if (peso > 0 && peso <= 2) {
        mensaje = `paquete pesa: ${peso}kg
        \nValor despacho: ${valorDespacho * peso}`;
    } else if (peso > 2 && peso <= 5) {
        mensaje = `paquete pesa: ${peso}kg
        \nValor despacho: ${valorDespacho * peso}`;
    } else if (peso > 5 && peso <= 10) {
        mensaje = `paquete pesa: ${peso}kg
        \nValor despacho: ${valorDespacho * peso}`;
    } else if (peso> 10 && peso <50) {
        mensaje = `paquete pesa: ${peso}kg
        \nValor despacho: ${valorDespacho * peso}`;
    } else {
        mensaje = "Ingrese valores validos";
    }

    alert(mensaje);
}
// ---

// # Ejercicio 2: Acceso a Biblioteca

// ## Enunciado

// Una biblioteca posee dos tipos de usuarios:

// - Estudiante
// - Profesor

// Solicitar:

// - Tipo de usuario
// - Cantidad de libros solicitados

// Condiciones:

// Cada tipo de usuario posee un límite distinto de préstamos.

// El programa debe indicar:

// - Si el préstamo está permitido.
// - Si supera el límite permitido.
// - Mostrar un mensaje diferente según el tipo de usuario.

// Utilizar operadores lógicos para realizar las validaciones.
function ejercicio2() {
    let usuario = prompt("Ingresar tipo de usuario (alumno / profesor):");
    let cantidadLibros = parseInt(prompt("Ingresar cantidad de libros solicitados:"));
    let limiteEstudiante = 3;
    let limiteProfesor = 5;
    
    let mensaje = "";

    if (usuario === "alumno" && cantidadLibros <= limiteEstudiante) {
        mensaje = `Préstamo permitido Como Estudiante puedes llevarte los ${cantidadLibros} libros`;
    } 
    else if (usuario === "alumno" && cantidadLibros > limiteEstudiante) {
        mensaje = `Préstamo denegado. Superas el límite permitido para Estudiantes (${limiteEstudiante} libros)`;
    } 
    else if (usuario === "profesor" && cantidadLibros <= limiteProfesor) {
        mensaje = `Préstamo autorizado profesor disfrute de sus ${cantidadLibros} libros de investigación`;
    } 
    else if (usuario === "profesor" && cantidadLibros > limiteProfesor) {
        mensaje = `Préstamo denegado Como profesor no puede exceder el límite de ${limiteProfesor} libros`;
    } 
    else {
        mensaje = "Tipo de usuario no reconocido. Por favor, ingrese 'estudiante' o 'profesor'";
    }

    alert(mensaje);
}
// ---

// # Ejercicio 3: Clasificación Deportiva

// ## Enunciado

// Solicitar:

// - Nombre del participante
// - Edad

// Clasificar al participante según su edad.

// Debe existir al menos cuatro categorías distintas.

// Finalmente mostrar:

// - Nombre
// - Edad
// - Categoría asignada
function ejercicio3() {
    let usuario = prompt("Ingresar nombre usuario:");
    let edad = parseInt(prompt("Ingresar edad usuario:"));
    let mensaje = "";
    if (edad >= 18 && edad <= 44) {
        mensaje = `El ${usuario} es un adulto joven`
    } else if(edad >= 45 && edad <= 59) {
        mensaje = `El ${usuario} es un adulto medio`
    } else if(edad >= 60 && edad <= 74) {
        mensaje = `El ${usuario} es un adulto mayor`
    } else if(edad >= 75 && edad <= 90) {
        mensaje = `El ${usuario} es un anciano`
    } else {
        mensaje = `ingresar valores validos`
    }
        alert(mensaje);
}

// ---

// # Ejercicio 4: Sistema de Bonificación

// ## Enunciado

// Una empresa entrega bonos según los años trabajados.

// Solicitar:

// - Nombre del trabajador
// - Años de servicio

// Clasificar según distintos rangos de antigüedad.

// Mostrar:

// - Nombre
// - Nivel de antigüedad
// - Mensaje indicando si recibe o no bonificación.
function ejercicio4() {
    let trabajador = prompt("Ingresar nombre del trabajador:");
    let año = parseInt(prompt("Ingresar años de servicio:"));
    let mensaje = "";
    if (año <= 5) {
        mensaje = `Nombre: ${trabajador}
Nivel de antiguedad: Novato
Mensaje: No recibe bonificacion por tener 5 años o menos de servicio`;
    } 
    else if (año <= 10) {
        mensaje = `Nombre: ${trabajador}
Nivel de antiguedad: Intermedio
Mensaje: Felicidades Recibe bonificación estandar`;
    } 
    else if (año <= 20){
        mensaje = `Nombre: ${trabajador}
Nivel de antiguedad: Veterano
Mensaje: Felicidades Recibe bonificación maxima por su gran lealtad a la empresa`;
    } else {
        mensaje = `ingresar valores validos`
    }
    
    alert(mensaje);
}
// ---

// # Ejercicio 5: Evaluación de Velocidad

// ## Enunciado

// Solicitar:

// - Nombre del conductor
// - Velocidad registrada

// Condiciones:

// Clasificar la velocidad en distintos rangos.

// Además:

// Si supera un determinado límite, mostrar un mensaje indicando que ha excedido la velocidad permitida.

// Mostrar:

// - Nombre del conductor
// - Velocidad
// - Clasificación obtenida
function ejercicio5() {
    let nombreConductor = (prompt("Ingrese nombre del conductor:"));
    let velocidad = parseInt(prompt("Ingrese velocidad:"));
    let limiteVelocidad = 90;
    let mensaje = "";
        if(limiteVelocidad <= velocidad && velocidad >= 85) {
            mensaje= `Velocidad limite`
        } else if(limiteVelocidad > velocidad && velocidad >= 65){
            mensaje = `Velocidad alta, baje un poco la velocidad`
        } else if(velocidad <= 60 && velocidad > 30){
            mensaje = `Velocidad adeacuada`
        } else{
            mensaje = `velocidad lenta`
        }
        alert(mensaje);
}
// ---

// # Requisitos Técnicos

// Cada ejercicio debe cumplir con:

// - Una función independiente.
// - Uso de prompt().
// - Uso de alert().
// - Uso de variables.
// - Uso de if.
// - Uso de else if.
// - Uso de else.
// - Uso de operadores de comparación.
// - Uso de operadores lógicos cuando corresponda.

// ---

// # Desafío Extra

// Agregar una o más de las siguientes mejoras:

// - Validación de campos vacíos.
// - Validación de datos numéricos.
// - Mostrar mensajes utilizando emojis.
// - Mostrar resultados dentro del HTML utilizando `innerHTML`.
// - Cambiar colores o estilos mediante JavaScript según el resultado obtenido.
