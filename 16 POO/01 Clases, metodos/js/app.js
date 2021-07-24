"use strict"

//********************************
//*** Clases

class Pantalla{
    constructor(marca, modelo, pulgadas){
        this.marca = marca;
        this.modelo = modelo;
        this.pulgadas = pulgadas;
    }

    encendido() {
        console.log(`La pantalla ${this.marca} se ha encendido`);
    }
    
    volumen() {
        console.log(`El volumen se ha modificado`);
    }
    
    info() {
        console.log(`La pantalla ${this.marca} de modelo ${this.modelo} es de ${this.pulgadas}`);
    }

    set peso(value) {
        this.kgs = value.trim();
    }

    get peso() {
        return this.kgs;
    }
}

const tvSala = new Pantalla('LG', 'Oasis', 55);
const tbComedor = new Pantalla('SONY', 'pt100', 32);

