"use strict"

//********************************************** VAR ********************************************************

var nombre = "Sergio";

console.log(nombre);

//*********************************************** LET *******************************************************

function saludo(){
    //Usando let(contenedor de bloque) delimito esta variable a dentro de la función, es decir, estoy declarando una nueva variable
    let nombre = 'Pablo';
    console.log(nombre);

    //edad solo existe dentro de la funcion
    let edad = 34;
    console.log(edad);
}
/* La consola de google da un error pq edad solo existe dentro de la función saludo
   console.log(edad);*/

saludo();

//************************************************* CONST *****************************************************

const pi = 3.1416;
/* La consola de google da un error pq pi es uina constante
  pi = 15;*/

  