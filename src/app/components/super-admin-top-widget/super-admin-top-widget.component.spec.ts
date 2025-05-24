import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAdminTopWidgetComponent } from './super-admin-top-widget.component';

describe('SuperAdminTopWidgetComponent', () => {
  let component: SuperAdminTopWidgetComponent;
  let fixture: ComponentFixture<SuperAdminTopWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperAdminTopWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperAdminTopWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
