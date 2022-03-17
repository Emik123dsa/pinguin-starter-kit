import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueEditContainerComponent } from './issue-edit-container.component';

describe('IssueEditContainerComponent', () => {
  let component: IssueEditContainerComponent;
  let fixture: ComponentFixture<IssueEditContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssueEditContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueEditContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
