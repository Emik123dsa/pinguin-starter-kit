import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuesRoadmapContainerComponent } from './issues-roadmap-container.component';

describe('IssuesRoadmapContainerComponent', () => {
  let component: IssuesRoadmapContainerComponent;
  let fixture: ComponentFixture<IssuesRoadmapContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IssuesRoadmapContainerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuesRoadmapContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
