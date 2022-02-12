import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreloadingOverlayComponent } from './preloading-overlay.component';

describe('PreloadingOverlayComponent', () => {
  let component: PreloadingOverlayComponent;
  let fixture: ComponentFixture<PreloadingOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreloadingOverlayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreloadingOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
