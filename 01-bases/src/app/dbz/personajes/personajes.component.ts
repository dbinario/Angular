import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent  {

//la data es como llamamos a estos datos desde fuera se debe colocar dentro del input @Input('data')
@Input() personajes:Personaje[]=[];

}
