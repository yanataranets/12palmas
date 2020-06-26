import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecoracionGlobosComponent } from './decoracion-globos.component';

describe('DecoracionGlobosComponent', () => {
  let component: DecoracionGlobosComponent;
  let fixture: ComponentFixture<DecoracionGlobosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecoracionGlobosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecoracionGlobosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
