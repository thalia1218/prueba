import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KioVersolicitudesempleadoComponent } from './kio-versolicitudesempleado.component';

describe('KioVersolicitudesempleadoComponent', () => {
  let component: KioVersolicitudesempleadoComponent;
  let fixture: ComponentFixture<KioVersolicitudesempleadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KioVersolicitudesempleadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KioVersolicitudesempleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
