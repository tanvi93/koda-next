import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-select-option',
  templateUrl: './select-option.component.html',
  styleUrls: ['./select-option.component.scss']
})
  /**
   * @name SelectOptionComponent<app-select-option>
   * @description This component will deal with the activity which are based on dropdown type
     In this component we will get data from dropdownMCQ.ts based on which page has been triggerd
   * @constructor initiate all the params
   */
  
   /**
   * @method defaultValue
   * @memberOf SelectOptionComponent
   * @description it is initialize as default function which get triggered when user select default option from the dropdown list.
   */

   /**
   * @method inputValue
   * @memberOf SelectOptionComponent
   * @description help to decide whether user have done the activity properly or not.
   * @param selection object which gives information about which option is been selected.
   */

   /**
   * @method clickOption
   * @memberOf SelectOptionComponent
   * @description this method help in emitting actionDetail parameter to parent component whenever it detect change.
   */
export class SelectOptionComponent  {

  @Input() dataOption;
  @Input() correctAnswer;
  @Input() currentIndex;
  @Output() actionDetail = new EventEmitter<object>();

  private actionObj: any;

  constructor() { 
    this.actionObj = 
      {
        id: null,
        message: '',
        answerStatus: false,
        answerValue: ''
      }
  }

  data = new FormControl('Select', [
  ]);

  clickOption = () => {
    this.actionDetail.emit(this.actionObj);
  }

  inputValue = (selection) => {
    this.actionObj.answerValue = selection.option;
    this.actionObj.answerStatus = selection.isCorrect;
    this.actionObj.message = selection.msg;
    this.actionObj.id = this.currentIndex;
    this.actionDetail.emit(this.actionObj);
  }

  defaultValue = () => {
    this.actionObj.answerValue = 'Select';
    this.actionObj.answerStatus = false;
    this.actionObj.message = '';
    this.actionObj.id = this.currentIndex;
    this.actionDetail.emit(this.actionObj);
  }
}
