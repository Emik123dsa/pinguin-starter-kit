import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmittingOverlayComponent } from './submitting-overlay.component';

describe('SubmittingOverlayComponent', () => {
  let component: SubmittingOverlayComponent;
  let fixture: ComponentFixture<SubmittingOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmittingOverlayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmittingOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
