console.log("prueba de conexion");

// 📋 Instrucciones 
// 👨‍🍳 Crea una función llamada pizzaOven que devuelva un objeto con las propiedades:
// corteza: tipo de corteza de la pizza.
// salsa: tipo de salsa utilizada.
// quesos: un arreglo con los tipos de queso que tiene la pizza.
// ingredientes: un arreglo con los ingredientes adicionales.
// 🍕 Usa la función para crear las siguientes pizzas:
// Una pizza “estilo Chicago” con corteza tradicional, salsa tradicional, mozzarella y los 
// ingredientes pepperoni y salchicha.
// Una pizza “lanzada a mano” con salsa marinara, mozzarella y feta, y los ingredientes champiñones, aceitunas y cebollas.
// Crea dos pizzas más con tus ingredientes favoritos.
function pizzaOver(corteza, salsa, quesos, ingredientes) {
    let pizza = {};
    pizza.corteza = corteza;
    pizza.salsa = salsa;
    pizza.quesos = quesos;
    pizza.ingredientes = ingredientes;
    return pizza;
}

// Creamos una función exclusiva para el botón de las pizzas
function ejecutarPizzas() {
    let p1 = pizzaOver("corteza tradicional", "salsa tradicional", "mozzarella", ["pepperoni", "salchicha"]);
    let p2 = pizzaOver("corteza tradicional", "salsa marina", ["mozzarella", "feta"], ["champiñones","aceitunas", "cebollas"]);
    let p3 = pizzaOver("corteza tradicional", "salsa tradicional", "mozzarella", ["champiñones", "cebolla", "aceitunas", "berenjenas"]);
    let p4 = pizzaOver("corteza tradicional", "salsa tradicional", "mozzarella", ["jamon","piña"]);

    alert(`de la primera pizza\ncorteza: ${p1.corteza}\nsalsa: ${p1.salsa}\nquesos: ${p1.quesos}\ningredientes: ${p1.ingredientes.join(" / ")}`);
    alert(`de la segunda pizza\ncorteza: ${p2.corteza}\nsalsa: ${p2.salsa}\nquesos: ${p2.quesos.join(" / ")}\ningredientes: ${p2.ingredientes.join(" / ")}`);
    alert(`de la tercera pizza\ncorteza: ${p3.corteza}\nsalsa: ${p3.salsa}\nquesos: ${p3.quesos}\ningredientes: ${p3.ingredientes.join(" / ")}`);
    alert(`de la cuarta pizza\ncorteza: ${p4.corteza}\nsalsa: ${p4.salsa}\nquesos: ${p4.quesos}\ningredientes: ${p4.ingredientes.join(" / ")}`);
    
    // 💻 Muestra en consola como pide el ejercicio
    console.log({p1, p2, p3, p4});
}

// 💻 Muestra en consola los objetos de cada pizza creada.
// Ejemplo de objeto
// Antes de comenzar con las pizzas, revisemos un ejemplo con sándwiches para entender la lógica:
// En este caso, has creado un objeto sandwich con diferentes propiedades. Pero, ¿qué pasa si quieres hacer 
// varios sándwiches sin escribir todo manualmente cada vez? Puedes crear una fábrica de sándwiches usando una 
// función que devuelva un objeto:
function sandwichFactory(pan, proteina, queso, salsas) {
    let sandwich = {};
    sandwich.pan = pan;
    sandwich.proteina = proteina;
    sandwich.queso = queso;
    sandwich.salsas = salsas;
    return sandwich;
}

// Creamos una función exclusiva para el botón de los sándwiches
function ejecutarSandwiches() {
    let s1 = sandwichFactory("trigo", "pavo", "provolone", ["mostaza", "cebolla frita", "rúcula"]);
    let s2 = sandwichFactory("masa madre", "pollo", "chedar", ["ketchup","mayonesa"]);

    alert(`Ingredientes del primer sándwich:
        \npan: ${s1.pan}
        \nproteína: ${s1.proteina}
        \nqueso: ${s1.queso}
        \nsalsas: ${s1.salsas.join(" / ")}`);
    alert(`Ingredientes del segundo sándwich:
        \npan: ${s2.pan}\nproteína: ${s2.proteina}
        \nqueso: ${s2.queso}
        \nsalsas: ${s2.salsas.join(" / ")}`);
    
    console.log({s1, s2});
}

// Explicación
// 🥪 La función sandwichFactory permite crear objetos con diferentes combinaciones de ingredientes.
// 🍞 En cada llamada a la función, puedes personalizar el sándwich con diferentes ingredientes sin escribir código
// repetitivo.
// Ahora, es tu turno de hacer lo mismo con las pizzas.
// 💡 Tips
// 🧠 Piensa en cada pizza como un objeto con propiedades.
// 🔢 Usa un arreglo para los ingredientes y quesos, ya que una pizza puede tener más de uno.
// 🧹 Mantén la sintaxis clara y organizada para que tu código sea fácil de leer y modificar.
// 🔍 Recuerda que puedes acceder a las propiedades de tu pizza con pizza.propiedad o modificarla si lo necesitas.
// 📚 Contenidos que estás aplicando
// 🧱 Creación de objetos en JavaScript.
// 🔁 Uso de funciones para generar objetos dinámicamente.
// 📦 Aplicación de arreglos dentro de objetos.
// 🧭 Acceso a propiedades de un objeto en JavaScript.
// 🤔 Preguntas y reflexión
// ¿Cómo te ayuda el uso de objetos y funciones a escribir código más reutilizable y organizado?
// 🎉 Resultado esperado
// Al finalizar la asignación, habrás creado cuatro pizzas diferentes usando una función que
// genera objetos. Estas pizzas estarán estructuradas de manera clara y organizada, demostrando
// cómo los objetos y funciones permiten generar datos dinámicos sin necesidad de escribir código repetitivo.