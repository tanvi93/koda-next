import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-treasure-activity-section',
  templateUrl: './treasure-activity-section.component.html',
  styleUrls: ['./treasure-activity-section.component.scss']
})
export class TreasureActivitySectionComponent implements OnInit {
  @Input() contentData;
  private backgroundImage;
  constructor() { }

  ngOnInit() {
    this.backgroundImage = this.contentData.backgroundImage;
  }

}
