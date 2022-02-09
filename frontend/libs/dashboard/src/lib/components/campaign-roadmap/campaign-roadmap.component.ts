import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pinguin-campaign-roadmap',
  templateUrl: './campaign-roadmap.component.html',
  styleUrls: ['./campaign-roadmap.component.scss'],
})
export class CampaignRoadmapComponent implements OnInit {
  // constructor() {}

  ngOnInit(): void {
    console.log('But if I wait for the direction, will time pass me by?');
  }
}
