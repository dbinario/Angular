import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent  {

  //i18nselect
  nombre: string='Fernando';
  genero: string='masculino';
  invitacionMapa={
    'masculino':'invitarlo',
    'femenino':'invitarla'
  }

  //i18nplural
  clientes: string[]=['Maria','Pedro','Juan','Jose','Julia'];
  clientesMapa={
    '=0':' no tenemos ningún cliente esperando.',
    '=1':'tenemos a un cliente esperando.',
    '=2':'tenemos dos clientes esperando',
    'other':'tenemos # clientes esperando.'
  }


  cambiarCliente(){


    if(this.nombre=='Fernando'){

      this.nombre='Maria';
      this.genero='femenino';

    }else{

      this.nombre='Fernando';
      this.genero='masculino';

    }


  }


  borrarCliente(){

    this.clientes.pop();

  }

  //KeyValuePipe

  persona={
    nombre:'Fernando',
    edad:'32',
    direccion:'CDMX, Mexico'

  }


  //JsonPipe
  heroes=[
    {
      nombre:'Superman',
      vuela:true
    },
    {
      nombre:'Robin',
      vuela:false
    },
    {
      nombre:'Aquaman',
      vuela:false
    }
  ]


  //Async Pipe

  miObservable=interval(1000); //0,1,2,3,4,5

  valorPromesa = new Promise( (resolve, reject) => {

    setTimeout(() => {
      resolve( 'Tenemos data de promesa' );
    }, 3500 );

  });

}
