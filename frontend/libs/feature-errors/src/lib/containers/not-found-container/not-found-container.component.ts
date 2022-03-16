import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, pluck, Subject, take, takeUntil } from 'rxjs';

@Component({
  selector: 'pinguin-not-found-container',
  exportAs: 'pinguinNotFoundContainer',
  templateUrl: './not-found-container.component.html',
  styleUrls: ['./not-found-container.component.scss'],

  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundContainerComponent implements OnInit, OnDestroy {
  /**
   * Destroy subject of not found page component.
   */
  private _destroySubject: Subject<void> = new Subject<void>();

  /**
   * Title$ of not found page component.
   */
  public title$!: Observable<Optional<string>>;

  public constructor(private readonly route: ActivatedRoute) {}

  public ngOnInit(): void {
    // Resolve title from the data context.
    this.title$ = this.route.data.pipe(
      pluck('title'),
      take(1),
      takeUntil(this._destroySubject),
    );
  }

  public ngOnDestroy(): void {
    if (this._destroySubject) {
      this._destroySubject.next();
      this._destroySubject.complete();
    }
  }
}

export class RxApiGatewayService {}
