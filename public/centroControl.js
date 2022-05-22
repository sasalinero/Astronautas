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
        return this.astronauta.preparar();
    }
    encenderOrdenador() {
        return this._ordenador.comprobar();
    }
    comprobarNumeroSerie() {
        console.log(`Comprobando el numero de serie de la nave ${this.nave._nombre}...NºSerie: ${this.nave._numeroSerie}`);
    }
    girarGradosNave() {
        return this.nave.girarGrados();
    }
    comenzarPaseo() {
        return this.nave.paseo();
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