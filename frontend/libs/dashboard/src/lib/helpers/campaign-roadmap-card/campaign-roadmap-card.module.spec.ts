import { waitForAsync, TestBed } from '@angular/core/testing';
import { CampaignRoadmapCardModule } from './campaign-roadmap-card.module';

describe('CampaignRoadmapCardModule', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [CampaignRoadmapCardModule],
      }).compileComponents();
    }),
  );

  it('should create an instance of CampaignRoadmapCardModule', () => {
    expect(CampaignRoadmapCardModule).toBeDefined();
  });
});
