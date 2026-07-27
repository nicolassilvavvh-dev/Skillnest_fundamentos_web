console.log("prueba de conexion");
function pan(){
    let hamburguesaEspecial = {
    pan:"Pan brioche",
    carne:"Pollo crujiente",
    queso:"Suizo",
    extras:[
        "Lechuga",
        "Pepinos",
        "Miel"
    ],
    mostrarIngredientes:function(){
        alert("Pan:" + this.pan)
        console.log("Pan:",this.pan);
        console.log("Carne:",this.carne);
        console.log("Queso:",this.queso);
        console.log(
            "Extras:",
            this.extras.join(", ")
        );
    }
};
}

//Acceder al pan
console.log(hamburguesaEspecial.pan);
hamburguesaEspecial.mostrarIngredientes();

//objetos con metodos automovil
function metodoAuto() {
    let auto = {
    marca:"Toyota",
    modelo:"Corolla",
    año:2023,
    encender:function(){
        alert(`Encendiendo:
            \nMarca: ${this.marca}
            \nModelo: ${this.modelo}
            \nAño: ${this.año}`);
    }
}
auto.encender();
}


//objeto con metodo casa
function metodoCasa() {
let casa = {
    direccion:"Av. Siempre Viva 742",
    habitaciones:4,
    baños:2,
    mostrarInformacion:function(){
        alert(`direccion: ${this.direccion}
            \nHabitaciones: ${this.habitaciones}
            \nBaños: ${this.baños}
        `);
    }
};
casa.mostrarInformacion();
}
