import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OcioSocialComponent } from './ocio-social.component';

describe('OcioSocialComponent', () => {
  let component: OcioSocialComponent;
  let fixture: ComponentFixture<OcioSocialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OcioSocialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OcioSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
