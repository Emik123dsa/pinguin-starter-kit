import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiCardContentComponent } from './card-content.component';

describe('UiCardContentComponent', () => {
  let component: UiCardContentComponent;
  let fixture: ComponentFixture<UiCardContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiCardContentComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiCardContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
