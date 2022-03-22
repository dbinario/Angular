import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent  {

  constructor(private router: Router,
              private authService:AuthService) { }

  login(){
    
    //ir al backend
    //si el usuario existe

    this.authService.login()
    .subscribe(
      resp=>{
        console.log(resp);

        if(resp.id){
        
          this.router.navigate(['./heroes']);
          
        }

      }
    );

    


  }

  ingresarSinLogin(){

    this.authService.logout();
    this.router.navigate(['./heroes']);

  }

}
