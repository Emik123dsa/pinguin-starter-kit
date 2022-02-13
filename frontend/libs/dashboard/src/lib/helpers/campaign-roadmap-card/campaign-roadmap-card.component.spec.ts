import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignRoadmapCardComponent } from './campaign-roadmap-card.component';

describe('CampaignRoadmapCardComponent', () => {
  let component: CampaignRoadmapCardComponent;
  let fixture: ComponentFixture<CampaignRoadmapCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampaignRoadmapCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignRoadmapCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
