import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KioVersolicisinprocesarComponent } from './kio-versolicisinprocesar.component';

describe('KioVersolicisinprocesarComponent', () => {
  let component: KioVersolicisinprocesarComponent;
  let fixture: ComponentFixture<KioVersolicisinprocesarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KioVersolicisinprocesarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KioVersolicisinprocesarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
