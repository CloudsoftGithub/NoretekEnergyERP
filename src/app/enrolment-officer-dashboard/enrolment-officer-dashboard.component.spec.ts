import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrolmentOfficerDashboardComponent } from './enrolment-officer-dashboard.component';

describe('EnrolmentOfficerDashboardComponent', () => {
  let component: EnrolmentOfficerDashboardComponent;
  let fixture: ComponentFixture<EnrolmentOfficerDashboardComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrolmentOfficerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
