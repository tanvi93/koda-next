import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SuccessModalComponent } from '../../../shared-module/success-modal/success-modal.component';
import { ActivityTrackerService } from './../../../shared-services/activity-tracker.service';

@Component({
  selector: 'app-drop-container',
  templateUrl: './drop-container.component.html',
  styleUrls: ['./drop-container.component.scss']
})

/**
 * @name DropContainerComponent
 * @description This component contains the numbered container for each step in sequence and 
 * check button for validation.
 * @param { object } algo This object contains the algorithm steps data.
 * @param { boolean } errorShow This is for showing error message when done button is clicked 
 * and sequence is incorrect.
 * @param { object } correctAlgo This object stores the key as the correct order number and 
 * value as the container number where it is place.
 * @method correctSequence This method is called when the step is drop in drop zone.
 * The error message disappears and the data is given to correctAlgo object.
 * @method hideErrorMsg This method is called when the step is dragged from the drag zone.
 * @method checkSequence Here the sequence is checked if the steps are in correct sequence the success
 * message dialog is called and if not the error message is displayed based on step arranged.
 */

export class DropContainerComponent {

  @Input() algo;
  @Input() errorShow;
  dialogRef: MatDialogRef<SuccessModalComponent>;

  private correctAlgo: any;
  private success: Boolean;
  private errorMsg: String;
  private extraStepObj: any;
  private extraStepPresent: Boolean;

  constructor(public dialog: MatDialog, private tracker: ActivityTrackerService) {
    this.success = true;
    this.extraStepPresent = false;
    this.correctAlgo = {};
    this.extraStepObj = {};
   }

  correctSequence($event) {
    let indexPresent = false;
    this.extraStepPresent = false;
    this.errorShow = false;
    if (!$event.data.order) {
      for (let i = 0; i <= Object.keys(this.correctAlgo).length; i++) {
        if (this.correctAlgo[i] === $event.index) {
          indexPresent = true;
          delete this.correctAlgo[i];
          break;
        }
      }
      if (indexPresent === false) {
        if ($event.data.order === '') {
          delete this.extraStepObj[$event.index];
        } else {
          this.extraStepObj[$event.index] = $event.data.msg;
        }
      }
    } else {
      this.correctAlgo[Number($event.data.order)] = $event.index;
    } 
  }

  hideErrorMsg(event) {
    this.errorShow = event;
  }

  checkSequence() {
    let msg = '';
    for (let i = 0; i <= 5; i++) {
      if (this.extraStepObj[i]) {
        msg = this.extraStepObj[i];
        this.extraStepPresent = true;
        break;
      }
    }
    this.errorShow = true;
    this.success = true;
    if ((Object.keys(this.correctAlgo).length + Object.keys(this.extraStepObj).length) < 5) {
      if (Object.keys(this.correctAlgo).length === 0 && Object.keys(this.extraStepObj).length === 0) {
        this.errorMsg = this.algo.allEmpty;
      } else {
        this.errorMsg = this.algo.anyEmpty;
      }
    }  else {
      if (this.extraStepPresent) {
        this.errorMsg = msg;
      } else if (this.correctAlgo[1] > (this.correctAlgo[3] || this.correctAlgo[4] || this.correctAlgo[5])) {
        this.errorMsg = this.algo.bagsAfterLeavingHome;
      } else if (this.correctAlgo[2] > (this.correctAlgo[3] || this.correctAlgo[4] || this.correctAlgo[5])) {
        this.errorMsg = this.algo.lightsAfterLeavingHome;
      } else if (this.correctAlgo[3] > (this.correctAlgo[4] || this.correctAlgo[5])) {
        this.errorMsg = this.algo.fuelAfterHillOrHotel;
      } else if (this.correctAlgo[4] > this.correctAlgo[5]) {
        this.errorMsg = this.algo.hillAfterReachingHotel;
      } else {
        this.errorShow = false;
        this.tracker.setContent('sequencing', 0);
        this.dialogRef = this.dialog.open(SuccessModalComponent, {
          disableClose: true,
          hasBackdrop: true,
          panelClass: 'app-full-bleed-dialog'
        });
        this.dialogRef.componentInstance.modalData = this.algo;

      }
    }
  }

}
