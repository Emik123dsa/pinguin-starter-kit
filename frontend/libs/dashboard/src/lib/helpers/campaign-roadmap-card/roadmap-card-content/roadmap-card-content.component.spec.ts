import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadmapCardContentComponent } from './roadmap-card-content.component';

describe('RoadmapCardContentComponent', () => {
  let component: RoadmapCardContentComponent;
  let fixture: ComponentFixture<RoadmapCardContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoadmapCardContentComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoadmapCardContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
