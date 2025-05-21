import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingFlatAndMetersComponent } from './adding-flat-and-meters.component';

describe('AddingFlatAndMetersComponent', () => {
  let component: AddingFlatAndMetersComponent;
  let fixture: ComponentFixture<AddingFlatAndMetersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddingFlatAndMetersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddingFlatAndMetersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
