import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KioVersolicisinprocpersonaComponent } from './kio-versolicisinprocpersona.component';

describe('KioVersolicisinprocpersonaComponent', () => {
  let component: KioVersolicisinprocpersonaComponent;
  let fixture: ComponentFixture<KioVersolicisinprocpersonaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KioVersolicisinprocpersonaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KioVersolicisinprocpersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
