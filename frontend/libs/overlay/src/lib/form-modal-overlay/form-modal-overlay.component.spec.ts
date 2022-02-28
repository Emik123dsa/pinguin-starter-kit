import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormModalOverlayComponent } from './form-modal-overlay.component';

describe('FormModalOverlayComponent', () => {
  let component: FormModalOverlayComponent;
  let fixture: ComponentFixture<FormModalOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormModalOverlayComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormModalOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
