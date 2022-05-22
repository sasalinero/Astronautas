"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Nave = void 0;
class Nave {
    constructor(nombre, numeroSerie) {
        this._nombre = nombre;
        this._numeroSerie = numeroSerie;
    }
    get nombre() {
        return this._nombre;
    }
    get numeroSerie() {
        return this._numeroSerie;
    }
    girarGrados() {
        console.log(`${this.nombre} girando 10 grados, preparado para despegar!!!!`);
    }
    paseo() {
        console.log(`Comenzamos el paseo por el planeta Marte`);
    }
}
exports.Nave = Nave;
//# sourceMappingURL=nave.js.map