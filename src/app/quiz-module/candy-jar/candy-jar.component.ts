import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { candy_jar } from '../../data/candyJarActivity';

@Component({
  selector: 'app-candy-jar',
  templateUrl: './candy-jar.component.html',
  styleUrls: ['./candy-jar.component.scss']
})

export class CandyJarComponent {
  private quizObj: any;
  private flexLeft;
  private flexRight;
  private previousRewardValue: any;
  private previousPenaltyValue: any;
  private currentRewardValue: Number;
  private currentPenaltyValue: Number;
  private count;
  private showError: boolean;
  private error: String;
  private success: boolean;

  constructor(private route: ActivatedRoute) {
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
    this.showError = true;
    this.success = false;
    this.currentRewardValue = Number(val.key);
    console.log(this.currentRewardValue);
    if (this.currentRewardValue === data.optionX.correctValue) {
      if (this.currentPenaltyValue === data.optionY.correctValue) {
        console.log(data.successMsg);
        this.success = true;
        this.error = data.successMsg;
        this.previousRewardValue.push(this.currentRewardValue);
        this.previousPenaltyValue.push(this.currentPenaltyValue);
        this.count++;
        console.log('Id' + (this.count+1));
        document.getElementById('Id' + (this.count + 1)).style.visibility = 'visible';
      } else if (this.currentPenaltyValue) {
        console.log(this.quizObj.commonErrormsg);
        this.error = this.quizObj.commonErrormsg;
      }
    } else {
      if (this.currentRewardValue > this.previousRewardValue) {
        console.log(data.optionX.moreThanPreviousValue);
        this.error = data.optionX.moreThanPreviousValue;
      } else if (this.currentRewardValue === this.previousRewardValue) {
        console.log(data.optionX.equalToPreviousValue);
        this.error = data.optionX.equalToPreviousValue;
      } else if (this.currentRewardValue < this.previousRewardValue) {
        console.log(data.optionX.lessthanPreviousValue);
        this.error = data.optionX.lessthanPreviousValue;
      }
   }
  }

  penalty(val, data) {
    this.showError = true;
    this.success = false;
    this.currentPenaltyValue = Number(val.key);
    console.log(val);
    if (this.currentPenaltyValue === data.optionY.correctValue) {
      if (this.currentRewardValue === data.optionX.correctValue) {
        console.log(data.successMsg);
        this.success = true;
        this.error = data.successMsg;
        this.previousRewardValue.push(this.currentRewardValue);
        this.previousPenaltyValue.push(this.currentPenaltyValue);
        this.count++;
        document.getElementById('Id' + (this.count + 1)).style.visibility = 'visible';
      } else {
        console.log(this.quizObj.commonErrormsg);
        this.error = this.quizObj.commonErrormsg;
      }
    } else {
      if (this.currentPenaltyValue > this.previousPenaltyValue) {
        console.log(data.optionY.moreThanPreviousValue);
        this.error = data.optionY.moreThanPreviousValue;
      } else if (this.currentPenaltyValue === this.previousPenaltyValue) {
        console.log(data.optionY.equalToPreviousValue);
        this.error = data.optionY.equalToPreviousValue;
      } else if (this.currentPenaltyValue < this.previousPenaltyValue) {
        console.log(data.optionY.lessthanPreviousValue);
        this.error = data.optionY.lessthanPreviousValue;
      }
    }
  }

}
