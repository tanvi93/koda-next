import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { SuccessModalComponent } from './../../../shared-module/success-modal/success-modal.component';
import { AudioService } from './../../../shared-services/audio.service'

@Component({
  selector: 'app-dragon-output-section',
  templateUrl: './dragon-output-section.component.html',
  styleUrls: ['./dragon-output-section.component.scss']
})
  
/**
   * @name DragonOutputSectionComponent<app-dragon-output-section>
   * @description This component will deal dragon rover activity2 in which it accept data provided by input section and then perform animation based on input provided by user.
   * @param contentData its holds entire detail of the page which is passed as an input to its child component.
   * @constructor intiate localData and msgPos variable
   */

  /**
   * @method activityFunction
   * @memberOf DragonOutputSectionComponent
   * @param $event This varaible object contains input data from input section of div which needed to pass to output section to see the respective result.
   * @description this is an event based method which get triggered whenever inputSectionComponent emits data to parent and from parent through view field method this function get trigger inorder to perform the animation based on user input.
   */

   /**
   * @method hideMsgFuncion
   * @memberOf DragonOutputSectionComponent
   * @description this method deals with hiding bubble msg component whenever it is get triggered 
   */
export class DragonOutputSectionComponent implements OnInit {
  @Input() contentData;
  @Output() clearInputFlag = new EventEmitter<boolean>();

  dialogRef: MatDialogRef<SuccessModalComponent>;
  private backgroundImage: string;
  private message: string;
  private counter: number;
  private topShift: any;
  private leftShift: any;
  private currentLeft: any;
  private currentTop: any;
  private transitionTime: string;
  private dragonTransitionTime: string;
  private gemStoneImage: Array<string>;
  private flaskVisible: boolean;
  private dragonTopShift: number;
  private dragonLeftShift: number;
  private inputValueTracker = { 'left': -2, 'top': 0 };
  private xContent: number;
  private yContent: number;
  private dragAudio: string[];
  private speechCss: any;

  constructor(public dialog: MatDialog, private audio: AudioService) {
    this.speechCss = { autoHideMsg: true, position: 'bottom', width: '20%' };  
    this.gemStoneImage = ['', '', ''];
    this.dragAudio = ['assets/audio/dragon/dragons-roar-trim.mp3'];
  }
  ngOnInit() {
    this.audio.loader(this.dragAudio);
    let gemsImageCount = 0;
    const onImageLoad = () => {
      ++gemsImageCount;
      if (gemsImageCount === 2) {
      }
    }

    let stoneImageLoad = Object.keys(this.contentData.gemsImage).map(key => {
      let image = new Image();
      image.onload = onImageLoad;
      image.src = this.contentData.gemsImage[key];
      return image;
    });
    
    this.speechCss.autoHideMsg = true;
    this.flaskVisible = false;
    this.leftShift = this.contentData.xInitialValue * this.contentData.xGridPerUnitScale;
    this.topShift = this.contentData.yInitialValue * this.contentData.yGridPerUnitScale;
    this.currentLeft = this.leftShift;
    this.currentTop = this.topShift;
    this.transitionTime = this.dragonTransitionTime = this.contentData.defaultTransitionTime;
    this.gemStoneImage[0] = this.gemStoneImage[1] = this.gemStoneImage[2] = this.contentData.gemsImage[0];
    this.message = this.contentData.errorMsg[0];
    this.backgroundImage = this.contentData.backgroundImage;
    this.dragonLeftShift = 0,
    this.dragonTopShift = 70
  }

  ngOnChanges() {

  }

  hideMsgFunc(flag: boolean) {
    this.speechCss.autoHideMsg = flag;
  }

  activityFunction(x: number, y: number) {
    this.speechCss.autoHideMsg = true;
    this.xContent = Number(x);
    this.yContent = Number(y);

    // condition to showing warning msg at proper position
    if (this.inputValueTracker.left > 5) {
      this.speechCss.position = 'right';
    } else {
      this.speechCss.position = 'left';
    }
    this.speechPosition(this.speechCss.position);



    if (this.xContent === 0 && this.yContent === 0) {
      this.message = this.contentData.errorMsg[1];
      this.clearMsgFunction();
      return;
    } else if ((String(this.xContent).length === 0 && String(this.yContent).length === 0)) {
      this.message = this.contentData.errorMsg[0];
      this.clearMsgFunction();
      return;
    } else if ((this.contentData.dragonProximityCoord.x.indexOf(this.inputValueTracker.left + Number(this.xContent)) !== -1)
      && (this.contentData.dragonProximityCoord.y.indexOf(this.inputValueTracker.top + Number(this.yContent)) !== -1)) {
      this.message = this.contentData.errorMsg[5];
      this.clearMsgFunction();
      return;
    } else if (((this.inputValueTracker.left + Number(this.xContent)) > this.contentData.xHigherLimitValue)
      || ((this.inputValueTracker.left + Number(this.xContent)) < this.contentData.xLowerLimitValue)
      || ((this.inputValueTracker.top + Number(this.yContent)) > this.contentData.yHigherLimitValue)
      || ((this.inputValueTracker.top + Number(this.yContent)) < this.contentData.yLowerLimitValue)) {

      this.message = this.contentData.errorMsg[2];
      this.clearMsgFunction();
      return;
    } else {
      if (String(this.xContent) === '') {
        this.xContent = 0;
      }
      if (String(this.yContent) === '') {
        this.yContent = 0;
      }

      if (this.xContent === 0) {
        setTimeout(() => {
          this.transitionTime = this.contentData.actualTransitionTime;
          this.topShift = (this.currentTop - ((this.yContent) * this.contentData.yGridPerUnitScale));
          this.currentTop = (this.currentTop - ((this.yContent) * this.contentData.yGridPerUnitScale));
          this.inputValueTracker.top = this.inputValueTracker.top + Number(this.yContent);
        }, 10);
        setTimeout(() => {
          this.clearInputFlag.emit(true);
        }, 1010);
        setTimeout(() => {
          this.checkFlaskAcheivedCondition();
        }, 1020);
      } else if (this.yContent === 0) {
        setTimeout(() => {
          this.transitionTime = this.contentData.actualTransitionTime;
          this.leftShift = (this.currentLeft + ((this.xContent) * this.contentData.xGridPerUnitScale));
          this.currentLeft = (this.currentLeft + ((this.xContent) * this.contentData.xGridPerUnitScale));
          this.inputValueTracker.left = this.inputValueTracker.left + Number(this.xContent);
        }, 10);
        setTimeout(() => {
          this.clearInputFlag.emit(true);
        }, 1010);
        setTimeout(() => {
          this.checkFlaskAcheivedCondition();
        }, 1020);
      } else {
        setTimeout(() => {
          this.transitionTime = this.contentData.actualTransitionTime;
          this.leftShift = (this.currentLeft + ((this.xContent) * this.contentData.xGridPerUnitScale));
          this.currentLeft = (this.currentLeft + ((this.xContent) * this.contentData.xGridPerUnitScale));
          this.inputValueTracker.left = this.inputValueTracker.left + Number(this.xContent);
        }, 10);
        setTimeout(() => {
          this.transitionTime = this.contentData.defaultTransitionTime;
        }, 1000);
        setTimeout(() => {
          this.transitionTime = this.contentData.actualTransitionTime;
          this.topShift = (this.currentTop - ((this.yContent) * this.contentData.yGridPerUnitScale));
          this.currentTop = (this.currentTop - ((this.yContent) * this.contentData.yGridPerUnitScale));
          this.inputValueTracker.top = this.inputValueTracker.top + Number(this.yContent);
        }, 1010);

        setTimeout(() => {
          this.clearInputFlag.emit(true);
        }, 2010);
        setTimeout(() => {
          this.checkFlaskAcheivedCondition();
        }, 2020);
      }
    }
  }

  speechPosition(position) {
    if (position === 'right') {
      this.speechCss.top = (this.contentData.yGridCoord.indexOf(this.inputValueTracker.top) * this.contentData.yGridPerUnitScale) - 7 + '%';
      this.speechCss.left = (this.contentData.xGridCoord.indexOf(this.inputValueTracker.left) * this.contentData.xGridPerUnitScale) - 19 + '%';
    } else if(position === 'left') {
      this.speechCss.top = (this.contentData.yGridCoord.indexOf(this.inputValueTracker.top) * this.contentData.yGridPerUnitScale) - 7 + '%';
      this.speechCss.left = (this.contentData.xGridCoord.indexOf(this.inputValueTracker.left) * this.contentData.xGridPerUnitScale) + 13 + '%';
    }
  }

  clearMsgFunction() {
    this.speechCss.autoHideMsg = false;
    this.clearInputFlag.emit(true);
  }

  dragonAnimationFunction() {
    let element = document.getElementById("dragon-animation");
    setTimeout(() => {
      element.classList.add("animated");
      element.classList.add("bounce");
    }, 200);
    setTimeout(() => {
      element.classList.remove("animated");
      element.classList.remove("bounce");
    }, 400);
  }

  checkFlaskAcheivedCondition() {
    for (let i = 0; i < this.contentData.gemsCoordData.length; i++) {
      if (this.inputValueTracker.left === this.contentData.gemsCoordData[i].x
        && this.inputValueTracker.top === this.contentData.gemsCoordData[i].y
        && this.contentData.gemsCoordData[i].flag !== true) {
        if (this.contentData.gemsCoordData[i].flaskJar) {
          setTimeout(() => {
            this.flaskVisible = true;
          }, 200);
          setTimeout(() => {
            this.dragonTransitionTime = this.contentData.actualTransitionTime;
            this.dragonTopShift = 45;
            this.dragonLeftShift = 45;
          }, 210)
          this.audio.stopForeverPlayingAudio();
          this.audio.play(0);
          setTimeout(() => {
            this.dragonAnimationFunction();
          }, 1300);
          setTimeout(() => {
            this.dialogRef = this.dialog.open(SuccessModalComponent, {
              hasBackdrop: true,
              disableClose: true,
              panelClass: 'app-full-bleed-dialog'
            });
            this.dialogRef.componentInstance.modalData = this.contentData;
          }, 2200);
        } else {
          this.speechPosition(this.speechCss.position);
          this.message = this.contentData.errorMsg[3];
          setTimeout(() => {
            this.contentData.gemsCoordData[i].flag = true;
            this.speechCss.autoHideMsg = false;
          }, 1000);
          setTimeout(() => {
            this.gemStoneImage[i] = this.contentData.gemsImage[1];
          }, 510);
        }
      } else if (this.inputValueTracker.left === this.contentData.gemsCoordData[i].x
        && this.inputValueTracker.top === this.contentData.gemsCoordData[i].y
        && this.contentData.gemsCoordData[i].flag === true) {
          this.speechPosition(this.speechCss.position);
          this.message = this.contentData.errorMsg[4];
          setTimeout(() => {
            this.speechCss.autoHideMsg = false;
          }, 10);
      }
    }
  }
}