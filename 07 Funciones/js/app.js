"use strict"

//********************************
//*** Estrcutura básica de una función

function saludar() {
    var saludo = "Hola Mundo";
    //console.log(saludo);
    return saludo;
}

saludar();

//********************************
//*** Parametros de una función

function saludar2(nombre, edad) {
    console.log("Hola " + nombre);
    console.log("Edad: " + nombre);
    var resultado = nombre + " tiene " + edad + " años";
    return resultado;
}

var mensaje = saludar2("Juan", 22);
console.log(mensaje);

//********************************
//*** Inicializacion de parametros

function contar(cantidad = 20) {// Si no envío valor como parámetro su valor por defecto es 20
    console.log(cantidad);
}

contar();       // cantidad = 20
contar(100);    // cantidad = 100

//********************************
//*** Parametros REST

function cocinar(ingrediente1, ingrediente2, ...masIngredientes) {
    console.log("Ingrediente1: " + ingrediente1);
    console.log("Ingrediente2: " + ingrediente2);
    console.log("Mas Ingredientes: " + masIngredientes);
}

cocinar("Pollo", "Tomate", "Arroz", "Frijoles", "Pescado");

//********************************
//*** Parametros SPREAD

function cocinar(ingrediente1, ingrediente2, Ingrediente3, ...otros) {
    console.log("Ingrediente1: " + ingrediente1);
    console.log("Ingrediente2: " + ingrediente2);
    console.log("Ingrediente3: " + Ingrediente3);
    console.log("Otros: " + otros);
}

var ingredientesBase = ["Arroz", "Tomate"];

cocinar(...ingredientesBase, "Arroz", "Pescado", "Pan");

//********************************
//*** Función anónima

//saluda3 se usará para invocar a la variable
var saludar3 = function(nombre1) {
    var mensaje = "Hola " + nombre1;
    return mensaje;
}

// Para llamar a una función anónima se usa el nombre de la variable a la que se igualó
console.log(saludar3('Juan'));

//********************************
//*** Callbacks - Funcióin que como parámetro tiene otra función

function callback(){ // 4
    console.log("Yo soy un callback")
}

function mensaje2(fn) { // 2
    fn(); //3
}

mensaje2(callback); // 1

function calcular(datoA, datoB, sumarCB, restarCB) { //2
    var suma = datoA + datoB;
    var resta = datoA - datoB;

    sumarCB(suma); // 3. sumarCB(suma) = function(resultado) {console.log('Suma', resultado);} 
    restarCB(resta);
}

//calcular(v1, v2, func, func);
calcular(2, 3, function(resultado){  //1
    console.log('Suma', resultado);
}, function(resultado){  
    console.log('Resta', resultado);
});

//********************************
//*** Lambda

var saludar = nombre => "Hola" + nombre;
console.log(saludar("Susana"));

var sumar = cantidad => cantidad + 10;
console.log(sumar(10));

var calcular = (valor1, valor2) => valor1 + valor2;
console.log(calcular(10, 15));

var generar = (valor1, valor2) => {
    var valor3 = 5;
    return valor1 + valor2 + valor3;
}
console.log(generar(10, 15));

var validar = () => {
    return 'Validación correcta';
}
console.log(validar());

//********************************
//*** Uso del operador this

const boton = document.querySelector('.boton');


// boton.addEventListener('click', function () {
//     console.log(this.innerHTML);// Acceder al contenido de la etiqueta
//     console.log('Boton pulsado');
// })


boton.addEventListener('click', () => {
    console.log(this)
    this.location = "http://www.google.com"; // Ir a www.google.com
})