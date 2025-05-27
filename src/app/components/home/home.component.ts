import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

 import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

router = inject(Router)/////

/*
  

onClickHome(){
  this.router.navigateByUrl("/login");
}

onClickAbout(){
    this.router.navigateByUrl("/about");
}

onClickSginup(){
    this.router.navigateByUrl("/signup");
}
onClickLogin(){
    this.router.navigateByUrl("/login");
}

*/

//
}

  


 