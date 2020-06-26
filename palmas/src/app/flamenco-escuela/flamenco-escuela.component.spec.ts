import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlamencoEscuelaComponent } from './flamenco-escuela.component';

describe('FlamencoEscuelaComponent', () => {
  let component: FlamencoEscuelaComponent;
  let fixture: ComponentFixture<FlamencoEscuelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlamencoEscuelaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlamencoEscuelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
