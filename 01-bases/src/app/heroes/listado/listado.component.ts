import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[]=['Spiderman','Ironman','Hulk','Thor','Capital America'];

  heroeBorrado: string="";

  borrerHeroe(){

    console.log('Borrando...');

    this.heroeBorrado=this.heroes.pop() || '';
    

  }

}
