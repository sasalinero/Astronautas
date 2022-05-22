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
       this._astronauta.preparar() 
       this._ordenador.comprobar()
       console.log(`Comprobando el numero de serie de la nave ${this.nave._nombre}...NºSerie: ${this.nave._numeroSerie}`)
       this.nave.girarGrados()
    }
        
    comenzarPaseo(){
    this.nave.paseo()
    this.astronauta.info()
    }
  
    prepararAterrizaje(){
        this.nave.vuelta()
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