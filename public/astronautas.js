"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Astronautas = void 0;
class Astronautas {
    constructor(nombre, apellidos, edad, planetaOrigen, nave) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.planetaOrigen = planetaOrigen;
        this.nave = nave;
    }
    preparar() {
        console.log(`${this.nombre} ${this.apellidos} de ${this.edad} años, viene del planeta ${this.planetaOrigen} para comenzar la misión en la nave ${this.nave.nombre} `);
    }
}
exports.Astronautas = Astronautas;
//# sourceMappingURL=astronautas.js.map