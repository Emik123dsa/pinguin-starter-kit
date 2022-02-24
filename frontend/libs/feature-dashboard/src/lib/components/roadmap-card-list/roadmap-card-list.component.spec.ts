import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadmapCardListComponent } from './roadmap-card-list.component';

describe('RoadmapCardListComponent', () => {
  let component: RoadmapCardListComponent;
  let fixture: ComponentFixture<RoadmapCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoadmapCardListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoadmapCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
