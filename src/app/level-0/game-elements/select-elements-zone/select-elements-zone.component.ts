import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SuccessModalComponent } from '../../../shared-module/success-modal/success-modal.component';

@Component({
  selector: 'app-select-elements-zone',
  templateUrl: './select-elements-zone.component.html',
  styleUrls: ['./select-elements-zone.component.scss']
})

/**
 * @export
 * @class SelectElementsZoneComponent
 * @description
 * It consist of question and its following options.
 * when the correct option is clicked success message is shown and the id of that element
 * is given to sorted elements zone component as output.
 * Firstly the characters are displayed then the rule board.
 * @implements {OnInit} called after data-bound properties of a directive are initialized.
 * @method ngOnInit the first question data is given to the input presentQuestionData.
 */

/**
* @method elementClicked function called when the elements are clicked where it is iterated
* over each option to check which option matches click element and if it is correct.
* If the option is correct success message is shown and given as input to sorted elements zone component.
* if the option is incorrect then error message is shown.
* @param { string } error contains the error or success message.
* @param { object } presentQuestionData contains the data of present question.
* @param { array } elementsObj stores the characters and background.
* @param { number } questionCount gets incremented when the correct option is clicked.
* @method switchQuestion function called when the question needs to be changed.
* the previous question stays for some time so the success message is visible then
* the message hides and next question and its options are displayed.
* @method displayError method to show the blinking effect of error message.
*/

/**
* @method selectedOption called when the option from rule board is selected.
* It contains parameter value which have the data of option selected.
* If the option is correct success message is shown else error message is shown.
* The correct option is given as input to sorted elements zone.
*/

export class SelectElementsZoneComponent implements OnInit {
  @Input() gameInfo;
  @Input() presentQuestionData;
  @Output() clickedImageId = new EventEmitter();
  private elementsObj;
  private questionCount: number;
  private showRules: Boolean;
  private error: string;
  private showError: Boolean;
  private isCorrect: Boolean;
  private showElementsZone: Boolean;
  private isCharClickedOnce: Boolean;
  dialogRef: MatDialogRef<SuccessModalComponent>;

  constructor(public dialog: MatDialog) {
    this.questionCount = 0;
    this.showRules = false;
    this.showError = false;
    this.isCorrect = false;
    this.showElementsZone = true;
    this.isCharClickedOnce = false;
    this.elementsObj = ['img1', 'img2', 'img3', 'background'];
  }

  ngOnInit() {
    this.presentQuestionData = this.gameInfo.validation[this.questionCount];
  }

  elementClicked(event) {
    this.isCharClickedOnce = false;
    this.displayError();
    for (let i = 0; i < this.presentQuestionData.options.length; i++) {
      if (this.presentQuestionData.options[i].option === event.target.id) {
        if (this.presentQuestionData.options[i].isCorrect) {
          for (let j = 0; j < this.elementsObj.length; j++) {
            if (this.elementsObj[j] === event.target.id) {
              this.isCharClickedOnce = true;
                this.clickedImageId.emit(event.target.id);
                this.error = this.presentQuestionData.options[i].correctMsg;
              this.isCorrect = true;
              const index = this.elementsObj.indexOf(event.target.id);
              if (index > -1) {
                this.elementsObj.splice(index, 1);
              }
              if (this.elementsObj.length <= 1) {
                  this.questionCount++;
                  this.switchQuestion(event);
                }
              }
            }
          if (!this.isCharClickedOnce) {
            this.isCorrect = false;
            this.error = this.presentQuestionData.options[i].errorMsg;
         }
        } else {
          this.isCorrect = false;
          this.error = this.presentQuestionData.options[i].errorMsg;
        }
      }
    }
  }

  selectedOption(value) {
    this.displayError();
    if (value.isCorrect) {
      if (value.correctMsg) {
        this.isCorrect = true;
        this.error = value.correctMsg;
        this.questionCount++;
        this.switchQuestion(value);
        this.clickedImageId.emit('img5');
      } else {
        this.clickedImageId.emit('img6');
        setTimeout(() => {
          this.showError = false;
          setTimeout(() => {
            this.dialogRef = this.dialog.open(SuccessModalComponent, {
              hasBackdrop: true,
              disableClose: true,
              backdropClass: 'backDrop'
            });
            this.dialogRef.componentInstance.gameElementModalObj = this.gameInfo;
          }, 1000);
        }, 100);
      }
    } else {
      this.isCorrect = false;
      this.error = value.errorMsg;
    }
  }

  displayError() {
    this.showError = false;
    setTimeout(() => {
      this.showError = true;
    }, 100);
  }

  switchQuestion(event) {
    setTimeout(() => {
      this.showElementsZone = false;
      this.showError = false;
      setTimeout(() => {
        this.showElementsZone = true;
        this.presentQuestionData = this.gameInfo.validation[this.questionCount];
        if (event.target && this.elementsObj.length == 0) {
          this.showRules = true;
        }
      }, 500);
    }, 500);
  }
}
