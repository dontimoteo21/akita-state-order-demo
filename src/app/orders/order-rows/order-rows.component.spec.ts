import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderRowsComponent } from './order-rows.component';

describe('OrderRowsComponent', () => {
  let component: OrderRowsComponent;
  let fixture: ComponentFixture<OrderRowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderRowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderRowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
