import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { treasureContent } from './../../data/treasureHunt'
import { GeneralHintModalComponent } from './../../shared-module/general-hint-modal/general-hint-modal.component';

@Component({
  selector: 'app-treasure-hunt',
  templateUrl: './treasure-hunt.component.html',
  styleUrls: ['./treasure-hunt.component.scss']
})
  
 /**
   * @name TreasureHuntComponent<app-treasure-hunt>
   * @description This component will deal fox grape activity in which it accept data provided by input section and then perform animation based on input provided by user.
   * @param contentData its holds entire detail of the page which is passed as an input to its child component.
   * @constructor mat dialog is injected.
   */

  /**
   * @method openHintDialog
   * @memberOf TreasureHuntComponent
   * @param $event This varaible object contains its environment data which is use to get its position which will be use to set position of the dialog.
   * @description this is an event based method which get triggered whenever hint icon of the page is clicked, which result in popup of hint dialog box contains hint to perform the task.
   */

   /**
   * @method updateTodoList
   * @memberOf TreasureHuntComponent
   * @param $event This variable contain index about which hint's correct image needed to be set as visible.
   * @description this method deals with making todo list as checked whenever user find the chest representing at particular coordinate.
   */

  /**
   * @method activateHint
   * @memberOf TreasureHuntComponent
   * @param $event This variable object contain whether to activate the hint icon i.e making hint icon visible to user.
   * @description this method deals with making hint icon of the activity to be visible as its hidden during init process. 
   */
export class TreasureHuntComponent implements OnInit {
  hintDialog: MatDialogRef<GeneralHintModalComponent>;
  private contentData = treasureContent;
  private chestVisibilityStatus: boolean[];
  private hideHint: boolean;
  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    this.chestVisibilityStatus = [true, true, true];
    this.hideHint = true;
  }

  openHintDialog(ev) {
    this.hintDialog = this.dialog.open(GeneralHintModalComponent, {
      disableClose: false,
      hasBackdrop: true,
      position: {
        top: ev.target.y + 'px'
      }
    });
    this.hintDialog.componentInstance.activityHintData = this.contentData.hintData;
  }
 
  updateTodoList = ($event) => {
    this.chestVisibilityStatus[$event] = false;
  }
  activateHint = ($event) => {
    this.hideHint = $event;
  }
}
