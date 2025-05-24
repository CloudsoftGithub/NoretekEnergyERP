import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSupportDashboardComponent } from './customer-support-dashboard.component';

describe('CustomerSupportDashboardComponent', () => {
  let component: CustomerSupportDashboardComponent;
  let fixture: ComponentFixture<CustomerSupportDashboardComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerSupportDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
