console.log("prueba de conexion");

document.getElementById("colorButton").addEventListener("click", function () {
    cambiarColorBody();
});


document.getElementById("colorButton2").addEventListener("click", function () {
    cambiarColorCaja1();
});


document.getElementById("colorButton3").addEventListener("click", function () {
    cambiarColorCaja2();
});


function cambiarColorBody() {
    let colores = ["#ff6347", "#66cdaa", "#9370db", "#ffd700", "#4682b4", "#ffa07a", "crimson"];
    let colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    let elemento = document.querySelector("body")
    elemento.style.backgroundColor = colorAleatorio;
}

function cambiarColorCaja1() {
    let colores = ["#ff6347", "#66cdaa", "#9370db", "#ffd700", "#4682b4", "#ffa07a", "crimson"];
    let colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    const elemento = document.querySelector(`#caja1`);
    elemento.style.backgroundColor =colorAleatorio
}

function cambiarColorCaja2() {
    let colores = ["#ff6347", "#66cdaa", "#9370db", "#ffd700", "#4682b4", "#ffa07a", "crimson"];
    let colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    const elemento = document.querySelector(`#caja2`);
    elemento.style.backgroundColor =colorAleatorio
}