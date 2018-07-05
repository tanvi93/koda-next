import { Component, ViewChild } from '@angular/core';
import { DragonOutputSectionComponent } from './dragon-output-section/dragon-output-section.component';
import { dragonCaptureContent2 } from './../../data/dragonCaptureActivities2'


@Component({
  selector: 'app-dragon-capture2',
  templateUrl: './dragon-capture2.component.html',
  styleUrls: ['./dragon-capture2.component.scss']
})

/**
   * @name DragonCapture2Component<app-dragon-capture2>
   * @description This component will deal mars rover activity2 in which the user have to grab a water sample for the research purpose.
   * @param contentData its holds entire detail of the page which is passed as an input to its child component.
   * @constructor intiate clearDataFlag and clearMethodCount variable
   */

  /**
   * @method receivedInput
   * @memberOf DragonCapture2Component
   * @param $event This varaible object contains input data from input section of div which needed to pass to output section to see the respective result.
   * @description this is an event based method which get triggered whenever InputCoordinateComponent emits data .
   */

  /**
   * @method clearInputText
   * @memberOf DragonCapture2Component
   * @param $event This varaible contain boolean value.
   * @description this is an event based method which get triggered whenever DragonOutputSectionComponent emit that data indicating that all the animation part get completed from their side.
   */
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
    this.dragonoutput.activityFunction($event[0], $event[1]);
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
    this.dragonoutput.hideMsgFunc(true);
  }

}
