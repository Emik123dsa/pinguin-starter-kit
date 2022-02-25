import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiCardHeaderComponent } from './card-header.component';

describe('UiCardHeaderComponent', () => {
  let component: UiCardHeaderComponent;
  let fixture: ComponentFixture<UiCardHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiCardHeaderComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiCardHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
