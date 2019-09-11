import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KioVersoliciprocpersonaComponent } from './kio-versoliciprocpersona.component';

describe('KioVersoliciprocpersonaComponent', () => {
  let component: KioVersoliciprocpersonaComponent;
  let fixture: ComponentFixture<KioVersoliciprocpersonaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KioVersoliciprocpersonaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KioVersoliciprocpersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
