import { Component, OnInit, ViewChild } from '@angular/core';
import { OutputSectionComponent } from './output-section/output-section.component';
import { foxGrapeContent } from './../../data/foxGrape';

@Component({
  selector: 'app-fox-grape',
  templateUrl: './fox-grape.component.html',
  styleUrls: ['./fox-grape.component.scss']
})
export class FoxGrapeComponent implements OnInit {

  private contentData = foxGrapeContent;
  @ViewChild(OutputSectionComponent)
  private foxoutput: OutputSectionComponent;  
  private clearMethodCount: number;
  private clearDataFlag: boolean;
  constructor() { 
    this.clearDataFlag = false;
    this.clearMethodCount = 0;
  }

  ngOnInit() {
    console.log(foxGrapeContent);
    console.log(this.contentData);
    
  }
   
  receiveInput($event) {
    console.log($event);
    
    this.foxoutput.activityFunction($event[0], $event[1]);
    $event[0] = '';
    $event[1] = '';
  }

  clearInputText($event) {
    ++this.clearMethodCount;
    if (this.clearMethodCount % 2 === 0) {
      this.clearDataFlag = true;
    } else {
      this.clearDataFlag = false;
    }
  }

  receiveMsgStatus($event) {
    if ($event) {
      this.foxoutput.hideMsgFunc($event);
    }
  }
}
