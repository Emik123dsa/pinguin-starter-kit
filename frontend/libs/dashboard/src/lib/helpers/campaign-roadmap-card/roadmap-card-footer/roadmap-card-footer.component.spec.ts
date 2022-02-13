import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadmapCardFooterComponent } from './roadmap-card-footer.component';

describe('RoadmapCardFooterComponent', () => {
  let component: RoadmapCardFooterComponent;
  let fixture: ComponentFixture<RoadmapCardFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoadmapCardFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoadmapCardFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
