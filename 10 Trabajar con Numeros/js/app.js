"use strics"

//********************************
//*** Propiedades numericas

console.log("MAX_VALUE: ", Number.MAX_VALUE); // Numero positivo mas grande que puede manejar JavaScript
console.log("MIN_VALUE: ", Number.MIN_VALUE); // Numero negativo mas grande que puede manejar JavaScript
console.log("NEGATIVE_INFINITE: ", Number.NEGATIVE_INFINITY); // Infinito negativo
console.log("POSITIVE_INFINITE: ", Number.POSITIVE_INFINITY); // Infinito
console.log("NaN: ", Number.NaN); // 

//********************************
//*** Metodos numericos

var numero = "1.234";

console.log("Number", typeof numero, typeof Number(numero)); // De String a Number
console.log("parseInt", parseInt(numero)); // De String a entero
console.log("parseFloat", parseFloat(numero)); //De String a float
console.log("isNaN", isNaN(numero)); //Pregunta si es un numero
console.log("isInteger", Number.isInteger(numero)); //Pregunta si es un entero

//********************************
//*** Propiedades numericas de instancias

var numero2 = 2.5;

console.log("toExponential: ", numero2.toExponential(4)); // Formatea a exponencial con X decimales
console.log("toFixed: ", numero2.toFixed(5)); // Determino numero de decimales
console.log("toPrecision: ", numero2.toPrecision(4)); // Determino numero de digitos 
console.log("toString: ", typeof numero2.toString()); // De Number a String