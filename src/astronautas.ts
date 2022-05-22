import { Nave } from "./nave";

export class Astronautas {
    _nombre:string;
    _apellidos:string;
    _edad:number;
    _planetaOrigen:string;
    _nave:Nave;

    constructor (nombre:string, apellidos:string, edad:number, planetaOrigen:string, nave:Nave){
               
                this._nombre= nombre;
                this._apellidos= apellidos;
                this._edad=edad;
                this._planetaOrigen=planetaOrigen;
                this._nave=nave;
    }

    preparar(){
        console.log(`${this._nombre} ${this._apellidos} de ${this._edad} años, viene del planeta ${this._planetaOrigen} para comenzar la misión en la nave ${this._nave.nombre} `)
    }
   info(){
        console.log(`El astronauta ${this._nombre} recoge las muestras del planeta Marte`)
    }

    set nuevaNave (nuevaNave:Nave){
        this._nave=nuevaNave;
    }
    cambioNave(){
        console.log(`${this._nombre} cambia a la nave ${this._nave.nombre} con Nº de serie ${this._nave.numeroSerie} para volver` )
    }

}