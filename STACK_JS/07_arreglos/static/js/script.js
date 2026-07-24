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
function recorrerArreglo(){
    let notas = [6.2,5.8,4.1,7.0,5.0,3.0];

for(let i=0;i<notas.length;i++){

    alert(`Mostrando nota ${i + 1} de ${notas.length}: ${notas[i]}`);

}
}


//Sumar elementos dentro de un bucle
function sumarElementos(){
    let ventas = [10000,5000,12000,8000]
    let total = 0;
    for(let i=0;i<ventas.length;i++){
    total += ventas[i];
}
alert(`El resultaado final es: ${total}`);
}

//Calcular un promedio

function calcularPromedio(){
    let notas = [5.8,6.2,4.9,6.5];
let suma = 0;
for(let i=0;i<notas.length;i++){
    suma += notas[i];
}
alert(`La suma acumulada es: ${suma}`);
let promedio = suma / notas.length;
alert(`El promedio de las notas: ${notas.join(" - ")}\nPromedio: ${notas}`);
}

//Condiciones dentro de bucle
function  buscarMayorEdad(){
    let edades = [12,15,18,20,25,35,50,5];
    let mayores = [18,20,25];
for(let i=0;i<edades.length;i++){
    //Condicion para buscar mayores de 18
    if(edades[i] >= 18){
        mayores.push(edades[i]); //Añade la posicion que cumple la condicion
    }
}
alert(`De la lista de edades: ${edades.join(` / `)}
\nLos mayores son: ${mayores.join(` / `)}`);
}

// Encontrar el menor y el mayor
function encontrarMayorMenor(){
    let numeros = [10, 35, 7, 90, 22, 90, 2];
    let menor = numeros[0];
    let mayor = numeros[0];

    for(let i= 1; i < numeros.length;i++){
    if(numeros[i] < menor){
        menor = numeros[i];
    } else if(numeros[i] > mayor){
        mayor = numeros[i]
    }else{
        console.log(`Valor que no afecta: ${numeros[i]}`);
    }
}
alert(`De los numeros ${numeros.join(` / `)}
\nEl menor es: ${menor}
\nEl mayor es: ${mayor}`)

console.log(menor);
}

//Ejemplo completo
//Tarea: Unir los console,log en una alerta

//Eliminar el ultimo valor y mostrarlo
//añadir dos valores nuevos con .push (prompt)
//Contar cantidad de ventas mayores que $10.000
function calcularVentas() {
    let ventas = [5000,8000,12000,3000,10000,9000,4000];
    let total = 0;
    let contadorVentas = 0;
    let mayores = [];
    let eliminado = ventas.pop();
    let mayor = ventas[0];
    let valor1 = parseInt(prompt("Ingrese primer valor: "));
    let valor2 = parseInt(prompt("Ingrese segundo valor: "));
    ventas.push(valor1, valor2)
    for(let i=0;i<ventas.length;i++){
    total += ventas[i];
    if(ventas[i] > mayor){
        mayor = ventas[i];
        if(ventas[i] >= 10000){
            mayores.push(ventas[i])
            contadorVentas++;
        }
    }
}
    alert(`Total ventas: ${total}
    \nMayor: ${mayor}
    \nPromedio:${total / ventas.length}
    \nValores sobre $10.000: ${mayores.join(` / `)}
    \nconteo de mayores: ${contadorVentas} ventas
    \nvalor eliminado: ${eliminado}`);
    
}



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
