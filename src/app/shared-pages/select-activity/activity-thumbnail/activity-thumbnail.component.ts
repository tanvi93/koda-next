import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-activity-thumbnail',
  templateUrl: './activity-thumbnail.component.html',
  styleUrls: ['./activity-thumbnail.component.scss']
})
export class ActivityThumbnailComponent implements OnInit {
  @Input() activityContent;
  @Input() pageId;

  private activityList;
  private mainBackgroundColor: string;
  private captionFontColor: string;
  private captionBackgroundColor: string;

  constructor() {
    this.mainBackgroundColor = '#231f2e';
    this.captionFontColor = '#ffe75e';
    this.captionBackgroundColor = '#403c49';
  }

  ngOnInit() {
    let status = localStorage.getItem(this.pageId);
    if (status === null) {
      localStorage.setItem(this.pageId, JSON.stringify(this.activityContent));
      this.activityList = this.activityContent;
    } else {
      this.activityList = JSON.parse(status);
    }
  }

}
