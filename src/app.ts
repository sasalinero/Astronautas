console.log("Hola que tal")

import {Astronautas} from "./astronautas";
import {CentroControl} from "./centroControl";
import {Nave} from "./nave";
import {OrdenadorCentral} from "./ordenadorCentral";

//Creo los Objetos

const ordenador= new OrdenadorCentral()
const nave=new Nave("AstroLuz", 556987)
const astronauta= new Astronautas("Pepe","Rodriguez", 32,"Tierra", nave)
const centroControl=new CentroControl(nave,astronauta,ordenador);

centroControl.prepararDespegue()
centroControl.encenderOrdenador()
centroControl.comprobarNumeroSerie()
centroControl.girarGradosNave()
centroControl.comenzarPaseo()

const nave2= new Nave("AstroApagado", 777888)

