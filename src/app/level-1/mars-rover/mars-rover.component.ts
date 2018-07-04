import { Component, ViewChild } from '@angular/core';
import { marsContent } from './../../data/marsRover'
import { MarsOutputSectionComponent } from './mars-output-section/mars-output-section.component';
@Component({
  selector: 'app-mars-rover',
  templateUrl: './mars-rover.component.html',
  styleUrls: ['./mars-rover.component.scss']
})
export class MarsRoverComponent {
  private contentData = marsContent;
  @ViewChild(MarsOutputSectionComponent)
  private marsOutput: MarsOutputSectionComponent;
  private clearMethodCount: number;
  private clearDataFlag: boolean;

  constructor() {
    this.clearDataFlag = false;
    this.clearMethodCount = 0;
  }


  receiveInput($event) {
    this.marsOutput.activityFunction($event[0], $event[1]);
    $event[0] = '';
    $event[1] = '';
  }

  clearInputText($event) {
    ++this.clearMethodCount;
    if (this.clearMethodCount % 2 === 0) {
      this.clearDataFlag = false;
    } else {
      this.clearDataFlag = true;
    }
  }

  hideMsgData = () => {
    this.marsOutput.hideMsgFunc(true);
  }
}