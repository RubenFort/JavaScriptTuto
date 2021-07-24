"use strict";

//********************************
//*** Herencia

class Producto {
    constructor(numSerie) {
        this.numSerie = numSerie;
        this.tiempoGarantia = 200;
    }

    //static permite llamar a infoTiendo aunque no hagamos una instancia
    static get infoTienda() {
        console.log(`Productos de la tienda Sonytel Inc`);
    }

    set garantia(value) {
        this.tiempoGarantia -= value;
    }

    get garantia() {
        return this.tiempoGarantia;
    }
}

class Pantalla extends Producto  {
    constructor(numSerie, marca, modelo, pulgadas) {
        super(numSerie)
        this.marca = marca;
        this.modelo = modelo;
        this.pulgadas = pulgadas;
    }

    // Cada vez que desde el navegador se accede a la funcion encendido(), el tiempoGarantia disminuye en 1
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

const tvSala = new Pantalla('123456','LG', 'Oasis', 55);
const tvComedor = new Pantalla('456789','SONY', 'pt100', 32);