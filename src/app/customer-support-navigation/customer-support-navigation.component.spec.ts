import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSupportNavigationComponent } from './customer-support-navigation.component';

describe('CustomerSupportNavigationComponent', () => {
  let component: CustomerSupportNavigationComponent;
  let fixture: ComponentFixture<CustomerSupportNavigationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerSupportNavigationComponent],
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
    fixture = TestBed.createComponent(CustomerSupportNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
