import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {
  
  @Input() nuevo: Personaje={

    nombre:'',
    poder:0

  }

  constructor(private dbzservice:DbzService){}

  //sirve para emitir eventos del hijo al padre y se debe especificar el tipo de dato qie debe emitir
  //@Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();
 
  agregar(){

    //verificamos si la cadena tiene algo y no esta en 0

    if(this.nuevo.nombre.trim().length===0){

      return;

    }

    //this.onNuevoPersonaje.emit(this.nuevo);

    this.dbzservice.agregarPersonaje(this.nuevo);

    //limpiamos el objeto
    this.nuevo={
      nombre:'',
      poder:0
    }


  }

}
