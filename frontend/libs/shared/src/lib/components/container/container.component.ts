/* eslint-disable @angular-eslint/no-host-metadata-property */
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';

import { Platform } from '@angular/cdk/platform';
import { StringUtils } from '@pinguin/utils';

@Component({
  selector: 'pinguin-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  host: {
    'class': 'pinguin-container',
    '[attr.id]': 'id',
    '[class.pinguin-container-server]': 'isServer',
  },

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContainerComponent {
  public static nextUniqueId = 0;

  /**
   * Determines whether server is.
   */
  public readonly isServer!: boolean;

  /**
   * Container id of container component.
   */
  private uniqueId = StringUtils.format(
    'pinguin-container-%s',
    ContainerComponent.nextUniqueId++,
  );

  @Input()
  public set id(value: string) {
    this.containerId = value || this.uniqueId;
  }
  public get id() {
    return this.containerId;
  }
  private containerId!: string;

  /**
   * Constructs an instance of ContainerComponent.
   *
   * @param  {Platform} _platform
   * @memberof ContainerComponent
   */
  public constructor(public readonly platform: Platform) {
    this.isServer = !platform.isBrowser;
  }
}
