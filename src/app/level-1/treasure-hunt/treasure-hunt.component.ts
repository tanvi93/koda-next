import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { treasureContent } from './../../data/treasureHunt'
import { GeneralHintModalComponent } from './../../shared-module/general-hint-modal/general-hint-modal.component';

@Component({
  selector: 'app-treasure-hunt',
  templateUrl: './treasure-hunt.component.html',
  styleUrls: ['./treasure-hunt.component.scss']
})
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
