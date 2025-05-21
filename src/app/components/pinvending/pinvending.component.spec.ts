import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinvendingComponent } from './pinvending.component';

describe('PinvendingComponent', () => {
  let component: PinvendingComponent;
  let fixture: ComponentFixture<PinvendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PinvendingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PinvendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
