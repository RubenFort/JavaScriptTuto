"use strict"

//********************************
//*** Eventos del ratón

// click
// mouseover
// mouseout

const boton = document.querySelector('.boton'); //Asociación entre js y HTML

boton.addEventListener('click', function() {
    console.log("El boton se ha pulsado");
})

boton.addEventListener('mouseover', function() {
    console.log("El boton esta sobre el boton");
})

boton.addEventListener('mouseout', function() {
    console.log("El boton esta fuera del boton");
})

//********************************
//*** Eventos del teclado

// keydown
// keypress
// keyup

window.addEventListener('keydown', function(event) {
    console.log('Pulsando tecla');
    console.log(String.fromCharCode(event.keyCode));
})

window.addEventListener('keypress', function(event) {
    console.log('Tecla pulsada');
})

window.addEventListener('keyup', function(event) {
    console.log('Tecla liberada');
})

//********************************
//*** Carga de documento

window.addEventListener('load', function() {
    console.log('El contenido de la ventana se ha cargado');
})

//********************************
//*** Eventos multimedia



//********************************
//*** 



