import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { SuccessModalComponent } from './../../../shared-module/success-modal/success-modal.component';
import { ActivityTrackerService } from './../../../shared-services/activity-tracker.service';

@Component({
  selector: 'app-treasure-activity-section',
  templateUrl: './treasure-activity-section.component.html',
  styleUrls: ['./treasure-activity-section.component.scss']
})
  
/**
   * @name TreasureActivitySectionComponentapp-treasure-activity-section>
   * @description This component will deal fox grape activity in which it accept data provided by input section and then perform animation based on input provided by user.
   * @param contentData its holds entire detail of the page which is passed as an input to its child component.
   * @constructor mat dialog is injected.
   */

  /**
   * @method faildedAttemptFunction
   * @memberOf TreasureActivitySectionComponent
   * @param $event This varaible object contains its environment data which is use to get its position which will be use to set position of the dialog.
   * @description this is an event based method which get triggered whenever hint icon of the page is clicked, which result in popup of hint dialog box contains hint to perform the task.
   */

   /**
   * @method firstClickedFunction
   * @memberOf TreasureActivitySectionComponent
   * @description this method is an event based method which triggered whenever correct coordinate is pressed result in showing of treasure.
   */

  /**
   * @method repeatedClickedFunction
   * @memberOf TreasureActivitySectionComponent
   * @description this method is an event based method which triggered whenever correct coordinate is pressed repeated which is already been found.
   */

  /**
   * @method successPopup
   * @memberOf TreasureActivitySectionComponent
   * @description this method deals with validating whether all the teasure has been found or not and provide msg or popup accordingly.
   */

  /**
   * @method showMsgFunction
   * @memberOf TreasureActivitySectionComponent
   * @description this method deals with triggering of msg bubble based on user click input
   */

  /**
   * @method piratePosFunction
   * @memberOf TreasureActivitySectionComponent
   * @description this method deals position the pirate and its respective bubble speech based on which treasure is been triggered 
   */

  /**
   * @method getPirateDetail
   * @memberOf TreasureActivitySectionComponent
   * @param event This variable object contain environment variable which will help in finding pirate height and width.
   * @description this method deals with retreiving the height and width of the pirates which will be helpful in positioning of pirates and speech bubble based on user activity.
   */

export class TreasureActivitySectionComponent implements OnInit {
  dialogRef: MatDialogRef<SuccessModalComponent>;

  @Input() contentData;
  @Output() chestVisibleFlag = new EventEmitter<number>();
  @Output() hintActivate = new EventEmitter<boolean>();

  private pirateHeight: number;
  private pirateWidth: number;
  private normalizeXValue: number;
  private normalizeYValue: number;
  private xGridPerUnitScale: number;
  private yGridPerUnitScale: number;
  private checklist = [false, false, false];
  private message: string;
  private counter: number;
  private taskList: object;
  private leftPos: string;
  private topPos: string;
  private hintCounter: number;
  private hiddenTreasureFlag: boolean[];
  private treasureMargin: number[];
  private success: boolean;
  private speechCss: any;
  
  constructor(public dialog: MatDialog, private tracker: ActivityTrackerService) { 
    this.success = true;
    this.hintCounter = 0;
    this.speechCss = { position: 'bottom', top: '0px', left: '0px', autoHideMsg: true, width: '18%'};
    this.hiddenTreasureFlag = [true, true, true];
    this.treasureMargin = [75, 75, 75];
  }

  ngOnInit() {
    this.speechCss.autoHideMsg = true;
    this.counter = 0;
    this.speechCss.top = this.contentData.initialMsgPos.msgTop;
    this.speechCss.left = this.contentData.initialMsgPos.msgLeft;
    this.message = this.contentData.errorMsg[0];
    this.taskList = this.contentData.taskCoordinates;
    this.treasureMargin = [75, 75, 75];
    this.normalizeXValue = this.contentData.normalizeXValue;
    this.normalizeYValue = this.contentData.normalizeYValue;
    this.xGridPerUnitScale = this.contentData.totalEffectXArea / this.contentData.xScaleValue;
    this.yGridPerUnitScale = this.contentData.totalEffectYArea / this.contentData.yScaleValue;
    this.hiddenTreasureFlag = [true, true, true];
  }
  
  failedAttemptFunction = (event) => {
    ++this.hintCounter;
    if (this.hintCounter === 4) {
      this.hintActivate.emit(false);
    }
    this.showMsgFunction();
    this.leftPos = (event.layerX - (this.pirateWidth / 2)) + 'px';
    this.topPos = (event.layerY - (this.pirateHeight / 2)) + 'px';
    this.message = this.contentData.errorMsg[0];
    this.speechCss.top = (event.layerY - (this.pirateHeight * 1.4)) + 'px';
    this.speechCss.left = (event.layerX - (this.pirateWidth * 0.8)) + 'px';
    this.speechCss.position = 'bottom';
    

    // top-left-edge condition
    if (((event.layerX - (this.pirateWidth / 2)) < 10) && ((event.layerY - (this.pirateHeight / 2)) < 0)) {
      this.topPos = '0px';
      this.leftPos = '5px';
      this.speechCss.left = '14%';
      this.speechCss.top = this.topPos;
      this.speechCss.position = 'left';
      return;
    }
    // top-right-edge condition
    if (((event.layerX + (this.pirateWidth / 2)) > event.target.clientWidth)
      && ((event.layerY - (this.pirateHeight / 2)) < 0)) {
      this.topPos = '0px';
      this.leftPos = (event.target.clientWidth - this.pirateWidth) + 'px';
      this.speechCss.left = (event.target.clientWidth - this.pirateWidth * 2.2) + 'px';
      this.speechCss.top = this.topPos;
      this.speechCss.position = 'right';
      return;
    }
    // top condition
    if (((event.layerY - (this.pirateHeight / 2)) < 0)) {
      this.topPos = '0px';
      this.speechCss.top = this.topPos;
      if (event.layerX / event.target.clientWidth < 0.75) {
        this.speechCss.position = 'left';
        this.speechCss.left = (event.layerX + (this.pirateWidth / 2)) + 'px';
      } else {
        this.speechCss.position = 'right';
        this.speechCss.left = (event.layerX - (this.pirateWidth * 1.7)) + 'px';
      }
      return;
    }

    // bottom-left-edge condition
    if (((event.layerX - (this.pirateWidth / 2)) < 20)
      && (event.layerY + (this.pirateHeight / 2)) > event.target.clientHeight) {
      this.leftPos = '10px';
      this.topPos = (event.target.clientHeight - (this.pirateHeight)) + 'px';
      this.speechCss.left = (this.pirateWidth) + 'px';
      this.speechCss.top = this.topPos;
      this.speechCss.position = 'left';
      return;
    }

    // bottom-right-edge condition
    if (((event.layerX + (this.pirateWidth / 2)) > event.target.clientWidth)
      && (event.layerY + (this.pirateHeight / 2)) > event.target.clientHeight) {
      this.topPos = (event.target.clientHeight - (this.pirateHeight)) + 'px';
      this.leftPos = (event.layerX - (this.pirateWidth)) + 'px';
      this.speechCss.left = (event.target.clientWidth - this.pirateWidth * 2.2) + 'px';
      this.speechCss.top = this.topPos;
      this.speechCss.position = 'right';
      return;
    }

    // bottom condition
    if ((event.layerY + (this.pirateHeight / 2)) > event.target.clientHeight) {
      this.topPos = (event.target.clientHeight - (this.pirateHeight)) + 'px';
      this.speechCss.top = (event.target.clientHeight - (this.pirateHeight * 1.9)) + 'px';
    }

    // left position condition
    if ((event.layerX - (this.pirateWidth / 2)) < 10) {
      this.leftPos = '0px'
      this.speechCss.left = (this.pirateWidth * 1) + 'px';
      this.speechCss.top = this.topPos;
      this.speechCss.position = 'left';
    }

    // right position condition
    if ((event.layerX + (this.pirateWidth / 2)) > event.target.clientWidth) {
      this.leftPos = (event.target.clientWidth - (this.pirateWidth)) + 'px';
      this.speechCss.left = (event.target.clientWidth - this.pirateWidth * 2.2) + 'px';
      this.speechCss.top = this.topPos;
      this.speechCss.position = 'right';
    }

    if (event.layerY / event.target.clientHeight < 0.3) {
      this.speechCss.top = this.topPos;
      if (event.layerX / event.target.clientWidth < 0.75) {
        this.speechCss.position = 'left';
        this.speechCss.left = (event.layerX + (this.pirateWidth / 2)) + 'px';
      } else {
        this.speechCss.position = 'right';
        this.speechCss.left = (event.layerX - (this.pirateWidth * 1.7)) + 'px';
      }
    }
    if (this.speechCss.top[0] === '-') {
      this.speechCss.top = '0px';
    }
    if (this.speechCss.left[0] === '-') {
      this.speechCss.left = '15px';
    }
  }



  firstClickedFunction = (index) => {
    this.hintCounter = 0;
    this.showMsgFunction()
    setTimeout(() => {
      this.treasureMargin[index] = 0;
    }, 100);
    ++this.counter;
    this.hiddenTreasureFlag[index] = false;
    this.message = this.contentData.treasureChestSuccess[this.counter - 1];
    this.chestVisibleFlag.emit(index);    
    this.piratePosFunction(index);
    this.successPopup(this.counter);
  }
  
  
  repeatedClickedFunction = (index) => {
    this.hintCounter = 0;
    this.showMsgFunction()
    this.message = this.contentData.treasureChestVisited;
    this.piratePosFunction(index);
  }
  
  successPopup(data) {
    if (data === 3) {
      setTimeout(() => {
        this.dialogRef = this.dialog.open(SuccessModalComponent, {
          hasBackdrop: true,
          disableClose: true,
          panelClass: 'app-full-bleed-dialog'
        });
        this.dialogRef.componentInstance.modalData = this.contentData;
      }, 2500);
      this.tracker.setContent('coordinates', 1);
    }
  }

  showMsgFunction = () => {
    this.speechCss.autoHideMsg = true;
    setTimeout(() => {
      this.speechCss.autoHideMsg = false;
    }, 50);
  }


  piratePosFunction = (index) => {
    switch (index) {
      case 0: {
        this.leftPos = '69%';
        this.topPos = '50%';
        this.speechCss.top = '30%';
        this.speechCss.left = '64%';
        this.speechCss.position = 'bottom';
        break;
      }
      case 1: {
        this.leftPos = '75%';
        this.topPos = '22%';
        this.speechCss.top = '0%';
        this.speechCss.left = '70%';
        this.speechCss.position = 'bottom';
        break;
      }
      case 2: {
        this.leftPos = '25%';
        this.topPos = '0%';
        this.speechCss.top = '0%';
        this.speechCss.left = '40%';
        this.speechCss.position = 'left';
        break;
      }
      default: ;
    }
  }

  getPirateDetail = (event) => {
    this.pirateHeight = event.target.height;
    this.pirateWidth = event.target.width;
  }
}
