import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { IssueFieldEntities, IssueFieldEntity } from '@pinguin/api';
import { BehaviorSubject } from 'rxjs';

export class IssueFieldDataSource extends DataSource<IssueFieldEntity> {
  private readonly issueFieldEntitiesSubject: BehaviorSubject<IssueFieldEntities> =
    new BehaviorSubject<IssueFieldEntities>([
      new IssueFieldEntity(
        1,
        'Quick try on DB',
        'One morning, when Gregor Samsa woke from troubled dreams.',
        [1, 3],
        1641164400,
        1641164400,
      ),
      new IssueFieldEntity(
        2,
        'Quick try on DB',
        'One morning, when Gregor Samsa woke from troubled dreams.',
        [1, 3],
        1641164400,
        1641164400,
      ),
    ]);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public override connect(collectionViewer: CollectionViewer) {
    return this.issueFieldEntitiesSubject.asObservable();
  }

  public override disconnect(): void {
    this.issueFieldEntitiesSubject.complete();
  }
}
