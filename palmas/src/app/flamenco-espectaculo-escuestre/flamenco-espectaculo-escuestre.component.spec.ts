import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlamencoEspectaculoEscuestreComponent } from './flamenco-espectaculo-escuestre.component';

describe('FlamencoEspectaculoEscuestreComponent', () => {
  let component: FlamencoEspectaculoEscuestreComponent;
  let fixture: ComponentFixture<FlamencoEspectaculoEscuestreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlamencoEspectaculoEscuestreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlamencoEspectaculoEscuestreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
