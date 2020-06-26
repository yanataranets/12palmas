import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlamencoEnBlancoYNegroComponent } from './flamenco-en-blanco-y-negro.component';

describe('FlamencoEnBlancoYNegroComponent', () => {
  let component: FlamencoEnBlancoYNegroComponent;
  let fixture: ComponentFixture<FlamencoEnBlancoYNegroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlamencoEnBlancoYNegroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlamencoEnBlancoYNegroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
