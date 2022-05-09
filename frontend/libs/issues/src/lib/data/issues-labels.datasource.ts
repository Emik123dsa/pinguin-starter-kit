import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { IssueLabelEntities, IssueLabelEntity } from '@pinguin/api';
import { BehaviorSubject } from 'rxjs';

export class IssuesLabelsDataSource extends DataSource<IssueLabelEntity> {
  private readonly labelEntitiesSubject: BehaviorSubject<IssueLabelEntities> =
    new BehaviorSubject<IssueLabelEntity[]>([]);

  public setLabels(value: IssueLabelEntities): void {
    this.labelEntitiesSubject.next(value);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public override connect(collectionViewer: CollectionViewer) {
    return this.labelEntitiesSubject.asObservable();
  }

  public override disconnect(): void {
    this.labelEntitiesSubject.complete();
  }
}
