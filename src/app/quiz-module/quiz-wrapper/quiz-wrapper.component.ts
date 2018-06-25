import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HintModalComponent } from '../../shared-module/hint-modal/hint-modal.component';
import { PreviewModalComponent } from '../../shared-module/preview-modal/preview-modal.component';

@Component({
  selector: 'app-quiz-wrapper',
  templateUrl: './quiz-wrapper.component.html',
  styleUrls: ['./quiz-wrapper.component.scss']
})

/**
 * @name QuizWrapper
 * @description This component is for all types of quiz including radio,checkbox,dropdown and input type equations.
 * QuizWrapper consists of instruction bar at top and two container below. Left container having an image or video of game and
 * the right container consists of blank white container having ng-content tag in it which will help to get different quiz data
 * when called inside it's selector.
 * @param {object} quizData input from quiz which will be used for instruction bar and image/video path.
 * @param { function } hintModal this function is called when the hint icon clicked.
 *  It contains the hints of following quiz, which are the bullet points.
 * The data of hint is passed to input of hint modal component that is quiz, throught the componentInstance.
 * @param { function } previewModal this function is called when the preview icon is clicked.
 * It contains the video of game on which the quiz questions are based.
 * The data of preview is passed to input of preview modal component that is quizObj, throught the componentInstance.
 */

export class QuizWrapperComponent {
  @Input() quizData;
  hintDialog: MatDialogRef<HintModalComponent>;
  previewDialog: MatDialogRef<PreviewModalComponent>;

  constructor(public dialog: MatDialog) {
  }

  hintModal(ev) {
    this.hintDialog = this.dialog.open(HintModalComponent, {
      disableClose: false,
      hasBackdrop: true,
      position: {
        top: ev.target.y + 'px'
      }
    });
    this.hintDialog.componentInstance.quizHint = this.quizData.hint;
  }

  previewModal(ev) {
    this.previewDialog = this.dialog.open(PreviewModalComponent, {
      hasBackdrop: true,
      position: {
        left: ev.target.x + 100 + 'px',
        top: ev.target.y + 'px'
      }
    });
    this.previewDialog.componentInstance.quizPreview = this.quizData.preview;
  }
}
