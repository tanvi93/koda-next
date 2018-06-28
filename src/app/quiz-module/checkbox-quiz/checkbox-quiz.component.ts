import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { SuccessModalComponent } from './../../shared-module/success-modal/success-modal.component';
import { ActivatedRoute } from '@angular/router';
import { checklistMCQ } from './../../data/checklistMcq';

@Component({
  selector: 'app-checkbox-quiz',
  templateUrl: './checkbox-quiz.component.html',
  styleUrls: ['./checkbox-quiz.component.scss']
})
  
  
/**
   * @name CheckboxQuizComponent<app-checkbox-quiz>
   * @description This component will deal with the activity which are based on checkbox type
   * In this component we will get data from checklistMCQ.ts based on which page has been triggerd
   * @param QuizObj its holds entire detail of the activity.
   * @param pageId its hold the name of page whoes activity we are creating.
   * @param showError its act as flag variable inorder to hide or reveal error based on user interaction.
   * @param error this variable holds the message which we want to display through error component
   * @param stylingObj this object mostly deals with taking care of style which we want to provide to our checkbox MCQ header
   * @param checkData this variable holds the boolean value when the check box is checked or not.
   * @constructor intiate checkData variable
   */

  /**
   * @method OnInit
   * @memberOf CheckboxQuizComponent
   * @description This method will initialize the showError variable along with routing .
   */

  /**
   * @method checkboxFunction
   * @memberOf CheckboxQuizComponent
   * @description help in finding out the status of checkbox and set the error msg accordingly.
   * @param data object which help if validating the activity.
   */

  /**
   * @method showErrorMsg
   * @memberOf CheckboxQuizComponent
   * @description this method help in showing error whenever the user did some mistake while performing the give task.
   */
export class CheckboxQuizComponent implements OnInit {
  dialogRef: MatDialogRef<SuccessModalComponent>;

  private showError: boolean;
  private checkData: boolean[];
  private quizObj: any;
  private pageId: string;
  private errorMsgDetail: any;
  private error: string;
  constructor(public dialog: MatDialog, private route: ActivatedRoute) { 
    this.checkData = [];
  }

  ngOnInit() {
    this.showError = false;
    this.route.params.subscribe(params => {
      this.pageId = params.pageId;
      this.quizObj = checklistMCQ[`${this.pageId}`];
      this.quizObj.answer.forEach(element => {
        this.checkData.push(false);
      });
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
      this.error = this.quizObj.all_wrong_msg;
    } else if (totalCorrectMsgCount !== correctMsgCount && correctMsgCount !== 0 && wrongMsgCount === 0) {
      this.showErrorMsg();
      this.error = this.quizObj.correct_but_not_all_msg;
    } else if (wrongMsgCount !== 0 && correctMsgCount !== 0) {
      this.showErrorMsg();
      this.error = this.errorMsgDetail.right_and_this_selected_msg;
    } else if (wrongMsgCount === 0 && correctMsgCount === 0) {
      this.showErrorMsg();
      this.error = this.quizObj.no_option_selected_msg;
    } else if (totalCorrectMsgCount === correctMsgCount && wrongMsgCount === 0) {
      this.showError = false;
      this.dialogRef = this.dialog.open(SuccessModalComponent, {
        hasBackdrop: true,
        panelClass: 'app-full-bleed-dialog'
      });
      this.dialogRef.componentInstance.modalData = this.quizObj;
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
