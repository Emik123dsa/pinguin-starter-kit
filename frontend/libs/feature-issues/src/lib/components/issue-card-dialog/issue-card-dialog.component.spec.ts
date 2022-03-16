import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueCardDialogComponent } from './issue-card-dialog.component';

describe('IssueCardDialogComponent', () => {
  let component: IssueCardDialogComponent;
  let fixture: ComponentFixture<IssueCardDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IssueCardDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueCardDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
