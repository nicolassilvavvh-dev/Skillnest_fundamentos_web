// Seleccionamos el botón por su id
let boton = document.getElementById("cambiarTexto");

// Agregamos un evento 'click' al botón
boton.addEventListener("click", function () {
    if (this.innerText === "¡Texto cambiado!") {
        this.innerText = "Haz clic en mí";
    } else {
        this.innerText = "¡Texto cambiado!";
    }
});

// Seleccionamos todas las imágenes con la clase 'imagenEliminar'
let imagenes = document.querySelectorAll(".imagenEliminar");

// Agregamos un evento 'click' a cada imagen
imagenes.forEach(function (imagen) {
    imagen.addEventListener("click", function () {
       // Eliminamos la imagen al hacer clic
        this.remove();
    });
});