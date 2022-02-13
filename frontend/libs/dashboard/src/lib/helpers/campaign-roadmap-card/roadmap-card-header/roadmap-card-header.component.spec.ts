import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadmapCardHeaderComponent } from './roadmap-card-header.component';

describe('RoadmapCardHeaderComponent', () => {
  let component: RoadmapCardHeaderComponent;
  let fixture: ComponentFixture<RoadmapCardHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoadmapCardHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoadmapCardHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
