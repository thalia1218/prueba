import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KioVersoliciprocesadasComponent } from './kio-versoliciprocesadas.component';

describe('KioVersoliciprocesadasComponent', () => {
  let component: KioVersoliciprocesadasComponent;
  let fixture: ComponentFixture<KioVersoliciprocesadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KioVersoliciprocesadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KioVersoliciprocesadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
