"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CentroControl = void 0;
class CentroControl {
    constructor(nave, astronauta, ordenador) {
        this._nave = nave;
        this._astronauta = astronauta;
        this._ordenador = ordenador;
    }
    prepararDespegue() {
        this._astronauta.preparar();
        this._ordenador.comprobar();
        console.log(`Comprobando el numero de serie de la nave ${this.nave._nombre}...NºSerie: ${this.nave._numeroSerie}`);
        this.nave.girarGrados();
    }
    comenzarPaseo() {
        this.nave.paseo();
        this.astronauta.info();
    }
    prepararAterrizaje() {
        this.nave.vuelta();
    }
    get nave() {
        return this._nave;
    }
    get astronauta() {
        return this._astronauta;
    }
    get ordenador() {
        return this._ordenador;
    }
}
exports.CentroControl = CentroControl;
//# sourceMappingURL=centroControl.js.map