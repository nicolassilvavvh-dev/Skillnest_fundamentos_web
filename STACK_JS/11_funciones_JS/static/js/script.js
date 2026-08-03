console.log("prueba de conexion");

   // ejemplo funcion simple (sin parametros)
/*function saludar() {
   alert("¡Hola, bienvenido!")
}*/

//saludar(); //ejecucion de una funcion
// funciones con parametros
//El parametro recibe un valor para trabajar en la funcion
//El parametro recibe el tipo de dato al momento de tomar valor
function saludarParam(nombre) { //Parametro nombre
   alert("¡Hola, " + nombre + "!");
} 

//saludarParam("Nicolas");//Ejecucion de la funcion con parametros ("argumento")
//saludarParam("Mati");
function encontrarMayor(){
    function encontrarMaximo(a, b) {
   if (a > b) {
       return a; //Este valor se devuelve porque cumple la condicion
   } else {
       return b;
   }
}

let numero1 = 10;
let numero2 = 7;
let maximo = encontrarMaximo(numero1, numero2);
//maximo guardara el valor de retorno!!
alert(`El número mayor entre ${numero1} y ${numero2} es: ${maximo}
    \nEl numero mayor es: ${numero1}`);
}

//tarea
/*
Crear una funcion que recibe 3 parametros, a ,b y c,
debe sumar a + b y el resultado restarlo por c.
Devolver el valor final y mostralo con un alert
 */
function sumarRestar(a, b, c){
let numero1 = parseInt(prompt(`Ingrese el primer valor`));
let numero2 = parseInt(prompt(`Ingrese el segundo valor`));
let numero3 = parseInt(prompt(`Ingrese el tercer valor`));
let resultadoSuma = numero1 + numero2;
let resta = resultadoSuma - numero3;
alert(`El primer numero es: ${numero1}
    \nEl segundo numero es: ${numero2}
    \nEl tercer numero es: ${numero3}
    \nel resultado de la suma es: ${resultadoSuma}
    \nAhora se resta por el tercer numero: ${resta}
    \nEl resultado final: ${resta} `)
}

