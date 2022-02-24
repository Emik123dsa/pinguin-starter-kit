import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadmapCardFormComponent } from './roadmap-card-form.component';

describe('RoadmapCardFormComponent', () => {
  let component: RoadmapCardFormComponent;
  let fixture: ComponentFixture<RoadmapCardFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoadmapCardFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoadmapCardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
