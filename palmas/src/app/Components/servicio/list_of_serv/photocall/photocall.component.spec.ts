import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotocallComponent } from './photocall.component';

describe('PhotocallComponent', () => {
  let component: PhotocallComponent;
  let fixture: ComponentFixture<PhotocallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotocallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotocallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
