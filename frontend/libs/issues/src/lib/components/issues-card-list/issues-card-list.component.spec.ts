import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuesCardListComponent } from './issues-card-list.component';

describe('IssuesCardListComponent', () => {
  let component: IssuesCardListComponent;
  let fixture: ComponentFixture<IssuesCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IssuesCardListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuesCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
