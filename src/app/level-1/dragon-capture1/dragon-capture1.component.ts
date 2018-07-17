import { Component, OnInit } from '@angular/core';
import { dragonCaptureContent } from './../../data/dragonCaptureActivities'
import { AudioService } from './../../shared-services/audio.service'

@Component({
  selector: 'app-dragon-capture1',
  templateUrl: './dragon-capture1.component.html',
  styleUrls: ['./dragon-capture1.component.scss']
})
  
/**
   * @name DragonCapture1Component<app-dragon-capture1>
   * @description This component will deal dragon capture activity1 in which the user have to grab have to find required object inorder to tame the dragon.
   * @param contentData its holds entire detail of the page which is passed as an input to its child component.
   * @constructor cricket audio is set so that it will keep on running through out the process.
   */

  /**
   * @method displayFlag
   * @memberOf DragonCapture1Component
   * @param $event This varaible contain the index through which the correct flag is been set visible.
   * @description this is an event based method which get triggered whenever user find correct coordinate which will help in capturing dragon.
   */

  /**
   * @method updateTodoList
   * @memberOf DragonCapture1Component
   * @param $event This varaible contain index value which will help in enabling next coordinate.
   * @description this is an event based method which get triggered whenever user find correct coordinate which will help in capturing dragon.
   */
export class DragonCapture1Component implements OnInit {
  private contentData = dragonCaptureContent;
  private question: string;
  private listStatus: boolean[];
  private checkStatus: boolean[];
  private cricketAudio: string[];
  constructor(private audio: AudioService) {
    this.cricketAudio = ['assets/audio/dragon/crickets.wav'];
  }

  ngOnInit() {
    this.question = this.contentData.questionArray[0];
    this.listStatus = [false, true, true];
    this.checkStatus = [true, true, true];
    this.audio.loader(this.cricketAudio);
    this.audio.playForever(0);
  }

  displayFlag = ($event) => {
    this.listStatus[$event + 1] = false;
    if ($event < this.contentData.questionArray.length -1) {
      this.question = this.contentData.questionArray[$event + 1]
    }
  }
  updateTodoList = ($event) => {
    this.checkStatus[$event] = false;
  }
}
