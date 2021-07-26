import { Component } from '@angular/core';
import { GiftsService } from '../../gifs/service/gifts.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent  {

  constructor(private GiftsService:GiftsService) { }

  get historial(){

    return this.GiftsService.historial;

  }


}
