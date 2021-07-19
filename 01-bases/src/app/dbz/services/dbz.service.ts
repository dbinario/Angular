import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService{


    private _personajes:Personaje[]=[
    
        {
          nombre:'Goku',
          poder:15000
        },{
          nombre:'Vegeta',
          poder:14000
        }
      
        ];
      

        get personajes():Personaje[]{

            //esto rompe la referencia manda un arreglo nuevo para no trabajar sobre el mismo
            return [...this._personajes];
        }


    constructor(){}


    agregarPersonaje(personaje:Personaje){

    this._personajes.push(personaje);        

    }







}