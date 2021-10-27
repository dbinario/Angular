import { Component } from '@angular/core';
import { Color, Heroe } from '../../interface/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {

  enMayusculas:boolean=false;

  ordenarPor:string='';

  heroes:Heroe []=[
    {
      nombre:'Superman',
      vuela:true,
      color:Color.azul
    },{
      nombre:'Barman',
      vuela:false,
      color:Color.negro
    },{
      nombre:'Robin',
      vuela:false,
      color:Color.verde
    },{
      nombre:'Linterna Verde',
      vuela:true,
      color:Color.verde
    }

  ]

  cambio(){

    this.enMayusculas=!this.enMayusculas;
    
  }

  cambiarOrden(valor:string){
    this.ordenarPor=valor;
    console.log(valor);
  }



}
