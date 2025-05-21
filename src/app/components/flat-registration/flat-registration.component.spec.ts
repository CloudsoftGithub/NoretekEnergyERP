import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatRegistrationComponent } from './flat-registration.component';

describe('FlatRegistrationComponent', () => {
  let component: FlatRegistrationComponent;
  let fixture: ComponentFixture<FlatRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlatRegistrationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlatRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
