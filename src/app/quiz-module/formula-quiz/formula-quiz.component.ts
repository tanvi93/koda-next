import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { SuccessModalComponent } from './../../shared-module/success-modal/success-modal.component';
import { ActivatedRoute } from '@angular/router';
import { quiz } from './../../data/formulaMcq';

@Component({
  selector: 'app-formula-quiz',
  templateUrl: './formula-quiz.component.html',
  styleUrls: ['./formula-quiz.component.scss']
})

 /**
   * @name FormulaQuizComponent<app-formula-quiz>
   * @description This component will deal with the activity which are based on dropdown type and text together.
   * In this component we will get data from formulaMCQ.ts based on which page has been triggerd
   * @param QuizObj its holds entire detail of the activity.
   * @param pageId its hold the name of page whoes activity we are creating.
   * @param showError its act as flag variable inorder to hide or reveal error based on user interaction.
   * @param error this variable holds the message which we want to display through error component
   * @param optionValue this variable store input provided by the user during activity taking place.
   * @param optionStatus this variable store flag value of all the task within the activity
   * @param errorStatus this variables controls the when to show msg with green background for that task.
   * @constructor initiate all the params
   */

  /**
   * @method OnInit
   * @memberOf FormulaQuizComponent
   * @description This method will initialize the showError variable along with routing .
   */

  /**
   * @method submitAnswer
   * @memberOf FormulaQuizComponent
   * @description This function will trigger success popup or error msg for the activity based on user input.
   */

  /**
   * @method validationFunction
   * @memberOf FormulaQuizComponent
   * @description this method help in showing error whenever the user did some activity while performing the give task  and if user performed all task perfect then it trigger success popup.
   */

  /**
   * @method optionValueGetter
   * @memberOf FormulaQuizComponent
   * @description this method helps in setting value given by user in appropriate from so that we can use the same value for validation
   */
  /**
   * @method selectInput
   * @memberOf FormulaQuizComponent
   * @param event variable which provide status of which select input has been selected by the user.
   * @param index variable provide which task user is dealing with.
   * @param input variable provide corresponding input text value of that task.
   * @description this method helps in acquiring select dropdown set by user and similarly perform validation part for the given option.
   */
  
  /**
   * @method inputValue
   * @memberOf FormulaQuizComponent
   * @param selectInput variable which provide status of which select input has been selected by the user.
   * @param index variable provide which task user is dealing with.
   * @param event variable provide corresponding input text value of that task.
   * @description this method helps in acquiring select dropdown set by user and similarly perform validation part for the given option.
   */

  /**
   * @method clearData
   * @memberOf FormulaQuizComponent
   * @description this method clearing text input when user click the text box and also reset all the values.
   */

  /**
   * @method showErrorMsg
   * @memberOf DropdownQuizComponent
   * @description this method help in showing error whenever the user did some activity while performing the give task.
   */
  
export class FormulaQuizComponent implements OnInit {
  private quizObj: any;
  private pageId: String;
  private showError: boolean;
  private error: string;
  private stylingObj: object;
  private optionValue: any;
  private errorStatus: boolean;
  private optionStatus: boolean[];
  dialogRef: MatDialogRef<SuccessModalComponent>;
  
  constructor(private route: ActivatedRoute, public dialog: MatDialog) {
    this.optionValue = [];
    this.optionStatus = [];
  }
  
  ngOnInit() {
    this.showError = false;
    this.errorStatus = false;
    this.route.params.subscribe(params => {
      this.pageId = params.pageId;
      this.quizObj = quiz[`${this.pageId}`];
      this.quizObj.options.forEach(element => {
        this.optionValue.push('');
        this.optionStatus.push(false);
      });
      this.error = this.quizObj.options[0].options[0].msg;
    });
  }

  submitAnswer = () => {
    this.showError = false;
    this.showErrorMsg();
    if (this.optionStatus.indexOf(false) === -1) {
      setTimeout(() => {
        this.dialogRef = this.dialog.open(SuccessModalComponent, {
          hasBackdrop: true,
          panelClass: 'app-full-bleed-dialog'
        });
        this.dialogRef.componentInstance.modalData = this.quizObj;
      }, 2000);
    }
  }

  selectValue = (ev, index, input) => {
    this.showError = false;
    this.optionValueGetter(input, ev.target.value, index);
    this.validationFunction(index); 

  }

  inputValue = (ev, index, selectInput) => {
    this.optionValueGetter(ev.target.value, selectInput, index);
    this.validationFunction(index); 
  }
  
  validationFunction = (index) => {
    for (let x = 0; x < this.quizObj.options[index].options.length; x++) {
      if (this.quizObj.options[index].options[x].value === this.optionValue[index]) {
        this.error = this.quizObj.options[index].options[x].msg;
        this.optionStatus[index] = this.quizObj.options[index].options[x].isCorrect;
        this.errorStatus = this.optionStatus[index];
        break;
      } else if (x === this.optionValue.length - 1) {
        this.error = this.quizObj.options[index].otherOption;
        this.optionStatus[index] = false;
        this.errorStatus = this.optionStatus[index];
      }
    }
  }

  optionValueGetter = (inputValue, selectValue, index) => {
    if (inputValue.length > 0) {
      if (selectValue === '-') {
        this.optionValue[index] = String(-1 * Number(inputValue));
      } else {
        this.optionValue[index] = String(1 * Number(inputValue));
      }
    } else {
      this.optionValue[index] = ''; 
    }
  }

  clearData = (ev, index) => {
    this.showError = false;
    this.optionValue[index] = '';
    ev.target.value = '';
    this.validationFunction(index); 
  }

  showErrorMsg = () => {
    setTimeout(() => {
      this.showError = true;
    }, 200);
  }
}
