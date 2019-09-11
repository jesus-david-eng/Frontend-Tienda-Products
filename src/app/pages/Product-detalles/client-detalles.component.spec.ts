import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientDetallesComponent } from './client-detalles.component';

describe('ClientDetallesComponent', () => {
  let component: ClientDetallesComponent;
  let fixture: ComponentFixture<ClientDetallesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientDetallesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
