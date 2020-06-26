import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlamencoMasterClassComponent } from './flamenco-master-class.component';

describe('FlamencoMasterClassComponent', () => {
  let component: FlamencoMasterClassComponent;
  let fixture: ComponentFixture<FlamencoMasterClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlamencoMasterClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlamencoMasterClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
