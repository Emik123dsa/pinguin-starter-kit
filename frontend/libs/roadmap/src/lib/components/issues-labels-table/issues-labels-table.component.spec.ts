import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuesLabelsTableComponent } from './issues-labels-table.component';

describe('IssuesLabelsTableComponent', () => {
  let component: IssuesLabelsTableComponent;
  let fixture: ComponentFixture<IssuesLabelsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IssuesLabelsTableComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuesLabelsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
