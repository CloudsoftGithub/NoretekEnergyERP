import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerNavigationComponent } from './customer-navigation.component';

describe('CustomerNavigationComponent', () => {
  let component: CustomerNavigationComponent;
  let fixture: ComponentFixture<CustomerNavigationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerNavigationComponent],
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
    fixture = TestBed.createComponent(CustomerNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
