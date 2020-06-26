import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasesBaileComponent } from './clases-baile.component';

describe('ClasesBaileComponent', () => {
  let component: ClasesBaileComponent;
  let fixture: ComponentFixture<ClasesBaileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClasesBaileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClasesBaileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
