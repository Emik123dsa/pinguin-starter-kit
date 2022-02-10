import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'pinguin-dashboard-layout',
  exportAs: 'pinguinDashboardLayout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss'],
  host: {
    'class': 'pinguin-dashboard-layout',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardLayoutComponent implements OnInit {
  // constructor() { }

  ngOnInit(): void {
    console.log('init');
  }
}
