import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-activity',
  templateUrl: './select-activity.component.html',
  styleUrls: ['./select-activity.component.scss']
})
export class SelectActivityComponent implements OnInit {

  // private headerBgColor : string;
  // private mascotBgColor : string;
  // private headerMascotImage : string;
  // private headerContent : string;

  private grapeAct : string;
  private trasureHuntBg : string;
  private marsRoverBg : string;
  private lockImg : string;
  

  constructor() {
    this.grapeAct = "/assets/images/activities/fox_and_grapes/setting_reference.jpg";
    this.trasureHuntBg = "/assets/images/activities/treasure_hunt/island-bg.jpg";
    this.marsRoverBg =  "/assets/images/activities/mars_rover/mars_rover_bg-new.png";
    this.lockImg = "/assets/images/lock_icon.png"
   }

  ngOnInit() {
  }

}
