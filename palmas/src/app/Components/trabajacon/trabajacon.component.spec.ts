import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajaconComponent } from './trabajacon.component';

describe('TrabajaconComponent', () => {
  let component: TrabajaconComponent;
  let fixture: ComponentFixture<TrabajaconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrabajaconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrabajaconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
