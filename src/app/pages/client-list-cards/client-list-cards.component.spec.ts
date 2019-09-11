import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientListCardsComponent } from './client-list-cards.component';

describe('ClientListCardsComponent', () => {
  let component: ClientListCardsComponent;
  let fixture: ComponentFixture<ClientListCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientListCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientListCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
