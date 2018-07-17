import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { SuccessModalComponent } from './../../../shared-module/success-modal/success-modal.component';
import { ActivityTrackerService } from './../../../shared-services/activity-tracker.service';
@Component({
  selector: 'app-fox-output-section',
  templateUrl: './fox-output-section.component.html',
  styleUrls: ['./fox-output-section.component.scss']
})
  
 /**
   * @name FoxOutputSectionComponent<app-fox-output-section>
   * @description This component will deal fox grape activity in which it accept data provided by input section and then perform animation based on input provided by user.
   * @param contentData its holds entire detail of the page which is passed as an input to its child component.
   * @constructor intiate clearDataFlag and clearMethodCount variable
   */

  /**
   * @method activityFunction
   * @memberOf FoxOutputSectionComponent
   * @param $event This varaible object contains input data from input section of div which needed to pass to output section to see the respective result.
   * @description this is an event based method which get triggered whenever inputSectionComponent emits data to parent and from parent through view field method this function get trigger inorder to perform the animation based on user input.
   */

   /**
   * @method hideMsgFuncion
   * @memberOf FoxOutputSectionComponent
   * @description this method deals with hiding bubble msg component whenever it is get triggered 
   */
  
 
export class FoxOutputSectionComponent implements OnInit {
  @Input() contentData;
  @Output() clearInputFlag = new EventEmitter<boolean>();
  dialogRef: MatDialogRef<SuccessModalComponent>;

  private foxImage: string;
  private topShift: string;
  private leftShift: string;
  private initialTransitionTime: string;
  private transitionTime: string;
  private topShiftRange: Array<string>;
  private message: string;
  private speechCss: any;
  private topGrapeShift: string;
  private grapesTransitionTime: string;
  private success: Boolean;
  private xContent: any;
  private yContent: any;
  private initialIndex: number;
  private successFlag: boolean;
  private xInputPresent: boolean;
  private yInputPresent: boolean;


  constructor(public dialog: MatDialog, private tracker: ActivityTrackerService) {
    this.success = true;
    this.speechCss = { position: 'left', width: '20%', autoHideMsg: true, top: '0px', left: '0px' };
  }

  ngOnInit() {
    let foximageCount = 0;
    const onImageLoad = () => {
      ++foximageCount;
      if (foximageCount === 5) {
      }
    }
    let foxImageLoad = Object.keys(this.contentData.foxImage).map(key => {
      let image = new Image();
      image.onload = onImageLoad;
      image.src = this.contentData.foxImage[key];
      return image;
    });
    this.xInputPresent = true;
    this.yInputPresent = true;
    this.successFlag = false;
    this.message = this.contentData.errorMsg[0];
    this.topShift = this.contentData.topShiftRange[0];
    this.initialIndex = 0;
    this.leftShift = this.contentData.initialLeftShiftValue;
    this.grapesTransitionTime = this.contentData.actualTransitionTime;
    this.transitionTime = this.contentData.actualTransitionTime;
    this.topShiftRange = this.contentData.topShiftRange;
    this.foxImage = this.contentData.foxImage[0];
    this.topGrapeShift = this.contentData.initialTopShiftValue;
    this.speechCss.autoHideMsg = true;
  }

  hideMsgFuncion = () => {
    this.speechCss.autoHideMsg = true;
  }

  clearMsgFunction = () => {
    this.speechCss.autoHideMsg = false;
    this.clearInputFlag.emit(true);
  }

  activityFunction(x: any, y: any) {
    this.xContent = x;
    this.yContent = y;
    this.speechCss.autoHideMsg = true;
    let n = 0

    this.speechCss.left = this.contentData.initialMsgLeftValue;
    this.speechCss.top = this.contentData.sideTailMsgTopPosition;
    this.speechCss.position = 'left';
    this.foxImage = this.contentData.foxImage[0];
    if (String(this.xContent).length === 0 && String(this.yContent).length === 0) {
      this.message = this.contentData.errorMsg[1];
      setTimeout(() => {
        this.clearMsgFunction();
      }, 500);
      return;
    } else if ((Number(this.xContent) > this.contentData.xBoundaryCondition) || (Number(this.yContent) > this.contentData.yBoundaryCondition)) {
      this.message = this.contentData.errorMsg[3];
      setTimeout(() => {
        this.speechCss.autoHideMsg = false;
      }, 500);
      setTimeout(() => {
        this.clearInputFlag.emit(true);
        this.speechCss.autoHideMsg = true;
      }, 4500);
      return;
    } else if ((Number(this.xContent) < 0) || (Number(this.yContent) < 0)) {
      this.message = this.contentData.errorMsg[6];
      setTimeout(() => {
        this.clearMsgFunction();
      }, 500);
      return;
    } else if (String(this.yContent) === '0' && String(this.xContent) === '0') {
      this.message = this.contentData.errorMsg[0];
      setTimeout(() => {
        this.clearMsgFunction();
      }, 500);
      return;
    } else {

      if (this.xContent <= 4) {
        this.speechCss.left = (16 + (this.xContent) * 14) + '%';
      } else if (this.xContent > 4) {
        this.speechCss.left = (this.xContent * 14 - 10) + '%';
        this.speechCss.top = this.contentData.downTailMsgTopPosition;
        this.speechCss.position = 'bottom';
      }

      if ((this.yContent === '' || this.yContent === '0') && this.xContent !== '0') {
        n = 2000;
        this.message = this.contentData.errorMsg[4];
        this.yInputPresent = false;
        this.xInputPresent = true;
        this.yContent = 0;
      } else if ((this.xContent === '' || this.xContent === '0') && this.yContent !== '0') {
        n = 2000;
        this.message = this.contentData.errorMsg[5];
        this.xContent = 0;
        this.yInputPresent = true;
        this.xInputPresent = false;
      } else {
        this.message = this.contentData.errorMsg[2];
        this.xInputPresent = true;
        this.yInputPresent = true;
      }
      if (this.xInputPresent) {
        this.foxImage = this.contentData.foxImage[1];
      }
      setTimeout(() => {
        this.transitionTime = this.contentData.actualTransitionTime;
        this.leftShift = ((this.xContent) * 14) + '%';
      }, 10);
      setTimeout(() => {
        this.transitionTime = this.contentData.defaultTransitionTime;
      }, 1010);
      setTimeout(() => {
        if (this.yInputPresent) {
          this.foxImage = this.contentData.foxImage[2];
        }
        this.transitionTime = this.contentData.actualTransitionTime;
        this.topShift = this.topShiftRange[this.yContent];
      }, 1520);
      setTimeout(() => {
        if (this.yInputPresent) {
          this.foxImage = this.contentData.foxImage[2];
        }
        this.transitionTime = this.contentData.defaultTransitionTime;
      }, 2530);
      setTimeout(() => {
        if (this.yInputPresent) {
          this.foxImage = this.contentData.foxImage[2];
        }
        this.transitionTime = this.contentData.actualTransitionTime;
        this.topShift = this.topShiftRange[0];
      }, 2540);
      setTimeout(() => {
        this.foxImage = this.contentData.foxImage[3];
        this.transitionTime = this.contentData.defaultTransitionTime;
      }, 3540);
      setTimeout(() => {
        if (!this.successFlag) {
          this.speechCss.autoHideMsg = false;
        }
      }, 4000);
      setTimeout(() => {
        if (!this.successFlag) {
          this.speechCss.autoHideMsg = true;
          this.foxImage = this.contentData.foxImage[0];
          this.leftShift = this.contentData.initialLeftShiftValue;
          this.clearInputFlag.emit(true);
        }
      }, 6050 + n);
    }
    // condition to when correct coordinates has been entered
    if (Number(this.xContent) === this.contentData.CorrectCoordinate.xValue &&
      Number(this.yContent) === this.contentData.CorrectCoordinate.yValue) {
      this.successFlag = true;
      setTimeout(() => {
        this.speechCss.autoHideMsg = true;
        this.initialIndex = 10;
        this.topGrapeShift = this.contentData.finalGrapeTopShiftPos;
      }, 2540);
      this.tracker.setContent('coordinates', 0);
      setTimeout(() => {
        this.speechCss.autoHideMsg = true;
        this.dialogRef = this.dialog.open(SuccessModalComponent, {
          hasBackdrop: true,
          disableClose: true,
          panelClass: 'app-full-bleed-dialog'
        });
        this.dialogRef.componentInstance.modalData = this.contentData;

      }, 4040);

      setTimeout(() => {
        this.speechCss.autoHideMsg = true;
        this.foxImage = this.contentData.foxImage[3];
        this.leftShift = ((this.xContent) * 14) + '%';
      }, 6050);
    }
  }
}