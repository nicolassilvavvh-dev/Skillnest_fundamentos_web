// console.log("prueba de conexion");

// // Variable a lista

// let nombre1 = "Ana";
// let nombre2 = "Pedro";
// let nombre3 = "María";
// let nombre4 = "Carlos";

// //Transformar en array y mostrar

// let nombres = ["Ana", "Pedro", "Maria", "Carlos"]

// //Mostrar a Maria en una alerta
// console.log(nombres[2]); //Muestra Maria
// let compras = [5000, 2300, 12000, 4500, 3000];
// let alumnos = ["Ana", "Pedro", "María", "José"];
// let datos = ["Carlos", 18, true];
// let frutas = ["Manzana", "Pera", "Kiwi", "Sandía"];

// //desadio formar una oracion con elementos
// //de las distintas variables
// //Pedro tiene 18 años, y compro una sandia a $2300
// let mensaje = `${alumnos[1]} tiene ${datos[1]} años, y compro una ${frutas[3]} a $${compras[1]}.`;
// console.log(mensaje);

// //La propiedad .legth devuelve la cantidad de elementos

// let frutas1 = ["Manzana", "Pera", "Kiwi", "Sandía"];
// console.log(frutas1.length); //4, la cantidad de elementos de la variable

// //obtener el ultimo elemento
// let frutas2 = ["Manzana", "Pera", "Kiwi", "Sandía"];
// let ultima = frutas2[frutas2.length - 1];
// // variable.length -1 siempre trae el ultimo elemento

// console.log(ultima);

// //desafio
// //del arreglo ["Hola", "a", "todos", "los", "Programadores!"].
// //Mostar el penultimo elemento y el ultimo concatenado.
// let prog = ["Hola", "a", "todos", "los", "Programadores!"];
// let penultimo = prog[prog.length - 2];
// let ultimp = prog[prog.length - 1];
// console.log(`${penultimo} ${ultimp}`);

//fin

let listaTareas = ["Barrer", "Cocinar", "Realizar compras"]
function manipularArreglos() {
//Modificar un elemento del arreglo
listaTareas[1] = "Construir";
//Añadir un elemento al final de la lista
listaTareas.push("Cocinar"); //Agrega un elemento al final .push()
//Eliminar el ultimo elemento y mostrarlo
let eliminado = listaTareas.pop(); //Elimina ultimo .pop()
//Añadir un elemento al inicio de la lista
listaTareas.unshift("Boxear"); //Agrega al princiopio unshift()
//Eliminar el primer elemento de la lista
eliminado += " - " + listaTareas.shift(); //.shift elimina el primero
//Mostar resultados
alert(listaTareas.join(" - "));
alert("elementos eliminados: " + eliminado)
}


function buscarMayoresedad(){
    let edades = [12,15,18,20,25];

for(let i=0;i<edades.length;i++)
    if(edades[i] >= 18){
        console.log(edades[i]);
    }
}

function ejercicio1(){
    let edades2 = [15,18,20,14,25];
    alert(`${edades2.length}, elementos`);
    alert(`${edades2[0]}, años`);
    alert(`${edades2[4]}, años`);
}

function ejercicio2(){
    let nombres2 = ["Sans", "Papyrus", "Frisk", "Undyne", "Flowey"]
    for (let i = 0; i < nombres2.length; i++) {
        alert(nombres2[i]);
    }
}
