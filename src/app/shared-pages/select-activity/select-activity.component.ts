import { Component, OnInit } from '@angular/core';
import { selectActivityContent } from './../../data/selectActivities';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-select-activity',
  templateUrl: './select-activity.component.html',
  styleUrls: ['./select-activity.component.scss']
})
export class SelectActivityComponent implements OnInit {

  private activityContent;
  private pageId: string;

  constructor(private route: ActivatedRoute) { }
  
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.pageId = params.pageId;
      this.activityContent = selectActivityContent[params.pageId];
    });
  }

}
