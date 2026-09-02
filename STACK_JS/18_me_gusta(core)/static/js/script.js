console.log("Conexión de js exítosa...");
// Seleccionamos el botón por su id
let boton1 = document.querySelector("#btn-1");
let contador1 = document.querySelector("#contador-1");

boton1.onclick = function () {
    let cantidad = parseInt(contador1.innerText);
    cantidad++;
    contador1.innerText = cantidad + " like(s)";
};

// Seleccionar elementos de la segunda publicación
let boton2 = document.querySelector("#btn-2");
let contador2 = document.querySelector("#contador-2");

boton2.onclick = function () {
    let cantidad = parseInt(contador2.innerText);
    cantidad++;
    contador2.innerText = cantidad + " like(s)";
};

// Seleccionar elementos de la tercera publicación
let boton3 = document.querySelector("#btn-3");
let contador3 = document.querySelector("#contador-3");

boton3.onclick = function () {
    let cantidad = parseInt(contador3.innerText);
    cantidad++;
    contador3.innerText = cantidad + " like(s)";
};