import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {
    this.mainBackgroundColor = '#231f2e';
    this.captionFontColor = '#ffe75e';
    this.captionBackgroundColor = '#403c49';
  }

  ngOnInit() {
    console.log(this.activityContent);
    let status = localStorage.getItem(this.pageId);
    if (status === null) {
      localStorage.setItem(this.pageId, JSON.stringify(this.activityContent));
      this.activityList = this.activityContent;
    } else {
      this.activityList = JSON.parse(status);
    }
  }

  goToActivity(activity) {
    if (activity.status.unlock.imageStatus) {
      this.router.navigate([activity.name]);
    }
  }

}
