import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { IssueLabelEntities, IssueLabelEntity } from '@pinguin/api';
import { BehaviorSubject } from 'rxjs';

export class IssueLabelDataSource extends DataSource<IssueLabelEntity> {
  private readonly issueLabelEntitiesSubject: BehaviorSubject<IssueLabelEntities> =
    new BehaviorSubject<IssueLabelEntity[]>([
      new IssueLabelEntity(1, 'Frontend'),
      new IssueLabelEntity(2, 'Security'),
      new IssueLabelEntity(3, 'Backend'),
    ]);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public override connect(collectionViewer: CollectionViewer) {
    return this.issueLabelEntitiesSubject.asObservable();
  }

  public override disconnect(): void {
    this.issueLabelEntitiesSubject.complete();
  }
}
