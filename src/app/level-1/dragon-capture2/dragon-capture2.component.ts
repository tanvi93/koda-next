import { Component, ViewChild } from '@angular/core';
import { DragonOutputSectionComponent } from './dragon-output-section/dragon-output-section.component';
import { dragonCaptureContent2 } from './../../data/dragonCaptureActivities2'
@Component({
  selector: 'app-dragon-capture2',
  templateUrl: './dragon-capture2.component.html',
  styleUrls: ['./dragon-capture2.component.scss']
})
export class DragonCapture2Component {
  private contentData = dragonCaptureContent2;
  @ViewChild(DragonOutputSectionComponent)
  private dragonoutput: DragonOutputSectionComponent;
  private clearMethodCount: number;
  private clearDataFlag: boolean;

  constructor() {
    this.clearDataFlag = false;
    this.clearMethodCount = 0;
  }


  receivedInput = ($event) => {
    // this.dragonoutput.activityFunction($event[0], $event[1]);
    $event[0] = '';
    $event[1] = '';
  }

  clearInputText = ($event) => {
    ++this.clearMethodCount;
    if (this.clearMethodCount % 2 === 0) {
      this.clearDataFlag = false;
    } else {
      this.clearDataFlag = true;
    }
  }

  hideMsgData = () => {
    // this.dragonoutput.hideMsgFuncion();
  }

}
