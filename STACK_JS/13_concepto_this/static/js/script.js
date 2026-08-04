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