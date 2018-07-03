import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { SuccessModalComponent } from './../../../shared-module/success-modal/success-modal.component';
import { assetsLink } from './../../../shared-services/config';

@Component({
  selector: 'app-output-section',
  templateUrl: './output-section.component.html',
  styleUrls: ['./output-section.component.scss']
})
export class OutputSectionComponent implements OnInit {
  @Input() contentData;
  @Input() msgFlag: boolean;
  @Output() clearInputFlag = new EventEmitter<boolean>();
  dialogRef: MatDialogRef<SuccessModalComponent>;

  private grapeImage: string;
  private foxImage: string;
  private topShift: string;
  private leftShift: string;
  private initialTransitionTime: string;
  private transitionTime: string;
  private topShiftRange: Array<string>;
  private message: string;
  private hideMsg: boolean;
  private backgroundImage: string;
  private topGrapeShift: string;
  private grapesTransitionTime: string;
  private success: Boolean;
  private xContent: any;
  private yContent: any;
  private grapeVisible: boolean;
  private foxVisible: boolean;
  private initialIndex: number;
  private successFlag: boolean;
  private localcheckInput: boolean;
  private xInputPresent: boolean;
  private yInputPresent: boolean;
  private localData: any;
  private msgPos = { 'msgLeft': null, 'msgTop': null, 'msgTailTop': null, 'msgTailLeft': null };


  constructor(public dialog: MatDialog) {
    this.success = true;
    this.localcheckInput = false;
    this.localData = JSON.parse(localStorage.getItem('coordinates'));
  }

  ngOnInit() {
    // let foximageCount = 0;
    // const onImageLoad = () => {
    //   ++foximageCount;
    //   if (foximageCount === 5) {
    //   }
    // }
    console.log(this.contentData);
    
    // let foxImageLoad = Object.keys(this.activityData.foxImage).map(key => {
    //   let image = new Image();
    //   image.onload = onImageLoad;
    //   image.src = this.activityData.foxImage[key];
    //   return image;
    // });
    this.xInputPresent = true;
    this.yInputPresent = true;
    this.successFlag = false;
    this.foxVisible = true;
    this.grapeVisible = true;
    this.message = this.contentData.errorMsg[0];
    this.topShift = this.contentData.topShiftRange[0];
    this.initialIndex = 0;
    this.leftShift = this.contentData.initialLeftShiftValue;
    this.grapesTransitionTime = this.contentData.actualTransitionTime;
    this.transitionTime = this.contentData.actualTransitionTime;
    this.topShiftRange = this.contentData.topShiftRange;
    this.foxImage = this.contentData.foxImage[0];
    this.grapeImage = this.contentData.grapeImage;
    this.backgroundImage = this.contentData.backgroundImage;
    this.topGrapeShift = this.contentData.initialTopShiftValue;
    this.msgPos = this.contentData.initialMsgPos;
    this.hideMsg = true;
  }

  hideMsgFunc(flag: boolean) {
    this.hideMsg = flag;
  }

  activityFunction(x: any, y: any) {
    this.xContent = x;
    this.yContent = y;
    this.hideMsg = true;
    let n = 0

    if (String(this.xContent).length === 0 && String(this.yContent).length === 0) {
      this.msgPos.msgLeft = this.contentData.initialMsgLeftValue;
      this.msgPos.msgTop = this.contentData.sideTailMsgTopPosition;
      this.msgPos.msgTailLeft = this.contentData.sideTailMsgTailLeftPositon;
      this.msgPos.msgTailTop = this.contentData.sideTailMsgTailTopPosition;
      this.foxImage = this.contentData.foxImage[0];
      this.message = this.contentData.errorMsg[1];
      setTimeout(() => {
        this.hideMsg = false;
        this.clearInputFlag.emit(true);
      }, 500);
      return;
    } else if ((Number(this.xContent) > this.contentData.xBoundaryCondition) || (Number(this.yContent) > this.contentData.yBoundaryCondition)) {
      this.msgPos.msgLeft = this.contentData.initialMsgLeftValue;
      this.msgPos.msgTop = this.contentData.sideTailMsgTopPosition;
      this.msgPos.msgTailLeft = this.contentData.sideTailMsgTailLeftPositon;
      this.msgPos.msgTailTop = this.contentData.sideTailMsgTailTopPosition;
      this.foxImage = this.contentData.foxImage[0];
      this.message = this.contentData.errorMsg[3];
      setTimeout(() => {
        this.hideMsg = false;
      }, 500);
      setTimeout(() => {
        this.clearInputFlag.emit(true);
        this.hideMsg = true;
      }, 4500);
      return;
    } else if ((Number(this.xContent) < 0) || (Number(this.yContent) < 0)) {
      this.msgPos.msgLeft = this.contentData.initialMsgLeftValue;
      this.msgPos.msgTop = this.contentData.sideTailMsgTopPosition;
      this.msgPos.msgTailLeft = this.contentData.sideTailMsgTailLeftPositon;
      this.msgPos.msgTailTop = this.contentData.sideTailMsgTailTopPosition;
      this.foxImage = this.contentData.foxImage[0];
      this.message = this.contentData.errorMsg[6];
      setTimeout(() => {
        this.clearInputFlag.emit(true);
        this.hideMsg = false;
      }, 500);
      return;
    } else if (String(this.yContent) === '0' && String(this.xContent) === '0') {
      this.msgPos.msgLeft = this.contentData.initialMsgLeftValue;
      this.msgPos.msgTop = this.contentData.initialMsgPos.msgTop;
      this.msgPos.msgTailLeft = this.contentData.initialMsgPos.msgTailLeft;
      this.msgPos.msgTailTop = this.contentData.initialMsgPos.msgTailTop;
      this.foxImage = this.contentData.foxImage[0];
      this.message = this.contentData.errorMsg[0];
      setTimeout(() => {
        this.clearInputFlag.emit(true);
        this.hideMsg = false;
      }, 500);
      return;
    } else {

      if (this.xContent <= 4) {
        this.msgPos.msgLeft = (14 + (this.xContent) * 14) + '%';
        this.msgPos.msgTop = this.contentData.sideTailMsgTopPosition;
        this.msgPos.msgTailLeft = this.contentData.sideTailMsgTailLeftPositon;
        this.msgPos.msgTailTop = this.contentData.sideTailMsgTailTopPosition;
      } else if (this.xContent > 4) {
        this.msgPos.msgLeft = (this.xContent * 14 - 10) + '%';
        this.msgPos.msgTop = this.contentData.downTailMsgTopPosition;
        this.msgPos.msgTailLeft = this.contentData.downTailMsgTailLeftPosition;
        this.msgPos.msgTailTop = this.contentData.downTailMsgTailTopPositon;
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
          this.hideMsg = false;
        }
      }, 4000);
      if (!this.successFlag) {
        setTimeout(() => {
          this.hideMsg = true;
          this.foxImage = this.contentData.foxImage[0];
          this.leftShift = this.contentData.initialLeftShiftValue;
          this.clearInputFlag.emit(true);
        }, 6050 + n);
      }
    }
    // condition to when correct coordinates has been entered
    if (Number(this.xContent) === this.contentData.CorrectCoordinate.xValue &&
      Number(this.yContent) === this.contentData.CorrectCoordinate.yValue) {
      this.successFlag = true;
      setTimeout(() => {
        this.hideMsg = true;
        this.initialIndex = 10;
        this.topGrapeShift = this.contentData.finalGrapeTopShiftPos;
      }, 2540);

      this.localData[0].status.complete.imageStatus = true;
      this.localData[0].status.unlock.imageStatus = !this.localData[0].status.complete.imageStatus;
      this.localData[1].status.unlock.imageStatus = this.localData[0].status.complete.imageStatus;
      this.localData[1].status.lock.imageStatus = !this.localData[0].status.complete.imageStatus;
      localStorage.setItem('coordinates', JSON.stringify(this.localData));

      setTimeout(() => {
        this.hideMsg = true;
        this.dialogRef = this.dialog.open(SuccessModalComponent, {
          hasBackdrop: true,
          disableClose: true,
          panelClass: 'app-full-bleed-dialog'
        });
        this.dialogRef.componentInstance.modalData = this.contentData;

      }, 4040);

      setTimeout(() => {
        this.hideMsg = true;
        this.foxImage = this.contentData.foxImage[4];
        this.leftShift = ((this.xContent) * 14) + '%';
      }, 6050);
    }
  }
}
