import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CastilloComponent } from './castillo.component';

describe('CastilloComponent', () => {
  let component: CastilloComponent;
  let fixture: ComponentFixture<CastilloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CastilloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CastilloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
