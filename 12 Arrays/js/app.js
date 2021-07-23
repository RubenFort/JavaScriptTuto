"use strict"

//********************************
//***  Primer Array

var platos = ["Pan", "Tortilla", "Pulpo"];
var bebidas = new Array ("Agua", "Zumo", "Leche", "CocaCola");;
console.log (Array.isArray(platos), bebidas);

//********************************
//***  Medir tamaño y acceder a posicion

var tamano = platos.length;
console.log("El tamaño del array plato es: " + tamano);

var plato1 = platos[1];
console.log("El objeto del indice 1 es: " + plato1);

//********************************
//***  Arrays bidimensionales

var menu = [platos, bebidas];
console.log(menu[1][2]);

//********************************
//***  Operaciones basicas

// push => Agrega un elemento al final del array
console.log("Antes de push: ", platos);
platos.push("Tostadas");
console.log("Despues de push: ", platos);

// pop => Quita un elemento del final del array
platos.pop();
platos.pop();
console.log("Despues de 2 pop: ", platos);

// join => Une, pasa de array a String
var mensaje = platos.join();
console.log(mensaje);

//********************************
//***  Generar arrays con split() from() y of()

// split()
var strPlatos = "Pan, Tortilla, Pulpo";
var splitStrPlatos = strPlatos.split(", ");
console.log(splitStrPlatos);

// Array.from() => Datos de HTMl a un array
var platosHTML = Array.from(document.querySelectorAll('.platillos p'));
var platosFrom = platosHTML.map( plato => plato.textContent ); // map => Hace iteraccion automaticamente sin necesidad de usar bucles
console.log(platosFrom);

// Array.of() => combierte en array lo que se le envie
var platosOf = Array.of("Hamburguesa", "Perrito", "Kebabh");
console.log(platosOf);

//********************************
//***  Ordenar array

// sort => Ordena array alfabeticamente
// reverse => Ordena array al reves
console.log("Antes de sort: ", bebidas);
bebidas.sort();
console.log("Despues de sort: ", bebidas);
bebidas.reverse();
console.log("Despues de primer reverse: ", bebidas);
bebidas.reverse();
console.log("Despues de segundo reverse: ", bebidas);

//********************************
//***  Desestructuracion de array

var platosA = ["Tortilla", "Pan", "Empanada" , "Tostadas"];

// var platosB = platosA[0];
// var platosC = platosA[1];
// var platosD = platosA[2];
// var platosE = platosA[3];

var [platosB, platosC, platosD, platosE] = platosA;

console.log(platosB, platosC, platosD, platosE);;