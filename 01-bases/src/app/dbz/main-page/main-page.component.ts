import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent  {


  personajes:Personaje[]=[
    
  {
    nombre:'Goku',
    poder:15000
  },{
    nombre:'Vegeta',
    poder:14000
  }

  ];

  nuevo: Personaje={

    nombre:'',
    poder:0

  }

 
  agregar(){

    //verificamos si la cadena tiene algo y no esta en 0

    if(this.nuevo.nombre.trim().length===0){

      return;

    }

    console.log(this.nuevo);

    //agregamos al array 
    this.personajes.push(this.nuevo);

    //limpiamos el objeto
    this.nuevo={
      nombre:'',
      poder:0
    }


  }
}
