"use strict"

//********************************
//*** Venata de alerta

const video = document.querySelector('.bostonVideo');

video.addEventListener('ended', function(){
    alert("MENSAJE\n El video ha terminado");
});

//********************************
//*** Venata de confirmacion

video.addEventListener('ended', function(){
    let resultado = confirm("¿Ver el video de nuevo?");
    console.log(resultado);
    if (resultado) {
        video.play();
    } else {
        window.location = "https://www.google.es ";
    }
});

//********************************
//*** Venata para ingreso de datos

video.addEventListener('ended', function(){
    let email = prompt("Escribe tu email para ver mas videos", "data@info.com"); // (Mensaje, respuesta por defecto)
    console.log(email);

    if (email == null || email == "") {
        console.log("Sin datos");
    } else {
        console.log(email);
    }
});