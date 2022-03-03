import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuesCardFormComponent } from './issues-card-form.component';

describe('IssuesCardFormComponent', () => {
  let component: IssuesCardFormComponent;
  let fixture: ComponentFixture<IssuesCardFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IssuesCardFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuesCardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
