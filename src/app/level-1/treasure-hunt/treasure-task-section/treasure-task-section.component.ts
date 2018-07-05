import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-treasure-task-section',
  templateUrl: './treasure-task-section.component.html',
  styleUrls: ['./treasure-task-section.component.scss']
})
export class TreasureTaskSectionComponent implements OnInit, OnChanges {
  @Input() contentData;
  @Input() chestList;
  constructor() { }

  ngOnInit() {
    console.log(this.chestList);
    console.log(this.chestList[0]);
    
  }

  ngOnChanges() {
  }



}
