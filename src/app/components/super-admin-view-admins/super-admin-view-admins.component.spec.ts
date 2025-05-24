import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAdminViewAdminsComponent } from './super-admin-view-admins.component';

describe('SuperAdminViewAdminsComponent', () => {
  let component: SuperAdminViewAdminsComponent;
  let fixture: ComponentFixture<SuperAdminViewAdminsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperAdminViewAdminsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperAdminViewAdminsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
