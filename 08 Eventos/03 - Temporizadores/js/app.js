"use strict"

//********************************
//*** Temporizadores y Timers

// setInterval => Ejecucion infinita de un elemento cada determinado tiempo
// setTimeout => Ejecuta una accion una sola vez despues del tiempo determinado

// var temporizador = setInterval(function() {
//     setColol();
// }, 2000);

setTimeout(function() {
    setColol();
}, 3000);

function setColol() {
    var pagina = document.body;
    pagina.style.backgroundColor = pagina.style.backgroundColor == "blue" ? "green" : "blue";
}

function stopChangeColor() {
    clearInterval(temporizador);
}