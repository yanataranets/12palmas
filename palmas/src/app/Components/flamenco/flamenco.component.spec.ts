import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlamencoComponent } from './flamenco.component';

describe('FlamencoComponent', () => {
  let component: FlamencoComponent;
  let fixture: ComponentFixture<FlamencoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlamencoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlamencoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
