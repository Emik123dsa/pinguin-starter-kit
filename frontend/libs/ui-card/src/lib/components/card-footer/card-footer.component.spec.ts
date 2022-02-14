import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiCardFooterComponent } from './card-footer.component';

describe('UiCardFooterComponent', () => {
  let component: UiCardFooterComponent;
  let fixture: ComponentFixture<UiCardFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiCardFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiCardFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
