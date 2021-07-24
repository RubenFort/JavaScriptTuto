"use strict"

//********************************
//*** Manejo de errores

try {
    //var array = new Array(11000000000000000000);
    //svar x = y;
    decodeURIComponent("http://%dsadaswda.com");
} catch (error) {
    console.log(error);
    console.log(error.message);
    console.log(error.name);
}

//********************************
//*** Errores personalizados

var valor1 = 10;
var valor2 = 20;

try {
    if (valor1 > valor2) {
        console.log(`Mensaje de validación: ${valor1} si es mayor que ${valor2}`);
    } else {
        throw new Error(`${valor1} no es mayor que ${valor2} :(`) // De aquí salta al catch con el contenido de Error
    }
} catch (error) {
    console.log(error);
}

//********************************
//***  Depurando tu código

class Producto {
    constructor(numSerie) {
        this.numSerie = numSerie;
        this.tiempoGarantia = 100;
    }

    static get infoTienda() {
        console.log(`Productos de la tienda Patito Inc`);
    }

    set garantia(value) {
        this.tiempoGarantia -= value;
    }
    get garantia() {
        return this.tiempoGarantia;
    }
}

class Pantalla extends Producto {
    constructor(numSerie, marca, modelo, pulgadas) {
        super(numSerie)
        this.marca = marca;
        this.modelo = modelo;
        this.pulgadas = pulgadas;
    }

    encendido() {
        this.garantia = 1;
        console.log(`La pantalla ${this.marca} se ha encendido`);
    }

    volumen() {
        console.log(`El volumen se ha modificado`);
    }

    info() {
        console.log(`La pantalla ${this.marca} de modelo ${this.modelo} es de ${this.pulgadas} pulgadas`);
    }

    set peso(value) {
        this.kgs = value.trim();
    }

    get peso() {
        return this.kgs;
    }
}

const tvSala = new Pantalla('135679', 'Master', 'Oasis', 55);
const tvHabitacion = new Pantalla('24680', 'Origin', 'Artemis', 80);