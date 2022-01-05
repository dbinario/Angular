import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {

  constructor(private heroesService: HeroesService,
              private activatedRoute  : ActivatedRoute,
              private router:Router) { }
              

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

    
    this.activatedRoute.params
    .pipe(
      switchMap(({id})=>this.heroesService.getHeroePorId(id))
    )
    .subscribe(heroe=>this.heroe=heroe);

  }


  guardar(){
      
    
    if(this.heroe.superhero.trim().length===0){
      alert('El nombre del heroe es requerido');
      return;
    }


    console.log(this.heroe.id);

    if(this.heroe.id){
      //actualizar
      this.heroesService.actualizarHeroe(this.heroe)
      .subscribe(heroe=>console.log('Actualizando: ',heroe));


    }else{
      //crear
      this.heroesService.agregarHeroe(this.heroe).subscribe(
        heroe=>{
          this.router.navigate(['/heroes/editar',heroe.id]);
        });
  
    }
  
  }

}
