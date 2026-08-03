console.log("prueba de conexion");

document.getElementById("colorButton").addEventListener("click", function () {
    cambiarColor();
});

// Función que cambia el color de fondo al hacer clic
function cambiarColor() {
    let colores = ["#ff6347", "#66cdaa", "#9370db", "#ffd700", "#4682b4", "#ffa07a", "crimson"];
    let colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    document.body.style.backgroundColor = colorAleatorio;
}

document.getElementById("colorButton2").addEventListener("click", function () {
    cambiarColor2();
});

// Función que cambia el color de las letras al hacer clic
function cambiarColor2() {
    let colores = ["#ff6347", "#66cdaa", "#9370db", "#ffd700", "#4682b4", "#ffa07a", "crimson"];
    let colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    document.body.style.color = colorAleatorio;
}

let boton = document.getElementById("colorButton3");
boton.addEventListener("click", function () {
    this.innerText = "!Texto cambiado¡"
})