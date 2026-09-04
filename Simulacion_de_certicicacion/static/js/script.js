console.log("Conexion correcta")

const comida1 = document.getElementById("comida");


if (comida1) {
    comida1.addEventListener("mouseover", function () {
        comida1.src = "static/images/comida-mexicana2.jpg";
    });

    comida1.addEventListener("mouseout", function () {
        comida1.src = "static/images/comida-mexicana.jpg";
    });
}

let boton1 = document.querySelector("#tacos");
let contador1 = document.querySelector("#contador1");

boton1.onclick = function () {
    let cantidad = parseInt(contador1.innerText);
    cantidad++;
    contador1.innerText = cantidad + 0;
};

let boton2 = document.querySelector("#flautas");
let contador2 = document.querySelector("#contador1");

boton2.onclick = function () {
    let cantidad = parseInt(contador2.innerText);
    cantidad++;
    contador2.innerText = cantidad + 0;
};

const btnLogin = document.getElementById('btnLogin');
const inputEmail = document.getElementById('inputEmail');

btnLogin.addEventListener('click', function() {
    const texto = inputEmail.value.trim();
    if (texto !== '') {
        alert(`Bienvenido\n${texto}`);
    } else {
        alert('Por favor ingresa tu correo.');
    }
});