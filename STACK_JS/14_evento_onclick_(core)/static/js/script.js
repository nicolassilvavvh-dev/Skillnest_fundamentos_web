console.log("Conexión de js exítosa...");
// Seleccionamos el botón por su id
let boton = document.getElementById("IniciarSesion");

// Agregamos un evento 'click' al botón
boton.addEventListener("click", function () {
    if (this.innerText === "Cerrar sesion") {
        this.innerText = "Iniciar sesion";
    } else {
        this.innerText = "Cerrar sesion";
    }
});

let boton2 = document.getElementById("verPerfil");

boton2.addEventListener("click", function () {
    alert("Cargando el perfil de usuario...");
});

let botonesLikes = document.querySelectorAll(".btn-gusta");

botonesLikes.forEach(function (boton) {
    boton.addEventListener("click", function () {
        let contador = parseInt(this.innerText);
        contador++;
        this.innerText = contador + " Me gustas";
    });
});