import { Component, OnInit } from '@angular/core';
import { dragonCaptureContent } from './../../data/dragonCaptureActivities'
@Component({
  selector: 'app-dragon-capture2',
  templateUrl: './dragon-capture2.component.html',
  styleUrls: ['./dragon-capture2.component.scss']
})
export class DragonCapture2Component implements OnInit {
  private contentData = dragonCaptureContent;
  
  constructor() { }

  ngOnInit() {
  }

}
