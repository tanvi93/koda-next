import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SuccessModalComponent } from '../../../shared-module/success-modal/success-modal.component';

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

  constructor(public dialog: MatDialog) {
    this.correctAlgo = {};
   }

  correctSequence($event) {
    console.log($event);
    this.errorShow = false;
    if (!$event.data.order) {
      for (let i = 0; i <= Object.keys(this.correctAlgo).length; i++) {
        if (this.correctAlgo[i] === $event.index){
          delete this.correctAlgo[i];
          break;
        }
      } 
     } else{
        this.correctAlgo[Number($event.data.order)] = $event.index;
      }  
  }

  hideErrorMsg(event) {
    this.errorShow = event;
  }

  checkSequence() {
    this.errorShow = true;
    this.success = true;
    if (Object.keys(this.correctAlgo).length < 5) {
      if (Object.keys(this.correctAlgo).length === 0) {
        this.errorMsg = this.algo.allEmpty;
      } else {
        this.errorMsg = this.algo.anyEmpty;
      }
    } else if (this.correctAlgo[1] !== 1) {
        this.errorMsg = this.algo.step1WrongText;
      } else if ((this.correctAlgo[2] > this.correctAlgo[4]) || (this.correctAlgo[3] > this.correctAlgo[4])) {
        this.errorMsg = this.algo.increaseScoreBeforeMoveText;
      } else if ((this.correctAlgo[2] > this.correctAlgo[5]) || (this.correctAlgo[3] > this.correctAlgo[5])) {
        this.errorMsg = this.algo.endGameBeforeMoveText;
      } else {
        this.errorShow = false;
        this.dialogRef = this.dialog.open(SuccessModalComponent, {
          disableClose: true,
          hasBackdrop: true,
          panelClass: 'app-full-bleed-dialog'
        });
        this.dialogRef.componentInstance.modalData = this.algo;
      }
  }

}
