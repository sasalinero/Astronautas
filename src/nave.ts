export class Nave {

    _nombre:string;
    _numeroSerie:number;

    constructor(nombre:string, numeroSerie:number){
        this._nombre= nombre;
        this._numeroSerie=numeroSerie;
    }
     get nombre ():string {
         return this._nombre
     }
     get numeroSerie():number{
         return this._numeroSerie
     }
 

     girarGrados(){
         console.log(`${this.nombre} girando 10 grados, preparado para despegar!!!!`)
     }
     paseo(){
        console.log(`Comenzamos el paseo por el planeta Marte`)
     }

}