"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Hola que tal");
const astronautas_1 = require("./astronautas");
const centroControl_1 = require("./centroControl");
const nave_1 = require("./nave");
const ordenadorCentral_1 = require("./ordenadorCentral");
const ordenador = new ordenadorCentral_1.OrdenadorCentral();
const nave = new nave_1.Nave("AstroLuz", 556987);
const astronauta = new astronautas_1.Astronautas("Pepe", "Rodriguez", 32, "Tierra", nave);
const centroControl = new centroControl_1.CentroControl(nave, astronauta, ordenador);
centroControl.prepararDespegue();
centroControl.encenderOrdenador();
centroControl.comprobarNumeroSerie();
centroControl.girarGradosNave();
centroControl.comenzarPaseo();
const nave2 = new nave_1.Nave("AstroApagado", 777888);
//# sourceMappingURL=app.js.map