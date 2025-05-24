import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAdminNavigationComponent } from './super-admin-navigation.component';

describe('SuperAdminNavigationComponent', () => {
  let component: SuperAdminNavigationComponent;
  let fixture: ComponentFixture<SuperAdminNavigationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SuperAdminNavigationComponent],
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
    fixture = TestBed.createComponent(SuperAdminNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
