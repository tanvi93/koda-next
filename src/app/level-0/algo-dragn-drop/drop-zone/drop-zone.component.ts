import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DropWrapperComponent } from '../../../shared-module/drop-wrapper/drop-wrapper.component';
import { SuccessModalComponent } from '../../../shared-module/success-modal/success-modal.component';

@Component({
  selector: 'app-drop-zone',
  templateUrl: './drop-zone.component.html',
  styleUrls: ['./drop-zone.component.scss']
})
export class DropZoneComponent {
  @Input() algo;
  @Input() errorShow;
  @Output() stepAtDropZone = new EventEmitter();
  dialogRef: MatDialogRef<SuccessModalComponent>;

  private correctAlgo: any;
  private success: Boolean;
  private extraStepObj: any;
  private errorMsg: String;
  private extraStepPresent: Boolean;
  private localData: any;
  private dropEnabled: Boolean = true;
  private dragEnabled: Boolean = false;

  constructor(public dialog: MatDialog) {
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
    } else{
      if (this.correctAlgo[1] !== 1) {
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
}
