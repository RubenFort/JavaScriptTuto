"use strict"

//********************************
//*** Bucle FOR
// Repetición = iteración

var productos = 5;

for (let contador = 0; contador < productos; contador++) {
    console.log("Producto #"+ contador);
    debugger;
}

//********************************
//*** Bucle WHILE
// Iteración indeterminada o desconocida

var productos = 5; 

while(productos > 0) { 
   	console.log( 'Producto vendido');
   	productos--;
   debugger;
}

//********************************0
//*** bucle DO..WHILE
// Iteración indeterminada o desconocida

var productos = 5; 

do { 
   	console.log( 'Producto vendido');
   	productos--;
   debugger;
} 
while(productos>=1)

//********************************0
//*** Control de bucles
// break | continue

var contador = 0 
var cuenta = 0;

for(contador = 0;contador<= 20;contador++) { 
    if(contador == 5){
        break
    }
   if (contador % 2 == 0) { 
      continue;
   } 
   cuenta++;
   debugger;
} 

console.log("Hay" + cuenta + " números impares");