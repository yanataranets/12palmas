import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisenoTarjetasComponent } from './diseno-tarjetas.component';

describe('DisenoTarjetasComponent', () => {
  let component: DisenoTarjetasComponent;
  let fixture: ComponentFixture<DisenoTarjetasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisenoTarjetasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisenoTarjetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
