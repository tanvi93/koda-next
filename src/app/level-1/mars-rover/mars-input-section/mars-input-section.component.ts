import { Component, OnInit, Input, Output, EventEmitter, ViewChild, OnChanges } from '@angular/core';
import { InputCoordinateComponent } from '../../shared/input-coordinate/input-coordinate.component';

@Component({
  selector: 'app-mars-input-section',
  templateUrl: './mars-input-section.component.html',
  styleUrls: ['./mars-input-section.component.scss']
})
  
  
/**
   * @name MarsInputSectionComponent<app-mars-input-section>
   * @description This component have the input box which is get triggered whenever the submit button is clicked result in emitting these data to parent component from whenever its get passed to output section of the activity.
   * @param contentData its holds entire detail of the page which is passed as an input to its child component.
   * @param clearDataFlag its hold boolean value which help in clearning data whenever its value changes.
   * @constructor intiate styling obj variable
   */

  /**
   * @method recievedInput
   * @memberOf MarsInputSectionComponent
   * @param $event This varaible object contains input data from child i.e input coordinate component which is passed to the output component to perform task.
   * @description this is an event based method which get triggered whenever inputSectionComponent emits data to parent and from parent through view field method this function get trigger inorder to perform the animation based on user input.
   */

   /**
   * @method clearMsg
   * @memberOf MarsInputSectionComponent
   * @description this method deals with hiding bubble msg component whenever it is get triggered 
   */
export class MarsInputSectionComponent implements OnInit {

  @Input() contentData;
  @Input() clearDataFlag;
  @Output() receiveInput = new EventEmitter<object>();
  @Output() hideMsgData = new EventEmitter<boolean>();
  @ViewChild(InputCoordinateComponent)
  private inputData: InputCoordinateComponent;
  private stylingObj: object;
  constructor() {
    this.stylingObj = [];
  }

  ngOnInit() {
    this.stylingObj = {
      backgroundColor: this.contentData.mascotBg,
      color: '#3e3a48'
    };
  }

  ngOnChanges() {
    this.inputData.clearText();
  }

  recievedInput = (event) => {
    this.receiveInput.emit(event);
  }

  clearMsg = (event) => {
    this.hideMsgData.emit(event);
  }
}