import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplainTicketComponent } from './complain-ticket.component';

describe('ComplainTicketComponent', () => {
  let component: ComplainTicketComponent;
  let fixture: ComponentFixture<ComplainTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComplainTicketComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComplainTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
