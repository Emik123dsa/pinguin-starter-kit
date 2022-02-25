import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueCardFormComponent } from './issue-card-form.component';

describe('IssueCardFormComponent', () => {
  let component: IssueCardFormComponent;
  let fixture: ComponentFixture<IssueCardFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssueCardFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueCardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
