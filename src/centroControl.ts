import { Astronautas } from "./astronautas"
import { Nave } from "./nave"
import { OrdenadorCentral } from "./ordenadorCentral";

export class CentroControl{
   _nave:Nave
   _astronauta:Astronautas;
   _ordenador:OrdenadorCentral;

    constructor(nave:Nave, astronauta:Astronautas, ordenador:OrdenadorCentral){
        this._nave=nave;
        this._astronauta=astronauta
        this._ordenador=ordenador
               
    }
    
    prepararDespegue(){
        return this.astronauta.preparar()
    }
    encenderOrdenador(){
        return this._ordenador.comprobar()
    }
    comprobarNumeroSerie(){
        console.log(`Comprobando el numero de serie de la nave ${this.nave._nombre}...NºSerie: ${this.nave._numeroSerie}`)
       
    }
    girarGradosNave(){
     return this.nave.girarGrados()
    }
    comenzarPaseo(){
     return this.nave.paseo()
    }

    get nave(){
        return this._nave
    }
    get astronauta(){
        return this._astronauta
    }
    get ordenador(){
        return this._ordenador
    }
  
    
}