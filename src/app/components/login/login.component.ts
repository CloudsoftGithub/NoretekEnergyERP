import { Component, inject } from '@angular/core';
import {FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  loginObj: any ={
    userName: '',
    password: ''
  };

  router = inject(Router)/////


  onLogin(){
    if(this.loginObj.userName === 'admin' && this.loginObj.password === '123'){
      
        //this.router.navigateByUrl('/super-admin-header');
    }else{
      alert('Wrong Credentials');
    }
  }

  onClickSuperAdmin(){
    this.router.navigateByUrl("/super-admin-navigation");
  }

  onClickAdmin(){
        this.router.navigateByUrl("/admin-navigation");
  }

  onClickEnergyManger(){
    this.router.navigateByUrl("/energy-manager-navigation");
  }
  onClickEnrollmentOfficer(){
    this.router.navigateByUrl("/enrolment-officer-navigation");

  }
  onClickCustomerSupport(){
    this.router.navigateByUrl("/customer-support-navigation");
  }

  onClickCustomer(){
        this.router.navigateByUrl("/customer-navigation");

  }

}
