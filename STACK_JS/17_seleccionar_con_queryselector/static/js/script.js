console.log("Conexion exitosa...")

//Seleccion de titulo con querySelecor
let title = document.querySelector("#title");
console.log(title); // <h1 id="title">¡Hola, mundo!</h1>
console.log(`Èl contenido del titulo es:${title.textContent}`)

//seleccionar un parrafo con la etiqueta
let parrafo = document.querySelector("p");
console.log(parrafo);

//Cambiar el texto que tenia a uno nuevo
let titulo = document.querySelector("#titulo");
titulo.innerText = "¡Bienvenido a mi sitio!";

//cambiar los colores del boton y el texto sin el CSS
let boton = document.querySelector("#boton");

boton.addEventListener("click", function () {
   boton.style.backgroundColor = "blue"; // Cambia el color del botón
   boton.style.color = "white"; // Cambia el color del texto
});


document.addEventListener("DOMContentLoaded", function () {
    let modoBtn = document.getElementById("modoBtn");

    modoBtn.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

       // Cambiar el texto del botón
            if (document.body.classList.contains("dark-mode")) {
            modoBtn.innerText = "Modo Claro";
        } else {
            modoBtn.innerText = "Modo Oscuro";
        }
    });
});