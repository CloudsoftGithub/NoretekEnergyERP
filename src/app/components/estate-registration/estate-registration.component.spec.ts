import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstateRegistrationComponent } from './estate-registration.component';

describe('EstateRegistrationComponent', () => {
  let component: EstateRegistrationComponent;
  let fixture: ComponentFixture<EstateRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstateRegistrationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstateRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
