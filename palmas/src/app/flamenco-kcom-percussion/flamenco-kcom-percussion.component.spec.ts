import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlamencoKcomPercussionComponent } from './flamenco-kcom-percussion.component';

describe('FlamencoKcomPercussionComponent', () => {
  let component: FlamencoKcomPercussionComponent;
  let fixture: ComponentFixture<FlamencoKcomPercussionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlamencoKcomPercussionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlamencoKcomPercussionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
