import { Subject } from 'rxjs';

export class WebWorkerSubject extends Subject<unknown> {
  private connection: any;

  public connect(): void {
    void 0;
  }
}
