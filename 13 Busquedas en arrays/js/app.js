"use strict"

//********************************
//*** Iterando arreglos con for...in

var platos = ["tortilla", "pan", "patatas"];

for ( let i in platos) {
    console.log(platos[i]);
}

//********************************
//*** Iterando arrays con forEach

platos.forEach( (plato, index) => console.log(index, plato) ); // platos.forEach( (DATO, INDICE) // El orden (DATO, INDICE) es muy importante, 1º DATO, 2º INDICE

//********************************
//*** Buscar en un array

var eleccion = platos.find( plato => plato == "pan"); // Si se cumple la condicion (plato == "pan"), plato es devuelto y almacenado en eleccion
console.log(eleccion);

var menu = [
	{nombre: 'Tortilla', precio: 15, pais: 'España'},
	{nombre: 'Pizza', precio: 12 , pais: 'Italia'},
	{nombre: 'Bacalao', precio: 30, pais: 'Portugal'},
    {nombre: 'Pasta', precio: 8, pais: 'Italia'}
];

var eleccion = menu.find( men => men.nombre == "Tortilla");
console.log(eleccion);

//********************************
//*** Busqueda de índice de elementos

// var numPlatillo = platillos.findIndex( platillo => platillo == 'tacos' );

var numPlato = menu.findIndex( men => men.nombre == 'Pizza' );

console.log("Platillo número: ", numPlato);

//********************************
//*** Filtrar arreglos

//resultado =  menu.find(platillo => platillo.pais == 'Italia');
var resultado =  menu.filter(plato => plato.pais == 'Italia');

console.log(resultado);

//********************************
//*** Validación de elementos de un arreglo

resultado = menu.some( plato => plato.precio <= 10); // some => Iteraccion completa, si se cumple la condicion una sola vez, devuelve true 
console.log('¿Hay platos que cuesten menos de 10? ', resultado);

resultado = menu.every( plato => plato.precio <= 60); // every => Iteraccion completa, si no se cumple la condicion siempre, devuelve false 
console.log('¿Todos los platos cuestan menos de 60? ', resultado); 