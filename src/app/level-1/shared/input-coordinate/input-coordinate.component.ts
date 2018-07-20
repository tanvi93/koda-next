import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-input-coordinate',
  templateUrl: './input-coordinate.component.html',
  styleUrls: ['./input-coordinate.component.scss']
})
  
  
/**
   * @name InputCoordinateComponent<app-input-coordinate>
   * @description This component have the input box which is get triggered whenever the submit button is clicked result in emitting these data to parent component from whenever its get passed to output section of the activity.
   * @param contentData its holds entire detail of the page which is passed as an input to its child component.
   * @param clearDataFlag its hold boolean value which help in clearning data whenever its value changes.
   * @constructor intiate styling obj variable
   */

  /**
   * @method clearInput
   * @memberOf InputCoordinateComponent
   * @param $event This varaible object contains input data from child i.e input coordinate component which is passed to the output component to perform task.
   * @description this is an event based method which get triggered whenever inputSectionComponent emits data to parent and from parent through view field method this function get trigger inorder to perform the animation based on user input.
   */

   /**
   * @method clearText
   * @memberOf InputCoordinateComponent
   * @param ev this is an event object variable.
   * @description this method deals with clearing input text from the input box along with enabling it so that user can enter value.
   */

  /**
   * @method fetchInput
   * @memberOf InputCoordinateComponent
   * @param inputx this variable contain input value of input text 1.
   * @param inputy this variable contain input value of input text 2.
   * @description this method deals with hiding bubble msg component whenever it is get triggered 
   */

  /**
   * @method onKeydown
   * @memberOf InputCoordinateComponent
   * @param ev this is an event object variable which content data when keypress event get triggerd.
   * @description this method deals with whether the enter key should be displayed or not in input textbox.
   */
  
export class InputCoordinateComponent implements OnInit, OnChanges {
  @Input() contentData;
  @Input() clearDataFlag;
  @Output() inputData = new EventEmitter<any>();
  @Output() errorMsgFlag = new EventEmitter<boolean>();
  private inputCoordinateValue: any;
  private inputParaX: string;
  private inputParaY: string;
  private textX: string;
  private textY: string;
  private inputFlag: boolean[];
  constructor() { 
    this.inputCoordinateValue = [null, null];
    this.inputFlag = [false, false, false];
  }

  ngOnInit() {
    this.textX = '';
    this.textY = '';
    this.inputParaX = this.contentData.inputParaContent1;
    this.inputParaY = this.contentData.inputParaContent2;
  }

  ngOnChanges() {
    this.clearText();
  }

  clearInput(ev) {
    this.errorMsgFlag.emit(true);
    ev.target.value = '';
  }
 
  clearText() {
    this.textX = '';
    this.textY = '';
    this.inputFlag = [false, false, false];
  }

  fetchInput(inputx, inputy) {
    if (inputx === '-') {
      inputx = '';
    }
    if (inputy === '-') {
      inputy = '';
    }
    this.inputCoordinateValue[0] = inputx;
    this.inputCoordinateValue[1] = inputy;
    this.inputFlag = [true, true, true];
    this.inputData.emit(this.inputCoordinateValue)
  }


  onKeypress(event, data) {
    const pattern = /^[-|+]?[0-9]\d{0,1}?$/;
    if (!pattern.test(data) && data.length > 1) {
      event.target.value = data.slice(0, -1); 
     }
  }
}
