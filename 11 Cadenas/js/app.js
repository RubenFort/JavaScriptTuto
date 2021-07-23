"use strict"

//********************************
//***  Creando cadena de texto

var pais = "España";
var comida = new String("Tortilla");

//********************************
//***  Medir cadena

var medirMensaje = "Hola";
console.log("La cadena de texto tiene: " + medirMensaje.length + " letras");

//********************************
//***  Metodos busqueda

var mensaje = "Vamos a buscar en este Mensaje buscar";
var resultadoBusqueda;

// indexOf => Primera coincidencia de busqueda
resultadoBusqueda = mensaje.indexOf("buscar");
console.log("El resultado de la busqueda empieza en el indice: " + resultadoBusqueda);

// lastIndexOf => Ultima coincidencia de busqueda
resultadoBusqueda = mensaje.lastIndexOf("buscar");
console.log("El resultado de la busqueda empieza en el indice: " + resultadoBusqueda);

// search => Primera coincidencia de busqueda, similiar a indexOf
resultadoBusqueda = mensaje.search("buscar");
console.log("El resultado de la busqueda empieza en el indice: " + resultadoBusqueda);

// search | Expresion regular
resultadoBusqueda = mensaje.search(/me/i); // me => Palabras que contengas me * i => in case sensitive
console.log("El resultado de la busqueda empieza en el indice: " + resultadoBusqueda);

var mensaje2 = "Estoy aprendiendo JavaScript y estoy Aprendiendo mucho"

// match => Devuelve array
resultadoBusqueda = mensaje2.match(/aprendiendo/gi); // g => Busca todas las incidencias * i => in case sensitive
console.log(resultadoBusqueda);

// substr => Devuelve String
resultadoBusqueda = mensaje2.substr(6, 11); // (Indice 1ª letra, número de letras a partir de la primera)
console.log(resultadoBusqueda);

// substring => Devuelve String
resultadoBusqueda = mensaje2.substring(6, 17); // (Indice 1ª letra, Indice de la ultima letra(excluida))
console.log(resultadoBusqueda);

// charAt => Devuelve String
resultadoBusqueda = mensaje2.charAt(3); // (Letra mque hay en el indice buscado)
console.log(resultadoBusqueda);

var mensaje3 = "Estoy aprendiendo JavaScript";

 // startsWith => Devuelve boolean // Comprueba si un String empieza por un determinado String
 var textoEn = mensaje3.indexOf("JavaScript");
 resultadoBusqueda = mensaje3.startsWith("Ja", textoEn); // (String que se busca, indice a partir del cual se busca)
 console.log(resultadoBusqueda);

 // endsWith => Devuelve boolean // Comprueba si un String termina con un determinado String
 resultadoBusqueda = mensaje3.endsWith("pt");
 console.log(resultadoBusqueda);

// includes => Devuelve boolean // Comprueba si un String contiene un determinado String
resultadoBusqueda = mensaje3.includes("Estoy", 6);
console.log(resultadoBusqueda);

//********************************
//***  Metodos de generación, reemplazo y separacion

var resultado;

// repeat => Repite un String n veces
resultado = mensaje3.repeat(4); // Repite y copia mensaje 4 veces en resultado
console.log(resultado);

// replace => Reemplaza un String por otro
resultado = mensaje3.replace("JavaScript", "a programar"); // Copia mensaje3 en resultado cambiando "JavaScript" por "a programar"
console.log(resultado);

// slice => Copia in String a partir de un indice
resultado = mensaje3.slice(4); // Copia mensaje3 en resultado a partir del indice 4
console.log(resultado);

resultado = mensaje3.slice(6, medirMensaje.length - 6); // Del indice 6 al indice medirMensaje.length - 6
console.log(resultado);

// split => Devuelve array
resultado = mensaje3.split(" "); //Separa el String por " ", y ordena resultado en array
console.log(resultado);

// trim => Devuelve String //Elimina espacios en blanco de antes y despues de una cadena
var mensaje3b = "      Estoy aprendiendo JavaScript        ";

resultado = mensaje3b.trim();
console.log(resultado);

//********************************
//***  Metodos de transformacion

// toLowerCase => Pasar a minusculas
resultado = mensaje3.toLowerCase();
console.log(resultado);

// toUpperCase => Pasar a mayusculas
resultado = mensaje3.toUpperCase();
console.log(resultado);

// concat => Concatena String
resultado = mensaje3.concat(mensaje3b, " y algun lenguaje mas.");
console.log(resultado);

//********************************
//***  Plantillas y literales

var lenguaje = "JavaScript";
var lenguaje2 = "THML";
var mensaje4 = `Me gusta ${lenguaje} y su integracion con ${lenguaje2}`;

console.log(mensaje4);

// Mensaje multilinea
var mensajeMultilinea = `
    Hola mundo,
    estoy aprendiendo
    ${lenguaje} y me gusta
    como se integra con CSS y HTML`;
    
console.log(mensajeMultilinea);