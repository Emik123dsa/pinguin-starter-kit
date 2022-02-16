import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { ClientSharedModule.forRoot() } from '@pinguin/shared';
import { of } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

import { NotFoundPageComponent } from './not-found-page.component';

describe('NotFoundPageComponent', () => {
  let component: NotFoundPageComponent;

  let fixture: ComponentFixture<NotFoundPageComponent>;

  let scheduler: TestScheduler;

  let h1: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientSharedModule.forRoot(), RouterTestingModule],
      declarations: [NotFoundPageComponent],
    }).compileComponents();

    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toContain(expected);
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    h1 = fixture.nativeElement.querySelector('h1');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#getTitleValue should display an original title', () => {
    scheduler
      .expectObservable(component.title$)
      .toBe('title', { title: 'LOX' });
  });

  it('#getTitleValue should see original title after component.title change', (done) => {
    const componentTitle = component.title$;

    component.title$ = of('404 | Not Found');

    console.log(h1.textContent);

    scheduler.expectObservable(componentTitle).toBe('title', {
      title: h1.textContent,
    });

    done();
  });

  it('#getTitleValue should return value of title after detectChanges', () => {
    // component.title$ = of('404 | Not Found');
    // fixture.detectChanges();
    /*  scheduler
      .expectObservable(component.title$)
      .toBe('title', { title: h1.textContent }); */
  });
});
