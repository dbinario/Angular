import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent{

  termino:string='';
  hayError: boolean=false;
  paises:Country[]=[];

  //asi se inyecta el servicio
  constructor(private paisService: PaisService) { }

  buscar(termino: string){
    //se define si hay error al iniciar la peticion en falso
    this.hayError=false;
    this.termino=termino;

    this.paisService.buscarCapital(this.termino)
    .subscribe((paises)=>{
        console.log(paises);

        this.paises=paises;
        
      },(err)=>{
        this.hayError=true;
        this.paises=[];
      }
      );


  }

}
