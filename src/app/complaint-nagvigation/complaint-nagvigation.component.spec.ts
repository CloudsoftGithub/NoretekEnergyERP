import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintNagvigationComponent } from './complaint-nagvigation.component';

describe('ComplaintNagvigationComponent', () => {
  let component: ComplaintNagvigationComponent;
  let fixture: ComponentFixture<ComplaintNagvigationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ComplaintNagvigationComponent],
      imports: [
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule,
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplaintNagvigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
