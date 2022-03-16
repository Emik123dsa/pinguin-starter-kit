import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuesRoadmapComponent } from './issues-roadmap.component';

describe('IssuesRoadmapComponent', () => {
  let component: IssuesRoadmapComponent;
  let fixture: ComponentFixture<IssuesRoadmapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IssuesRoadmapComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuesRoadmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
