import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAdminDashboardComponent } from './super-admin-dashboard.component';

describe('SuperAdminDashboardComponent', () => {
  let component: SuperAdminDashboardComponent;
  let fixture: ComponentFixture<SuperAdminDashboardComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperAdminDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
