import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FotografiaComponent } from './fotografia.component';

describe('FotografiaComponent', () => {
  let component: FotografiaComponent;
  let fixture: ComponentFixture<FotografiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FotografiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FotografiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
