import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DespedidasComponent } from './despedidas.component';

describe('DespedidasComponent', () => {
  let component: DespedidasComponent;
  let fixture: ComponentFixture<DespedidasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DespedidasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DespedidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
