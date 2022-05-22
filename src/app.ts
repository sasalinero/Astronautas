
import {Astronautas} from "./astronautas";
import {CentroControl} from "./centroControl";
import {Nave} from "./nave";
import {OrdenadorCentral} from "./ordenadorCentral";

//Creo los Objetos

const ordenador= new OrdenadorCentral()
const nave=new Nave("AstroLuz", 556987)
const astronauta= new Astronautas("Pepe","Rodriguez", 32,"Tierra", nave)
const centroControl=new CentroControl(nave,astronauta,ordenador);
const nave2= new Nave("AstroApagado", 777888)
astronauta.nuevaNave=nave2;

centroControl.prepararDespegue()
centroControl.comenzarPaseo()
astronauta.cambioNave()
centroControl.prepararAterrizaje()
console.log(`Fin de la espedición, ha sido todo un éxisto!`)



