import { Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { CustomerAccountComponent } from './components/customer-account/customer-account.component';
import { LoginComponent } from './components/login/login.component';
import { CustomerDashboardComponent } from './components/customer-dashboard/customer-dashboard.component';
import { PinvendingComponent } from './components/pinvending/pinvending.component';
import { SuperAdminDashboardComponent } from './components/super-admin-dashboard/super-admin-dashboard.component';
import { SuperAdminHeaderComponent } from './components/super-admin-header/super-admin-header.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminNavigationComponent } from './admin-navigation/admin-navigation.component';
import { SuperAdminNavigationComponent } from './super-admin-navigation/super-admin-navigation.component';
import { EnergyManagerDashboardComponent } from './energy-manager-dashboard/energy-manager-dashboard.component';
import { EnergyManagerNavigationComponent } from './energy-manager-navigation/energy-manager-navigation.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
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
  {
     path:'super-admin-header',
    component: SuperAdminHeaderComponent,
  },
  
  {
    path:'admin-dashboard',
    component: AdminDashboardComponent
  },
  {
    path:'admin-navigation',
    component: AdminNavigationComponent
  },

  {
    path:'super-admin-dashboard',
    component: SuperAdminDashboardComponent,
  },
  {
    path:'super-admin-navigation',
    component: SuperAdminNavigationComponent
  },
   {
    path:'energy-manager-dashboard',
    component: EnergyManagerDashboardComponent,
  },
  {
    path:'energy-manager-navigation',
    component: EnergyManagerNavigationComponent
  }
 
 
   
];
