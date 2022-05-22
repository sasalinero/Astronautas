import { Nave } from "./nave";

export class Astronautas {
    nombre:string;
    apellidos:string;
    edad:number;
    planetaOrigen:string;
    nave:Nave;

    constructor (nombre:string, apellidos:string, edad:number, planetaOrigen:string, nave:Nave){
               
                this.nombre= nombre;
                this.apellidos= apellidos;
                this.edad=edad;
                this.planetaOrigen=planetaOrigen;
                this.nave=nave;
    }

    preparar(){
        console.log(`${this.nombre} ${this.apellidos} de ${this.edad} años, viene del planeta ${this.planetaOrigen} para comenzar la misión en la nave ${this.nave.nombre} `)
    }

}