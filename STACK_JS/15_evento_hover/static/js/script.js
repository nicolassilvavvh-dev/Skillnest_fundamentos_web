const boton = document.getElementById("miBoton");

boton.addEventListener("mouseover", function () {
    console.log("El ratón está sobre el botón");
    boton.style.backgroundColor = "blue";
});

boton.addEventListener("mouseout", function () {
    console.log("El ratón ha salido del botón");
    boton.style.backgroundColor = "red";
});

const boton2 = document.getElementById("miBoton2");

boton2.addEventListener("mouseover", function () {
    this.innerText = "Pasa el cursor sobre mí";
    boton2.style.backgroundColor = "purple";
});

boton2.addEventListener("mouseout", function () {
    this.innerText = "Texto cambiado";
    boton2.style.backgroundColor = "green";
});

const boton3 = document.getElementById("miBoton3");

boton3.addEventListener("mouseover", function () {
    console.log("Pasa el cursor sobre mí");
    boton3.style.backgroundColor = "white";
    boton3.style.color = "black";
    boton3.textContent = "Haz cambiado el color"
});

boton3.addEventListener("mouseout", function () {
    console.log("El raton a salido del boton");
    boton3.style.backgroundColor = "orange";
    boton3.textContent = "Pasa el cursor sobre mí"
});
// tarea
/*
Crear dos botones con evento onmouseover y onmouseout
- Cambia el texto de un boton
- Cambiar el color de fondo y color de texto del segundo boton
*/
