import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergyManagerNavigationComponent } from './energy-manager-navigation.component';

describe('EnergyManagerNavigationComponent', () => {
  let component: EnergyManagerNavigationComponent;
  let fixture: ComponentFixture<EnergyManagerNavigationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [EnergyManagerNavigationComponent],
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
    fixture = TestBed.createComponent(EnergyManagerNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
