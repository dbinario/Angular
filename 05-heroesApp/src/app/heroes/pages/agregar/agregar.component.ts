import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {

  constructor() { }

  publishers=[

    {
     
      id: 'DC Comics',
      desc:'DC - Comics'

    },{

      id: 'Marvel Comics',
      desc:'Marvel - Comics'

    }

  ];

  heroe:Heroe={
    superhero:'',
    alter_ego:'',
    characters:'',
    publisher:Publisher.DCComics,
    first_appearance:'',
    alt_img:'',
  }

  ngOnInit(): void {
  }

}
