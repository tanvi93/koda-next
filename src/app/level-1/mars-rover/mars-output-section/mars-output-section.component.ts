import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { SuccessModalComponent } from './../../../shared-module/success-modal/success-modal.component';
import { ActivityTrackerService } from './../../../shared-services/activity-tracker.service';

@Component({
  selector: 'app-mars-output-section',
  templateUrl: './mars-output-section.component.html',
  styleUrls: ['./mars-output-section.component.scss']
})
  
  
 /**
   * @name MarsOutputSectionComponent<app-mars-output-section>
   * @description This component will deal mars rover activity in which it accept data provided by input section and then perform animation based on input provided by user.
   * @param contentData its holds entire detail of the page which is passed as an input to its child component.
   * @constructor intiate localData and msgPos variable
   */

  /**
   * @method activityFunction
   * @memberOf MarsOutputSectionComponent
   * @param $event This varaible object contains input data from input section of div which needed to pass to output section to see the respective result.
   * @description this is an event based method which get triggered whenever inputSectionComponent emits data to parent and from parent through view field method this function get trigger inorder to perform the animation based on user input.
   */

   /**
   * @method hideMsgFuncion
   * @memberOf MarsOutputSectionComponent
   * @description this method deals with hiding bubble msg component whenever it is get triggered 
   */
export class MarsOutputSectionComponent implements OnInit {
  @Input() contentData;
  @Output() clearInputFlag = new EventEmitter<boolean>();
  dialogRef: MatDialogRef<SuccessModalComponent>;
  private roverImage: string;
  private topShift: any;
  private leftShift: any;
  private currentLeft: any;
  private currentTop: any;
  private backgroundImage: string;
  private roverSittingImage: string;
  private transitionTime: string;
  private messageCount = 0;
  private message: string;
  private hideMsg: boolean;
  private waterDropletFlag: Array<boolean>;
  private inputValueTracker = { 'left': 0, 'top': 0 };
  private roverStandingHide: boolean;
  private xContent: number;
  private yContent: number;
  private speechCss: any;

  constructor(public dialog: MatDialog, private tracker: ActivityTrackerService) {
    this.speechCss = { position: 'left', width: '20%', autoHideMsg: true, top: '0px', left: '0px' };
  }

  ngOnInit() {
    this.backgroundImage = this.contentData.mapImage;
    this.speechCss.top = this.contentData.initialMsgPos.msgTop;
    this.speechCss.left = this.contentData.initialMsgPos.msgLeft;
    this.speechCss.autoHideMsg = true;
    this.waterDropletFlag = [false, false, false];
    this.roverImage = this.contentData.roverImage[0];
    this.roverSittingImage = this.contentData.roverImage[1];
    this.transitionTime = this.contentData.defaultTransitionTime;
    this.inputValueTracker.left = this.contentData.xInitialValue;
    this.inputValueTracker.top = this.contentData.yInitialValue;
    this.leftShift = this.contentData.xInitialValue * (this.contentData.xTotalArea / this.contentData.noOfXLine) + '%';
    this.topShift = this.contentData.yInitialValue * (this.contentData.yTotalArea / this.contentData.noOfYLine) + '%';
    this.currentLeft = this.contentData.xInitialValue * (this.contentData.xTotalArea / this.contentData.noOfXLine);
    this.currentTop = this.contentData.yInitialValue * (this.contentData.yTotalArea / this.contentData.noOfYLine);
    this.message = this.contentData.errorMsg[0];
    this.roverStandingHide = false;
  }
  hideMsgFunc(flag: boolean) {
    this.speechCss.autoHideMsg = flag;
  }

  clearMsgFunction = () => {
    this.speechCss.autoHideMsg = false;
    this.clearInputFlag.emit(true);
  }



  activityFunction(x: number, y: number) {
    this.xContent = Number(x);
    this.yContent = Number(y);
    this.speechCss.autoHideMsg = true;
    // condition to showing warning msg at proper position
    if (this.inputValueTracker.left > 6) {
      this.speechCss.position = 'right';
      this.speechCss.top = (this.inputValueTracker.top * this.contentData.yPerUnitValue)  + '%';
      this.speechCss.left = ((this.inputValueTracker.left) * this.contentData.xPerUnitValue) - 21 + '%';
    } else {
      this.speechCss.position = 'left';
      this.speechCss.top = ((this.inputValueTracker.top) * this.contentData.yPerUnitValue) + '%';
      this.speechCss.left = ((this.inputValueTracker.left) * this.contentData.xPerUnitValue) + 17 + '%';
    }

    if (this.xContent === 0 && this.yContent === 0) {
      this.message = this.contentData.errorMsg[1];
      this.clearMsgFunction();
      return;
    } else if (((this.inputValueTracker.left + Number(this.xContent)) > this.contentData.xHigherLimitValue)
      || ((this.inputValueTracker.left + Number(this.xContent)) < this.contentData.xLowerLimitValue)
      || ((this.inputValueTracker.top - Number(this.yContent)) > this.contentData.yHigherLimitValue)
      || ((this.inputValueTracker.top - Number(this.yContent)) < this.contentData.yLowerLimitValue)) {
      this.message = this.contentData.errorMsg[0];
      this.clearMsgFunction();
      return;
    } else {
      if (this.xContent === undefined) {
        this.xContent = 0;
      }
      if (this.yContent === undefined) {
        this.yContent = 0;
      }

      if (this.yContent === 0) {
        // condition for only x movement
        this.transitionTime = this.contentData.actualTransitionTime;
        this.leftShift = (this.currentLeft + ((this.xContent) * (this.contentData.xTotalArea / this.contentData.noOfXLine))) + '%';
        this.currentLeft = (this.currentLeft + ((this.xContent) * this.contentData.xTotalArea / this.contentData.noOfXLine));
        this.inputValueTracker.left = this.inputValueTracker.left + Number(this.xContent);
        setTimeout(() => {
          this.clearInputFlag.emit(true);
        }, 1000);
        this.checkdropCondition(1010);
      } else if (this.xContent === 0) {
        // condition for only y movement
        this.transitionTime = this.contentData.actualTransitionTime;
        this.topShift = (this.currentTop - ((this.yContent) * this.contentData.yTotalArea / this.contentData.noOfYLine)) + '%';
        this.currentTop = (this.currentTop - ((this.yContent) * this.contentData.yTotalArea / this.contentData.noOfYLine));
        this.inputValueTracker.top = this.inputValueTracker.top - Number(this.yContent);
        setTimeout(() => {
          this.clearInputFlag.emit(true);
        }, 1000);
        this.checkdropCondition(1010);
      } else {
        // condition for x n y movement
        setTimeout(() => {
          this.transitionTime = this.contentData.actualTransitionTime;
          this.leftShift = (this.currentLeft + ((this.xContent) * (this.contentData.xTotalArea / this.contentData.noOfXLine))) + '%';
          this.currentLeft = (this.currentLeft + ((this.xContent) * this.contentData.xTotalArea / this.contentData.noOfXLine));
          this.inputValueTracker.left = this.inputValueTracker.left + Number(this.xContent);
        }, 10);
        setTimeout(() => {
          this.transitionTime = this.contentData.defaultTransitionTime;
        }, 1000);
        setTimeout(() => {
          this.transitionTime = this.contentData.actualTransitionTime;
          this.topShift = (this.currentTop - ((this.yContent) * this.contentData.yTotalArea / this.contentData.noOfYLine)) + '%';
          this.currentTop = (this.currentTop - ((this.yContent) * this.contentData.yTotalArea / this.contentData.noOfYLine));
          this.inputValueTracker.top = this.inputValueTracker.top - Number(this.yContent);
        }, 1010);
        setTimeout(() => {
          this.clearInputFlag.emit(true);
        }, 2010);
        this.checkdropCondition(2020);
      }
    }
  }

  checkdropCondition(n) {
    setTimeout(() => {
      for (let i = 0; i < this.contentData.waterSourceCoordinates.length; i++) {
        if (this.inputValueTracker.left === this.contentData.waterSourceCoordinates[i].left
          && this.inputValueTracker.top === this.contentData.waterSourceCoordinates[i].top
          && !this.waterDropletFlag[i]) {
          this.roverStandingHide = true;
          this.waterDropletFlag[i] = true;
          setTimeout(() => {
            this.roverStandingHide = false;
          }, 200);
          setTimeout(() => {
            ++this.messageCount;
            this.checkSuccessCondition(this.messageCount);
          }, 1210);
        }
      }
    }, n);
  }

  checkSuccessCondition(count) {
    if (count === 3) {
      this.speechCss.autoHideMsg = true;
      this.dialogRef = this.dialog.open(SuccessModalComponent, {
        hasBackdrop: true,
        disableClose: true,
        panelClass: 'app-full-bleed-dialog'
      });
      this.dialogRef.componentInstance.modalData = this.contentData;
      this.tracker.setContent('coordinates', 2);
    }
  }
}