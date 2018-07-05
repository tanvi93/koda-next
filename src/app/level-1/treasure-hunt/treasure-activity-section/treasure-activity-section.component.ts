import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { SuccessModalComponent } from './../../../shared-module/success-modal/success-modal.component';
@Component({
  selector: 'app-treasure-activity-section',
  templateUrl: './treasure-activity-section.component.html',
  styleUrls: ['./treasure-activity-section.component.scss']
})
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
  private hideMsg: boolean;
  private counter: number;
  private taskList: object;
  private leftPos: string;
  private topPos: string;
  private hintCounter: number;
  private hiddenTreasureFlag: boolean[];
  private treasureMargin: number[];
  private localData: any;
  private success: boolean;
  private msgPos = { 'msgLeft': null, 'msgTop': null, 'msgTailTop': null, 'msgTailLeft': null };
  
  constructor(public dialog: MatDialog) { 
    this.success = true;
    this.hintCounter = 0;
    this.hiddenTreasureFlag = [true, true, true];
    this.treasureMargin = [75, 75, 75];
    this.localData = JSON.parse(localStorage.getItem('coordinates'));
  }

  ngOnInit() {
    this.hideMsg = true;
    this.counter = 0;
    this.msgPos = this.contentData.initialMsgPos;
    this.message = this.contentData.errorMsg[0];
    this.taskList = this.contentData.taskCoordinates;
    this.treasureMargin = [75, 75, 75];
    this.normalizeXValue = this.contentData.normalizeXValue;
    this.normalizeYValue = this.contentData.normalizeYValue;
    this.xGridPerUnitScale = this.contentData.totalEffectXArea / this.contentData.xScaleValue;
    this.yGridPerUnitScale = this.contentData.totalEffectYArea / this.contentData.yScaleValue;
    this.hiddenTreasureFlag = [true, true, true];
  }

  faildedAttemptFunction = (event) => {
    ++this.hintCounter;
    if (this.hintCounter === 4) {
      this.hintActivate.emit(false);
    }
    this.showMsgFunction();
    this.leftPos = (event.layerX - (this.pirateWidth / 2)) + 'px';
    this.topPos = (event.layerY - (this.pirateHeight / 2)) + 'px';
    this.message = this.contentData.errorMsg[0];
    this.msgPos.msgTop = (event.layerY - (this.pirateHeight * 1.2)) + 'px';
    this.msgPos.msgLeft = (event.layerX - (this.pirateWidth * 0.8)) + 'px';
    this.msgPos.msgTailTop = '68%';
    this.msgPos.msgTailLeft = '75%';

    // top-left-edge condition
    if (((event.layerX - (this.pirateWidth / 2)) < 10) && ((event.layerY - (this.pirateHeight / 2)) < 0)) {
      this.topPos = '0px';
      this.leftPos = '5px';
      this.msgPos.msgLeft = '14%';
      this.msgPos.msgTop = this.topPos;
      this.msgPos.msgTailLeft = '8%';
      this.msgPos.msgTailTop = '30%';
      return;
    }
    // top-right-edge condition
    if (((event.layerX + (this.pirateWidth / 2)) > event.target.clientWidth)
      && ((event.layerY - (this.pirateHeight / 2)) < 0)) {
      this.topPos = '0px';
      this.leftPos = (event.target.clientWidth - this.pirateWidth) + 'px';
      this.msgPos.msgLeft = (event.target.clientWidth - this.pirateWidth * 2.2) + 'px';
      this.msgPos.msgTop = this.topPos;
      this.msgPos.msgTailLeft = '100%';
      this.msgPos.msgTailTop = '30%';
      return;
    }
    // top condition
    if (((event.layerY - (this.pirateHeight / 2)) < 0)) {
      this.topPos = '0px';
      this.msgPos.msgTop = this.topPos;
      this.msgPos.msgTailTop = '30%';
      if (event.layerX / event.target.clientWidth < 0.75) {
        this.msgPos.msgTailLeft = '8%';
        this.msgPos.msgLeft = (event.layerX + (this.pirateWidth / 2)) + 'px';
      } else {
        this.msgPos.msgTailLeft = '100%';
        this.msgPos.msgLeft = (event.layerX - (this.pirateWidth * 1.7)) + 'px';
      }
      return;
    }

    // bottom-left-edge condition
    if (((event.layerX - (this.pirateWidth / 2)) < 20)
      && (event.layerY + (this.pirateHeight / 2)) > event.target.clientHeight) {
      this.leftPos = '10px';
      this.topPos = (event.target.clientHeight - (this.pirateHeight)) + 'px';
      this.msgPos.msgLeft = (this.pirateWidth) + 'px';
      this.msgPos.msgTop = this.topPos;
      this.msgPos.msgTailLeft = '8%';
      this.msgPos.msgTailTop = '30%';
      return;
    }

    // bottom-right-edge condition
    if (((event.layerX + (this.pirateWidth / 2)) > event.target.clientWidth)
      && (event.layerY + (this.pirateHeight / 2)) > event.target.clientHeight) {
      this.topPos = (event.target.clientHeight - (this.pirateHeight)) + 'px';
      this.leftPos = (event.layerX - (this.pirateWidth)) + 'px';
      this.msgPos.msgLeft = (event.target.clientWidth - this.pirateWidth * 2.2) + 'px';
      this.msgPos.msgTop = this.topPos;
      this.msgPos.msgTailLeft = '100%';
      this.msgPos.msgTailTop = '30%';
      return;
    }

    // bottom condition
    if ((event.layerY + (this.pirateHeight / 2)) > event.target.clientHeight) {
      this.topPos = (event.target.clientHeight - (this.pirateHeight)) + 'px';
      this.msgPos.msgTop = (event.target.clientHeight - (this.pirateHeight * 1.7)) + 'px';
    }

    // left position condition
    if ((event.layerX - (this.pirateWidth / 2)) < 10) {
      this.leftPos = '0px'
      this.msgPos.msgLeft = (this.pirateWidth * 1) + 'px';
      this.msgPos.msgTop = this.topPos;
      this.msgPos.msgTailLeft = '8%';
      this.msgPos.msgTailTop = '30%';
    }

    // right position condition
    if ((event.layerX + (this.pirateWidth / 2)) > event.target.clientWidth) {
      this.leftPos = (event.target.clientWidth - (this.pirateWidth)) + 'px';
      this.msgPos.msgLeft = (event.target.clientWidth - this.pirateWidth * 2.2) + 'px';
      this.msgPos.msgTop = this.topPos;
      this.msgPos.msgTailLeft = '100%';
      this.msgPos.msgTailTop = '30%';
    }

    if (event.layerY / event.target.clientHeight < 0.3) {
      this.msgPos.msgTop = this.topPos;
      this.msgPos.msgTailTop = '30%';
      if (event.layerX / event.target.clientWidth < 0.75) {
        this.msgPos.msgTailLeft = '8%';
        this.msgPos.msgLeft = (event.layerX + (this.pirateWidth / 2)) + 'px';
      } else {
        this.msgPos.msgTailLeft = '100%';
        this.msgPos.msgLeft = (event.layerX - (this.pirateWidth * 1.7)) + 'px';
      }
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
      this.localData[1].status.complete.imageStatus = true;
      this.localData[1].status.unlock.imageStatus = !this.localData[1].status.complete.imageStatus;
      this.localData[2].status.lock.imageStatus = !this.localData[1].status.complete.imageStatus;
      this.localData[2].status.unlock.imageStatus = this.localData[1].status.complete.imageStatus;
      localStorage.setItem('coordinates', JSON.stringify(this.localData));
    }
  }

  showMsgFunction = () => {
    this.hideMsg = true;
    setTimeout(() => {
      this.hideMsg = false;
    }, 50);
  }


  piratePosFunction = (index) => {
    switch (index) {
      case 0: {
        this.leftPos = '69%';
        this.topPos = '50%';
        this.msgPos.msgTop = '30%';
        this.msgPos.msgLeft = '64%';
        this.msgPos.msgTailTop = '68%';
        this.msgPos.msgTailLeft = '75%';
        break;
      }
      case 1: {
        this.leftPos = '75%';
        this.topPos = '22%';
        this.msgPos.msgTop = '1%';
        this.msgPos.msgLeft = '70%';
        this.msgPos.msgTailTop = '68%';
        this.msgPos.msgTailLeft = '75%';
        break;
      }
      case 2: {
        this.leftPos = '25%';
        this.topPos = '0%';
        this.msgPos.msgTop = '1%';
        this.msgPos.msgLeft = '39%';
        this.msgPos.msgTailTop = '25%';
        this.msgPos.msgTailLeft = '8%';
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
