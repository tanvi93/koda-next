import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
// import { SuccessModalComponent } from './../../../shared/success-modal/modal.component';

/**
 * @name CheckboxComponentComponent
 * @description This component will be injected wherever there is need of quiz related activity needed to be perform.
 * @param {object} dataContent input from quiz which will be used for providing header for quiz section along with different quiz options.
 * @param {object} errorMsgDetail it copy the complete data for the current checkbox which will later be helpfull in setting respective error based of user interaction.
 * @param {string} error this variable is use to send error msg which will be use by showErrorMsg Fucntion.
 * @param {boolean} showError this variable is set false initially false inorder to hide error msg and whenever error needed to be displayed * * than this will be set to true.
 * @method submitAnswer this function is called inorder to validate whether user have done the task correctly and it will give respective feedback as per user have done the activity
 * @method showErrorMsg this function is called when the user choose wrong answer from the given choices.
 * @method checkboxFunction this function is called inorder to check whether the  checkbox status about whether user has  checked or unchecked the given checkbox.
 */

@Component({
  selector: 'app-checkbox-component',
  templateUrl: './checkbox-component.component.html',
  styleUrls: ['./checkbox-component.component.scss']
})
export class CheckboxComponentComponent implements OnInit {
  @Input() dataContent;
  // dialogRef: MatDialogRef<SuccessModalComponent>;

  showError: boolean = false;
  checkData: boolean[];
  errorMsgDetail: any;
  error: string;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.dataContent.answer.forEach(element => {
      this.checkData.push(false);
    });
  }

  submitAnswer = (data) => {
    this.showError = false;
    let correctMsgCount = 0;
    let totalCorrectMsgCount = 0;
    let wrongMsgCount = 0;
    this.errorMsgDetail = [];

    data.forEach((element, index) => {
      if (element.isCorrect === true) {
        ++totalCorrectMsgCount;
        if (this.checkData[index]) {
          ++correctMsgCount;
        }
      } else if (element.isCorrect === false && this.checkData[index] === true) {
        ++wrongMsgCount;
        if (this.errorMsgDetail.length === 0) {
          this.errorMsgDetail = element;
        }
      }
    });

    if (wrongMsgCount === 1 && correctMsgCount === 0) {
      this.showErrorMsg();
      this.error = this.errorMsgDetail.only_this_selected_msg;
    } else if (wrongMsgCount > 1 && correctMsgCount === 0) {
      this.showErrorMsg();
      this.error = this.dataContent.all_wrong_msg;
    } else if (totalCorrectMsgCount !== correctMsgCount && correctMsgCount !== 0 && wrongMsgCount === 0) {
      this.showErrorMsg();
      this.error = this.dataContent.correct_but_not_all_msg;
    } else if (wrongMsgCount !== 0 && correctMsgCount !== 0) {
      this.showErrorMsg();
      this.error = this.errorMsgDetail.right_and_this_selected_msg;
    } else if (wrongMsgCount === 0 && correctMsgCount === 0) {
      this.showErrorMsg();
      this.error = this.dataContent.no_option_selected_msg;
    } else if (totalCorrectMsgCount === correctMsgCount && wrongMsgCount === 0) {
      // this.showError = false;
      // this.dialogRef = this.dialog.open(SuccessModalComponent, {
      //   hasBackdrop: true,
      //   panelClass: 'app-full-bleed-dialog'
      // });
      // this.dialogRef.componentInstance.modalData = this.dataContent;
    }
  }

  checkboxFunction = (ev, index) => {
    this.showError = false;
    this.checkData[index] = ev.target.checked;
  }

  showErrorMsg = () => {
    setTimeout(() => {
      this.showError = true;
    }, 200);
  }
}
