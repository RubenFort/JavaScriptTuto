"use strict"

// *************************************** TIPOS DE DATOS ************************************************


// *************************************** NUMERICOS ************************************************ 

var edad = 35;

var cantidad = "100";

var nuevaCantidad = Number(cantidad);
var parseoInt = parseInt(cantidad);
var parseoFloat = parseFloat(cantidad);

// *************************************** STRINGS ************************************************

var bebida = "agua";
var comida = 'pan';
var instruccion = "El platillo se llama 'ceviche' ";

var edad2 = 34;
var edadtxt = String(edad2);

// *************************************** BOOLEANO ************************************************

var activo = true;

var estado = Boolean( 10 > 9);

// *************************************** FECHA ************************************************

var fecha = new Date();

// *************************************** SIMBOLO ************************************************

var simbolo1 = Symbol();
var simbolo2 = Symbol();

var ambiente = Symbol('dev');

// *************************************** JSON ************************************************

// JSON => JavaScript Object Notation
var persona = {nombre: 'Sergio', twitter: 'sergio_dev12'};

var personas = [
    {nombre: 'Hugo', twitter: 'dcHugo'},
    {nombre: 'Paco', twitter: 'dcPaco'},
    {nombre: 'Luis', twitter: 'dcLuis'},
    persona
]

// Convertir a JSON (convierte todo a una cadena de texto)
var personaJSON = JSON.stringify(persona);

// Reestructuro JSON a objeto
var nuevaPersona = JSON.parse(personaJSON);