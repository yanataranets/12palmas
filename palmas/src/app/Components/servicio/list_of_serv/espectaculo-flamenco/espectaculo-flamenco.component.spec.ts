import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspectaculoFlamencoComponent } from './espectaculo-flamenco.component';

describe('EspectaculoFlamencoComponent', () => {
  let component: EspectaculoFlamencoComponent;
  let fixture: ComponentFixture<EspectaculoFlamencoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspectaculoFlamencoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspectaculoFlamencoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
