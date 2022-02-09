import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignRoadmapComponent } from './campaign-roadmap.component';

describe('CampaignRoadmapComponent', () => {
  let component: CampaignRoadmapComponent;
  let fixture: ComponentFixture<CampaignRoadmapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampaignRoadmapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignRoadmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
