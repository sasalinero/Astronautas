"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const astronautas_1 = require("./astronautas");
const centroControl_1 = require("./centroControl");
const nave_1 = require("./nave");
const ordenadorCentral_1 = require("./ordenadorCentral");
const ordenador = new ordenadorCentral_1.OrdenadorCentral();
const nave = new nave_1.Nave("AstroLuz", 556987);
const astronauta = new astronautas_1.Astronautas("Pepe", "Rodriguez", 32, "Tierra", nave);
const centroControl = new centroControl_1.CentroControl(nave, astronauta, ordenador);
const nave2 = new nave_1.Nave("AstroApagado", 777888);
astronauta.nuevaNave = nave2;
centroControl.prepararDespegue();
centroControl.comenzarPaseo();
astronauta.cambioNave();
centroControl.prepararAterrizaje();
console.log(`Fin de la espedición, ha sido todo un éxisto!`);
//# sourceMappingURL=app.js.map