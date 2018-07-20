import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { SuccessModalComponent } from './../../../shared-module/success-modal/success-modal.component';


@Component({
  selector: 'app-dragon-capture-output',
  templateUrl: './dragon-capture-output.component.html',
  styleUrls: ['./dragon-capture-output.component.scss']
})
  
  /**
   * @name DragonCaptureOutputComponent<app-dragon-capture-output>
   * @description This component will deal dragon capture activity1 in which the user have to grab have to find required object inorder to tame the dragon.
   * @param contentData its holds entire detail of the page which is passed as an input from its parent component.
   * @constructor mat dialog is injected which will be triggered when all the task has been performed
   */

  /**
   * @method wrongAttempt
   * @memberOf DragonCaptureOutputComponent
   * @param ev This varaible contain the environment objhect through which appropriate msg at clicked position is been displayed.
   * @description this is an event based method which get triggered whenever user click at wrong coordinate result in providing error msg to user.
   */

  /**
   * @method successfulAttempt
   * @memberOf DragonCaptureOutputComponent
   * @param ev This varaible contain the environment objhect through which appropriate msg at clicked position is been displayed.
   * @description this is an event based method which get triggered whenever user find correct coordinate which will help in capturing dragon and provide appropriate msg accordingly.
   */

  /**
   * @method successCondition
   * @memberOf DragonCaptureOutputComponent
   * @param count This varaible contain count about how much object have been found.
   * @description this method check whether appropriate number of object have been found and its reached amount its waiting then it will trigger success popup.
   */
export class DragonCaptureOutputComponent implements OnInit {
  @Input() contentData;
  @Output() dragonObject = new EventEmitter<number>();
  @Output() inputFlagStatus = new EventEmitter<number>();
  dialogRef: MatDialogRef<SuccessModalComponent>;

  private backgroundImage: string;
  private coordVisibility: boolean;
  private gemOpacity: number;
  private gridEnabled: boolean;
  private message: string;
  private articleTopShift: string[];
  private articleHidden: boolean[];
  private clickableContentFlag: boolean[];
  private speechCss;
 
  constructor(public dialog: MatDialog) { 
    this.speechCss = {autoHideMsg: true, position: 'bottom', width: '20%', textAlign: 'center', top: '0px', left:'0px', fontSize: '1vw'}
  }

  ngOnInit() {
    this.backgroundImage = this.contentData.backgroundImage[0];
    this.gemOpacity = 0;
    this.articleHidden = [true, true, true];
    this.clickableContentFlag = [false, true, true];
    this.gridEnabled = true;
    this.articleTopShift = ['60', '68', '72'];
    this.coordVisibility = true;
    this.message = this.contentData.errorMsg;
  }

  wrongAttempt = (ev) =>{
    this.message = this.contentData.errorMsg;
    if (ev.layerX / ev.target.clientWidth > 0.8 && ev.layerY / ev.target.clientHeight < 0.1) {

      this.speechCss.position = "right";
      this.speechCss.left = (ev.layerX * 0.75) + 'px';
      this.speechCss.top = (ev.layerY) + 'px';
    } else if (ev.layerX / ev.target.clientWidth > 0.8 && ev.layerY / ev.target.clientHeight > 0.9) {

      this.speechCss.position = "right";
      this.speechCss.left = (ev.layerX * 0.75) + 'px';
      this.speechCss.top = '90%';
    } else if (ev.layerY / ev.target.clientHeight < 0.1) {

      this.speechCss.position = "left";
      this.speechCss.left = (ev.layerX) + 'px';
      this.speechCss.top = (ev.layerY) + 'px';
    } else if (ev.layerX / ev.target.clientWidth > 0.8) {

      this.speechCss.position = "right";
      this.speechCss.left = (ev.layerX * 0.73) + 'px';
      this.speechCss.top = (ev.layerY - 20) + 'px';
    } else if (ev.layerY / ev.target.clientHeight > 0.9) {

      this.speechCss.position = "left";
      this.speechCss.left = (ev.layerX) + 'px';
      this.speechCss.top = '90%';
    } else {

      this.speechCss.position = "left";
      this.speechCss.left = (ev.layerX) + 'px';
      this.speechCss.top = (ev.layerY - 20) + 'px';
    }
    setTimeout(() => {
      this.speechCss.autoHideMsg = false;
      this.gridEnabled = false;
    }, 100);
    setTimeout(() => {
      this.speechCss.autoHideMsg = true;
      this.gridEnabled = true;
    }, 3000);
  }

  successfulAttempt = (ev) => {
    this.gridEnabled = false;
    setTimeout(() => {
      this.speechCss.autoHideMsg = false;
    }, 500);
    ev.target.style.display = 'none';
    setTimeout(() => {
      this.articleTopShift[Number(ev.target.id)] = '0';
    }, 100);
    this.speechCss.top = (this.contentData.yGridCoord.indexOf(this.contentData.coordinates[Number(ev.target.id)].y) + 0.5) * this.contentData.yGridPerUnitScale + '%';
    this.speechCss.left = (this.contentData.xGridCoord.indexOf(this.contentData.coordinates[Number(ev.target.id)].x) + 1.5) * this.contentData.xGridPerUnitScale + '%';
    this.speechCss.position = 'left';

    switch (Number(ev.target.id) + 1) {

      case 1: {
        this.articleHidden[Number(ev.target.id)] = false;
        this.message = this.contentData.coordinates[Number(ev.target.id)].message;
        this.dragonObject.emit(Number(ev.target.id));
        setTimeout(() => {
          this.articleHidden[Number(ev.target.id)] = true;
          this.clickableContentFlag[1] = false;
          this.gridEnabled = true;
          this.speechCss.autoHideMsg = true;
          this.coordVisibility = false;
          this.backgroundImage = this.contentData.backgroundImage[1];
          this.inputFlagStatus.emit(Number(ev.target.id));
        }, 3500);
        break;
      }
      case 2: {
        this.articleHidden[Number(ev.target.id)] = false;
        this.message = this.contentData.coordinates[Number(ev.target.id)].message;
        this.dragonObject.emit(Number(ev.target.id));
        setTimeout(() => {
          this.gridEnabled = true;
          this.clickableContentFlag[2] = false;
          this.speechCss.autoHideMsg = true;
          this.articleHidden[Number(ev.target.id)] = true;
          this.inputFlagStatus.emit(Number(ev.target.id));
        }, 5500);
        break;
      }
      case 3: {
        this.articleHidden[Number(ev.target.id)] = false;
        this.message = this.contentData.coordinates[Number(ev.target.id)].message;
        this.dragonObject.emit(Number(ev.target.id));
        setTimeout(() => {
          this.gridEnabled = true;
          this.successCondition();
          this.speechCss.autoHideMsg = true;
          this.articleHidden[Number(ev.target.id)] = true;
          this.inputFlagStatus.emit(Number(ev.target.id));
        }, 3000);
        break;
      }
      default: ;
    }

  }

  successCondition = () => {
      this.gridEnabled = false;
      this.gemOpacity = 1;
      setTimeout(() => {
        this.dialogRef = this.dialog.open(SuccessModalComponent, {
          hasBackdrop: true,
          disableClose: true,
          panelClass: 'app-full-bleed-dialog'
        });
        this.dialogRef.componentInstance.modalData = this.contentData;
      }, 2000);
  }
}

