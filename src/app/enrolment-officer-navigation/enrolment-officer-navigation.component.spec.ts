import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrolmentOfficerNavigationComponent } from './enrolment-officer-navigation.component';

describe('EnrolmentOfficerNavigationComponent', () => {
  let component: EnrolmentOfficerNavigationComponent;
  let fixture: ComponentFixture<EnrolmentOfficerNavigationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [EnrolmentOfficerNavigationComponent],
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
    fixture = TestBed.createComponent(EnrolmentOfficerNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
