import { Component } from '@angular/core';
import { SuperAdminDashboardComponent } from '../super-admin-dashboard/super-admin-dashboard.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-super-admin-header',
  imports: [RouterOutlet,RouterLink ,SuperAdminDashboardComponent],
  templateUrl: './super-admin-header.component.html',
  styleUrl: './super-admin-header.component.css'
})
export class SuperAdminHeaderComponent {

}
