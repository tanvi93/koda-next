import { Component, OnInit } from '@angular/core';
import { dragonCaptureContent } from './../../data/dragonCaptureActivities'

@Component({
  selector: 'app-dragon-capture1',
  templateUrl: './dragon-capture1.component.html',
  styleUrls: ['./dragon-capture1.component.scss']
})
export class DragonCapture1Component implements OnInit {
  private contentData = dragonCaptureContent;
  private question: string;
  private listStatus: boolean[];
  private checkStatus: boolean[];
  constructor() { }

  ngOnInit() {
    this.question = this.contentData.questionArray[0];
    this.listStatus = [false, true, true];
    this.checkStatus = [true, true, true];
  }

  updateTodoList = ($event) => {
    console.log($event);
  }
}
