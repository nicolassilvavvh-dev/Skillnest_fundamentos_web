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

const imagen1 = document.getElementById("imagen1");
const tituloPintura = document.getElementById("tituloPintura");

if (imagen1 && tituloPintura) {
    imagen1.addEventListener("mouseover", function () {
        imagen1.src = "static/images/noche-estrellada-sobre-el-ródano.png";
        tituloPintura.innerText = "Noche estrellada sobre el Ródano, Vincent van Gogh (1888)";
    });

    imagen1.addEventListener("mouseout", function () {
        imagen1.src = "static/images/campo-de-trigo-con-cipreses.png";
        tituloPintura.innerText = "Campo de trigo con cipreses, Vincent van Gogh (1889)";
    });
}