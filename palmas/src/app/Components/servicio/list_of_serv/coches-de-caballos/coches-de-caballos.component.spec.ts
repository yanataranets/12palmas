import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CochesDeCaballosComponent } from './coches-de-caballos.component';

describe('CochesDeCaballosComponent', () => {
  let component: CochesDeCaballosComponent;
  let fixture: ComponentFixture<CochesDeCaballosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CochesDeCaballosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CochesDeCaballosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
