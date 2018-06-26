import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-hint-modal',
  templateUrl: './hint-modal.component.html',
  styleUrls: ['./hint-modal.component.scss']
})

/**
 * @name HintModal
 * @description This component is for providing the hint for the quiz.
 * It consist of the open icon image and points which are in the form of list.
 * @param { Array} activityHintData  hint points from coding screen.
 * @param { Array } quizHint hint points from quiz component.
 * @param { function } closeDialog this function is called when the open dialog image is clicked.
 * It closes these open modal.
 */

export class HintModalComponent implements OnInit {
  @Input() quizHint;
  public activityHintData;

  constructor(public hintDialog: MatDialogRef<HintModalComponent>) { }

  ngOnInit() {
    this.activityHintData = this.quizHint;
  }

  closeDialog() {
    this.hintDialog.close();
  }
}
