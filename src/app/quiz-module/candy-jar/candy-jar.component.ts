import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { candy_jar } from '../../data/candyJarActivity';
import { SuccessModalComponent } from './../../shared-module/success-modal/success-modal.component';

@Component({
  selector: 'app-candy-jar',
  templateUrl: './candy-jar.component.html',
  styleUrls: ['./candy-jar.component.scss']
})

/**
 * @export
 * @class CandyJarComponent
 * @description The component consist of a question and two inputs, one for reward and another for penalty.
 * The user have to give candies that is they have to enter number in the reward input box if the boy has done something good.
 * And if the boy do something wrong take one candy from reward jar and put it in penalty jar that is the previous number minus 
 * one in reward input box and add one to previous value in penalty input box.Once he/she has entered correct values in both the
 * input box, next question appears.
 *@param { object } quizObj This object contains the data of candy jar activity.
 *@param { string } flexLeft It gives the value to fxFlex in quizWrapper to make left side container small.
 *@param { string } flexRight It gives the value to fxFlex in quizWrapper to make right side container larger.
 *@param { array } previousRewardValue This array stores the previous correct value of reward input box of previous question.
 *@param { array } previousPenaltyValue This array stores the previous correct value of penalty input box of previous question.
 *@param { string } currentRewardValue This variable gets value when input is entered in reward input box.When the question's
 *both answers are correct this value is made empty.
 *@param { string } currentPenaltyValue This variable gets value when input is entered in penalty input box.When the question's
 *both answers are correct this value is made empty.
 *@param { Number } count This value is zero when initialised.It gets incremented when both input's are correct for the given 
 *question.
 *@param { boolean } showError to show the error message.
 *@param { boolean } success to show the success message.
 *@param { string } error It contains the error message for the specific condition.
 *@method reward This method is called when input is entered in reward input box.Here,the user entered value is given to currentRewardValue
 * variable.If both the inputs are correct success message is shown and if only penalty message is incorrect a common error message is 
 * shown. If the currentRewardValue is greater, equal or less than previousRewardValue then the specific message for it is shown.
 * @method penalty This method is called when input is entered in penalty input box.Here,the user entered value is given to currentPenaltyValue
 * variable.If both the inputs are correct success message is shown and if only reward message is incorrect a common error message is
 * shown. If the currentPenaltyValue is greater, equal or less than previousPenaltyValue then the specific message for it is shown.
 * @method correctAnswer This method is called when both inputs are correct.Here, the values are pushed in previousRewardValue and 
 * previousPenaltyValue variable.The count is incremented here and next question with two inputs are made visible.The currentRewardValue
 * and currentPenaltyValue variable are made empty.
*/

export class CandyJarComponent {
  private quizObj: any;
  private flexLeft;
  private flexRight;
  private previousRewardValue: any;
  private previousPenaltyValue: any;
  private currentRewardValue: any;
  private currentPenaltyValue: any;
  private count;
  private showError: boolean;
  private error: String;
  private success: boolean;
  dialogRef: MatDialogRef<SuccessModalComponent>;

  constructor(private route: ActivatedRoute, public dialog: MatDialog) {
    this.quizObj = candy_jar;
    this.flexLeft = '40';
    this.flexRight = '60';
    this.previousRewardValue = [2];
    this.previousPenaltyValue = [0];
    this.count = 0;
    this.showError = false;
    this.success = false;
  }

  reward(val, data) {
    this.displayError();
    this.success = false;
    this.currentRewardValue = Number(val.key);

    if (this.currentRewardValue === data.optionX.correctValue) {
      if (this.currentPenaltyValue === data.optionY.correctValue) {
        this.correctAnswer(data);
      } else if (this.currentPenaltyValue) {
        this.error = this.quizObj.commonErrormsg;
      } else {
        setTimeout(() => { this.showError = false; }, 200);
      }
    } else {
      if (this.currentRewardValue > this.previousRewardValue[this.count]) {
        this.error = data.optionX.moreThanPreviousValue;
      } else if (this.currentRewardValue === this.previousRewardValue[this.count]) {
        this.error = data.optionX.equalToPreviousValue;
      } else if (this.currentRewardValue < this.previousRewardValue[this.count]) {
        this.error = data.optionX.lessthanPreviousValue;
      }
    }
  }

  penalty(val, data) {
    this.displayError();
    this.success = false;
    this.currentPenaltyValue = Number(val.key);

    if (this.currentPenaltyValue === data.optionY.correctValue) {
      if (this.currentRewardValue === data.optionX.correctValue) {
        this.correctAnswer(data);
      } else if (this.currentRewardValue) {
        this.error = this.quizObj.commonErrormsg;
      } else {
        setTimeout(() => { this.showError = false; }, 200);
      }
    } else {
      if (this.currentPenaltyValue > this.previousPenaltyValue[this.count]) {
        this.error = data.optionY.moreThanPreviousValue;
      } else if (this.currentPenaltyValue === this.previousPenaltyValue[this.count]) {
        this.error = data.optionY.equalToPreviousValue;
      } else if (this.currentPenaltyValue < this.previousPenaltyValue[this.count]) {
        this.error = data.optionY.lessthanPreviousValue;
      }
    }
  }

  correctAnswer(data) {
    this.success = true;
    this.error = data.successMsg;
    if (this.error == '') {
      setTimeout(() => { this.showError = false; }, 200);
      this.dialogRef = this.dialog.open(SuccessModalComponent, {
        hasBackdrop: true,
        panelClass: 'app-full-bleed-dialog'
      });
      this.dialogRef.componentInstance.modalData = this.quizObj;
    } else {
      this.previousRewardValue.push(this.currentRewardValue);
      this.previousPenaltyValue.push(this.currentPenaltyValue);
      this.count++;
      document.getElementById('Id' + (this.count + 1)).style.visibility = 'visible';
      this.currentRewardValue = '';
      this.currentPenaltyValue = '';
    }
  }

  displayError() {
    this.showError = false;
    setTimeout(() => {
      this.showError = true;
    }, 200);
  }
}
