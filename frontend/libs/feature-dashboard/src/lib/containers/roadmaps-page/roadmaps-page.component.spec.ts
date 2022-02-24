import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadmapsPageComponent } from './roadmaps-page.component';

describe('RoadmapsPageComponent', () => {
  let component: RoadmapsPageComponent;
  let fixture: ComponentFixture<RoadmapsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoadmapsPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoadmapsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
