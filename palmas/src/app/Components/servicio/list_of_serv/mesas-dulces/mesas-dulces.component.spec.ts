import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesasDulcesComponent } from './mesas-dulces.component';

describe('MesasDulcesComponent', () => {
  let component: MesasDulcesComponent;
  let fixture: ComponentFixture<MesasDulcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesasDulcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesasDulcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
