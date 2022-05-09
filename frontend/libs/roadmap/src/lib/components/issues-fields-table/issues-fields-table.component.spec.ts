import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuesFieldsTableComponent } from './issues-fields-table.component';

describe('IssuesFieldsTableComponent', () => {
  let component: IssuesFieldsTableComponent;
  let fixture: ComponentFixture<IssuesFieldsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IssuesFieldsTableComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuesFieldsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
