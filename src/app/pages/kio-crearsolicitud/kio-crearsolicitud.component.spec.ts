import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KioCrearsolicitudComponent } from './kio-crearsolicitud.component';

describe('KioCrearsolicitudComponent', () => {
  let component: KioCrearsolicitudComponent;
  let fixture: ComponentFixture<KioCrearsolicitudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KioCrearsolicitudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KioCrearsolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
