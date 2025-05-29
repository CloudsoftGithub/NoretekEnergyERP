import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
 import { CustomerAccountComponent } from './components/customer-account/customer-account.component';
import { LoginComponent } from './components/login/login.component';

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminNavigationComponent } from './admin-navigation/admin-navigation.component';
import { SuperAdminNavigationComponent } from './super-admin-navigation/super-admin-navigation.component';
import { EnergyManagerDashboardComponent } from './energy-manager-dashboard/energy-manager-dashboard.component';
import { EnergyManagerNavigationComponent } from './energy-manager-navigation/energy-manager-navigation.component';
import { SuperAdminDashboardComponent } from './super-admin-dashboard/super-admin-dashboard.component';
import { EnrolmentOfficerDashboardComponent } from './enrolment-officer-dashboard/enrolment-officer-dashboard.component';
import { EnrolmentOfficerNavigationComponent } from './enrolment-officer-navigation/enrolment-officer-navigation.component';
import { CustomerSupportDashboardComponent } from './customer-support-dashboard/customer-support-dashboard.component';
import { CustomerSupportNavigationComponent } from './customer-support-navigation/customer-support-navigation.component';
import { CustomerNavigationComponent } from './customer-navigation/customer-navigation.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { SignupComponent } from './components/signup/signup.component';
import { CustomerSupportPageComponent } from './components/customer-support-page/customer-support-page.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { ComplaintComponent } from './components/complaint/complaint.component';

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
    path:'customer-account',
    component: CustomerAccountComponent
  },
  {
    path:'login',
    component: LoginComponent
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
  },
  {
    path:'enrolment-officer-dashboard',
    component: EnrolmentOfficerDashboardComponent,
  },
  {
    path:'enrolment-officer-navigation',
    component: EnrolmentOfficerNavigationComponent
  },
   {
    path:'customer-support-dashboard>',
    component: CustomerSupportDashboardComponent,
  },
  {
    path:'customer-support-navigation',
    component: CustomerSupportNavigationComponent
  },
  {
    path:'customer-dashboard>',
    component: CustomerDashboardComponent,
  },
  {
    path:'customer-navigation',
    component: CustomerNavigationComponent
  },
  {
    path:'signup',
    component: SignupComponent
  },
  {
    path: 'customer-support-page',
    component: CustomerSupportPageComponent
  },
  {
    path:'verify-email',
    component: VerifyEmailComponent
  },
  {
    path:'complaint',
    component:ComplaintComponent
  }
 
 
 
   
];
