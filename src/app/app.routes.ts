import { Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { CustomerAccountComponent } from './components/customer-account/customer-account.component';
import { LoginComponent } from './components/login/login.component';
import { CustomerDashboardComponent } from './components/customer-dashboard/customer-dashboard.component';
import { PinvendingComponent } from './components/pinvending/pinvending.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'header',
    pathMatch: 'full',
  },
  {
    path:'about',
    component: AboutComponent
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'services',
    component: ServicesComponent
  },
  {
    path:'customer-account',
    component: CustomerAccountComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
 
   
];
