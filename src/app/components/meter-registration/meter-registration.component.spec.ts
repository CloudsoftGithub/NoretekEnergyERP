import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeterRegistrationComponent } from './meter-registration.component';

describe('MeterRegistrationComponent', () => {
  let component: MeterRegistrationComponent;
  let fixture: ComponentFixture<MeterRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeterRegistrationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeterRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
