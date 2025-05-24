import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergyManagerDashboardComponent } from './energy-manager-dashboard.component';

describe('EnergyManagerDashboardComponent', () => {
  let component: EnergyManagerDashboardComponent;
  let fixture: ComponentFixture<EnergyManagerDashboardComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EnergyManagerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
