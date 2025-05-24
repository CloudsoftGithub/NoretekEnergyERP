import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAdminSideNavComponent } from './super-admin-side-nav.component';

describe('SuperAdminSideNavComponent', () => {
  let component: SuperAdminSideNavComponent;
  let fixture: ComponentFixture<SuperAdminSideNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperAdminSideNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperAdminSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
