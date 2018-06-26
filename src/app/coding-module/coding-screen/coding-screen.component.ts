import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material';
import { blocksData } from './../../data/coding';
import { SpriteService } from './../services/sprite.service';
import { AlgoModalComponent } from './algo-modal/algo-modal.component';
// import { PreviewModalComponent } from '../../shared/preview-modal/preview-modal.component';
// import { WorkspaceEventModalComponent } from './modal/workspace-event-modal/workspace-event-modal.component';
// import { SuccessModalComponent } from './../../shared-services/success-modal/modal.component';
// import { HintIconModalComponent } from '../../shared-services/hint-icon-modal/hint-icon-modal.component';
import { AudioService } from './../../shared-services/audio.service';

@Component({
  selector: 'app-coding-screen',
  templateUrl: './coding-screen.component.html',
  styleUrls: ['./coding-screen.component.scss']
})
  
  /**
   * @name CodingScreenComponent<app-coding-screen>
   * @description This is parent component for all coding screens,
   * including all coding activities, challenges and monkey-menace screens
   * It has 5 major parts:-
   * - Instruction Bar 
   * - Block Zone (have blockly interface, on left of screen)
   * - Tray Zone (have images of all backgrounds, characters and buttons, below Block Zone)
   * - Game Zone (have game canvas, on right of screen)
   * - Feedback (have space for text to show the feedback, bellow Game Zone)
   * @constructor initiate Sprite service, and add icons srcs
   */

  /**
   * @method OnInit
   * @memberOf CodingScreenComponent
   * @description This method will fill data to whole screen (provide data to all 5 major parts).
   */

  /**
   * @method receiveVariableToggle
   * @memberOf CodingScreenComponent
   * @description Output catcher from Blockly Zone.
   * To show variables on stage after variable creation.
   * @param event game variable object
   */

  /**
   * @method receivePopUpCloseFlag
   * @memberOf CodingScreenComponent
   * @description Output catcher from Blockly Zone.
   * To stop showing red error popup and reseting flag.
   */
  
export class CodingScreenComponent implements OnInit {
  private headerMascotImage: String;
  private mascotBgColor: String;
  private headerContentTxt: String;

  private iconImages: any;

  private urlParam; any;
  private inputForGame: any;
  private feedback: any;
  private characters: any;
  private pageData: any;
  private successModalAppeartime: Number;
  private doRefresh: Boolean;
  private errorMsg: string;
  private enableShadowLayer: boolean;
  private popUpActive: boolean;
  private hintDailogFlag = false;

  algoDialog: MatDialogRef<AlgoModalComponent>;
  // previewDialog: MatDialogRef<PreviewModalComponent>;
  // eventDialog: MatDialogRef<WorkspaceEventModalComponent>;
  // successValidationDialog: MatDialogRef<SuccessModalComponent>;
  // hintDialog: MatDialogRef<HintIconModalComponent>;


  constructor(private route: ActivatedRoute,
    private sprites: SpriteService,
    private audio: AudioService,
    public dialog: MatDialog) {
    this.sprites = new SpriteService();

    // this.iconImages = ['./assets/icons/algorithm_open.svg', './assets/icons/preview_open.svg', './assets/icons/hint_open.svg', './assets/icons/checklist_open.svg'];
    this.successModalAppeartime = 500;
    this.doRefresh = false;
    this.enableShadowLayer = false;
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (this.urlParam && this.urlParam === params.pageId) {
        return;
      }
      if (this.urlParam && this.urlParam !== params.pageId) {
        this.doRefresh = true;
      }
      this.urlParam = params.pageId;
      this.pageData = blocksData[this.urlParam];

      this.headerContentTxt = this.pageData.instructionBarContent;
      this.headerMascotImage = this.pageData.mascotImage;
      this.mascotBgColor = this.pageData.mascotBgColor;

      let trays = [];
      let bgs = this.pageData.backgrounds.map(v => {
        v.looks = [v.src];
        v.currentLookIdx = 0;
        return v;
      });
      let buttons = this.pageData.buttons.map(v => {
        v.currentLookIdx = 0;
        return v;
      });
      trays.push(bgs);
      trays.push(this.sprites.getAllSprites(this.pageData.activity_name));
      trays.push(buttons);
      this.characters = trays;

      this.inputForGame = {};
    });
  }

  // To show variables on stage after variable creation
  receiveVariableToggle = event => {
    this.inputForGame = {};
    this.inputForGame.showVariables = event;
  }

  // inorder to disable shadow layer
  receivePopUpCloseFlag = event => {
    this.enableShadowLayer = false;
    this.popUpActive = false;
  }

  receiveCompilerError = event => {
    this.audio.errorSound.play();
    this.errorMsg = event;
    this.enableShadowLayer = true;
    this.popUpActive = true;
  }

  receiveFeedback = event => {
    if (typeof (event) == 'object' && event.success) {
      if (this.pageData.activity_name === 'monkey_menace') {
        this.audio.stopForeverPlayingAudio();
      }
      this.feedback = event.feedback;
      this.pageData['successPopupHeading'] = event.title;
      this.pageData['successPopupText'] = event.msg;
      this.pageData['popupMascotImage'] = event.mascotImage;
      this.pageData['BackgroundColor'] = event.backgroundColor;
      setTimeout(() => {
        // this.successValidationDialog = this.dialog.open(SuccessModalComponent, {
        //   disableClose: true,
        //   hasBackdrop: true
        // });
        // this.successValidationDialog.componentInstance.modalData = this.pageData;
      }, this.successModalAppeartime);
      return;
    } else {
      this.feedback = event;
      if (event.length > 0) {
        let element = document.getElementById("feedback-text");
        this.audio.errorSound.play();
        setTimeout(() => {
          element.classList.add("animated");
          element.classList.add("pulse");
          setTimeout(() => {
            element.classList.remove("animated");
            element.classList.remove("pulse");
          }, 400);
        }, 200);
      }
    }
  }

  receiveWSChanges = event => {
    if (typeof (event) === 'string') {
      this.audio.errorSound.play();
      this.errorMsg = event;
      this.enableShadowLayer = true;
      this.popUpActive = true;
      this.feedback = '';
      this.doRefresh = true;
      setTimeout(() => {
        this.doRefresh = false;
      }, 10);
    } else {
      this.feedback = event.feedback;
    }
  }

  receiveUpdateFlag = bool => {
    // if (bool) {
    //   this.characters[1] = this.sprites.getAllSprites(this.pageData.activity_name);
    // }
  }

  openDialog(data, dialogComponent, x, flag = false) {
    const dialog: any = this.dialog.open(dialogComponent, {
      hasBackdrop: true,
      position: {
        left: (data.target.x - (x ? x : 0)) + 'px',
        top: data.target.y + 'px'
      }
    });
    dialog.afterClosed().subscribe(result => {
      flag = false;
    });
    dialog.componentInstance.codingScreenData = this.pageData;
  }

  // iconDialog(name, ev) {
  //   switch (name) {
  //     case 'algo':
  //       this.openDialog(ev, AlgorithmModalComponent, 6);
  //       break;
  //     case 'preview':
  //       this.openDialog(ev, PreviewModalComponent, 57);
  //       break;
  //     case 'hint':
  //       this.hintDailogFlag = true;
  //       this.openDialog(ev, HintIconModalComponent, 0, this.hintDailogFlag);
  //       break;
  //   }
  // }

}
