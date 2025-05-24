import { Component } from '@angular/core';
import { SuperAdminSideNavComponent } from "../super-admin-side-nav/super-admin-side-nav.component";
import { SuperAdminTopWidgetComponent } from "../super-admin-top-widget/super-admin-top-widget.component";
import { SuperAdminMainComponent } from '../super-admin-main/super-admin-main.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-super-admin-dashboard',
  imports: [RouterOutlet, RouterLink ,SuperAdminSideNavComponent, SuperAdminTopWidgetComponent, SuperAdminSideNavComponent,SuperAdminTopWidgetComponent,SuperAdminMainComponent],
  templateUrl: './super-admin-dashboard.component.html',
  styleUrl: './super-admin-dashboard.component.css'
})
export class SuperAdminDashboardComponent {

}
