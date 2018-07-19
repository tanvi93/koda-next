import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { SuccessModalComponent } from './../../../shared-module/success-modal/success-modal.component';
import { ActivityTrackerService } from './../../../shared-services/activity-tracker.service';

@Component({
  selector: 'app-captcha-input',
  templateUrl: './captcha-input.component.html',
  styleUrls: ['./captcha-input.component.scss']
})
  
/**
  * @name CaptchaInputComponent<app-captcha-input>
  * @description This component will deal captcha pattern activity in which it accept data provided by input section and then validation is performed inorder to see whether correct pattern is been entered or not.
  * @param contentData its holds entire detail of the page which is passed as an input to its child component.
  * @param patternData its hold entire detail with respect to current pattern which user is trying to crack.
  * @constructor Mat-dialog and activity tracker service has been injected.
  */

/**
* @method answerSubmitted
* @memberOf CaptchaInputComponent
* @description this method gets triggered whenever user submit its answer by clicking DONE button, its help in validating whether the submitted answer is correct or not.
*/

/**
 * @method setData
 * @memberOf CaptchaInputComponent
 * @param $event This variable object contain environmental object variable of the input text.
 * @description this method  get triggered whenever user try to give input , in this method we are checking whether correct key is been pressed and also if yes then we will make the data to be in our desirable format which makes our task easier for validation process.
 */
  
export class CaptchaInputComponent implements OnInit {
  @Input() patternData;
  @Input() contentData;
  @Output() validationContent = new EventEmitter<object>();
  @Output() hideErrorFlag = new EventEmitter<boolean>();
  dialogRef: MatDialogRef<SuccessModalComponent>;
  private errorMsg: string;
  private showError: boolean;
  private inputValue: string[];
  private stringLengthValue: any;
  private textDisableFlag: Array<boolean>;
  private errorIndex: Array<boolean>;
  private counter: number;
  private patternInput: String[];

  constructor(public dialog: MatDialog, private tracker: ActivityTrackerService) {
    this.patternInput = [];
  }

  ngOnInit() {
    this.errorIndex = [false, false, false];
    this.counter = 0;
  }

  ngOnChanges() {
    this.textDisableFlag = this.patternData.textDisableFlag;
    this.inputValue = this.patternData.inputValue;
    this.errorMsg = this.contentData.errorMsg[0];
    this.showError = false;
    this.stringLengthValue = ['12', '5', '1'];
  }

  answerSubmitted() {
    if (this.inputValue[0] === '' || this.inputValue[1] === '' || this.inputValue[2] === '') {
      this.errorMsg = this.contentData.errorMsg[3];
      this.hideErrorFlag.emit(false);
      setTimeout(() => {
        this.showError = true;
      }, 100);
    } else {
      this.checkCorrectCondition();
    }
  }

  checkCorrectCondition() {
    if (this.inputValue[0].toLowerCase() === this.patternData.correctSequence
      && this.inputValue[1].toLowerCase() === this.patternData.repetitivePattern
      && this.inputValue[2].toLowerCase() === this.patternData.repetitionTimes) {
      ++this.counter;

      this.textDisableFlag = [true, true, true];
      setTimeout(() => {
        this.dialogRef = this.dialog.open(SuccessModalComponent, {
          hasBackdrop: true,
          disableClose: true,
          panelClass: 'app-full-bleed-dialog'
        });
        this.dialogRef.componentInstance.modalData = this.patternData;

        if (this.counter === 2) {
          this.tracker.setContent('loops', 0);
        }
      }, 100);
    } else {
      if (this.inputValue[0].toLowerCase() !== this.patternData.correctSequence) {
        this.errorMsg = this.contentData.errorMsg[0];
        this.errorIndex = [true, false, false];
      } else if (this.inputValue[1].toLowerCase() !== this.patternData.repetitivePattern) {
        this.errorMsg = this.contentData.errorMsg[1];
        this.errorIndex = [false, true, false];
        this.textDisableFlag[0] = true;
      } else if (this.inputValue[2].toLowerCase() !== this.patternData.repetitionTimes) {
        this.errorMsg = this.contentData.errorMsg[2];
        this.errorIndex = [false, false, true];
        this.textDisableFlag[0] = true;
        this.textDisableFlag[1] = true;
      }
      this.showErrorFunc();
    }
  }

  // show error Msg
  showErrorFunc() {
    this.hideErrorFlag.emit(false);
    setTimeout(() => {
      this.showError = true;
    }, 100);
  }

  // helps in hiding error msg and reset all flags
  inputClicked() {
    this.hideErrorFlag.emit(true);
    this.errorIndex = [false, false, false];
    this.showError = false;
  }

  setData(event) {
    this.inputClicked();
    switch (event.target.id) {
      case 'input0': {
        if (isNaN(event.key)) {
          setTimeout(() => {
            event.target.value = event.target.value.toUpperCase();
            this.patternInput[0] = event.target.value;
            this.validationContent.emit(this.patternInput);
          }, 10);
        } else {
          event.preventDefault();
        }
        break;
      }
      case 'input1': {
        if (isNaN(event.key)) {
          setTimeout(() => {
            event.target.value = event.target.value.toUpperCase();
            this.patternInput[1] = event.target.value;
            this.validationContent.emit(this.patternInput);
          }, 10);
        } else {
          event.preventDefault();
        }
        break;
      }
      case 'input2': {
        if (isNaN(event.key) && event.key !== 'Backspace') {
          event.preventDefault();
        } else {
          setTimeout(() => {
            event.target.value = event.target.value;
            this.patternInput[2] = event.target.value;
            this.validationContent.emit(this.patternInput);
          }, 10);
        }
        break;
      }
    }
  }
}
