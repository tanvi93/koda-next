import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { SuccessModalComponent } from './../../shared-module/success-modal/success-modal.component';
import { ActivatedRoute } from '@angular/router';
import { quiz } from './../../data/dropdownMcq';

@Component({
  selector: 'app-dropdown-quiz',
  templateUrl: './dropdown-quiz.component.html',
  styleUrls: ['./dropdown-quiz.component.scss']
})
  
/**
   * @name DropdownQuizComponent<app-dropdown-quiz>
   * @description This component will deal with the activity which are based on dropdown type
   * In this component we will get data from dropdownMCQ.ts based on which page has been triggerd
   * @param QuizObj its holds entire detail of the activity.
   * @param pageId its hold the name of page whoes activity we are creating.
   * @param showError its act as flag variable inorder to hide or reveal error based on user interaction.
   * @param error this variable holds the message which we want to display through error component
   * @param stylingObj this object mostly deals with taking care of style which we want to provide to our radio MCQ header
   * @constructor initiate Sprite service, and add icons srcs
   */

  /**
   * @method OnInit
   * @memberOf DropdownQuizComponent
   * @description This method will initialize the showError variable along with routing .
   */

  /**
   * @method submitAnswer
   * @memberOf DropdownQuizComponent
   * @description help to decide whether user have done the activity properly or not.
   * @param data object which help if validating the activity.
   */

   /**
   * @method defaultValue
   * @memberOf DropdownQuizComponent
   * @description help to decide whether user have done the activity properly or not.
   * @param data object which help if validating the activity.
   */

   /**
   * @method inputValue
   * @memberOf DropdownQuizComponent
   * @description help to decide whether user have done the activity properly or not.
   * @param data object which help if validating the activity.
   */
   /**
   * @method clickOption
   * @memberOf DropdownQuizComponent
   * @description help to decide whether user have done the activity properly or not.
   * @param data object which help if validating the activity.
   */

  /**
   * @method showErrorMsg
   * @memberOf DropdownQuizComponent
   * @description this method help in showing error whenever the user did some mistake while performing the give task.
   */
export class DropdownQuizComponent implements OnInit {
  
  dialogRef: MatDialogRef<SuccessModalComponent>;
  private quizObj: any;
  private pageId: String;
  private showError: boolean = false;
  private selected: Array<String>;
  private option: Array<boolean>;
  private error: string;
  private stylingObj: object;


  constructor(private route: ActivatedRoute, public dialog: MatDialog) {
    this.selected = [];
    this.option = [];
  }

  ngOnInit() {
    
    this.showError = false;
    console.log(quiz);
    
    this.route.params.subscribe(params => {
      this.pageId = params.pageId;
      this.quizObj = quiz[`${this.pageId}`];
      console.log(this.quizObj);
      
      this.quizObj.options.forEach((element, index) => {
        this.selected.push('Choose From');
        this.option.push(false);
      });
    });
  }

  submitAnswer = (data) => {
    this.showError = false;
    if (this.selected.indexOf('Choose From') !== -1) {
      this.error = this.quizObj.options[this.selected.indexOf('Choose From')].ifEmpty;
      this.showErrorMsg();
    } else if (this.option.indexOf(false) !== -1) {
      this.showErrorMsg();
    } else if (this.option.indexOf(false) === -1) {
      this.showError = false;
      this.dialogRef = this.dialog.open(SuccessModalComponent, {
        hasBackdrop: true,
        panelClass: 'app-full-bleed-dialog'
      });
      this.dialogRef.componentInstance.modalData = this.quizObj;
    }
  }

  clickOption = (selection, data, ev, i) => {
    setTimeout(() => {
      // console.log(this.option[i]);
      // console.log(ev.source);

      this.selected[i] = selection;
    }, 200);
  }

  inputValue = (selection, ev, index) => {
    this.showError = false;
    this.selected[index] = selection.option;
    this.option[index] = selection.isCorrect;
    this.error = selection.msg;
  }

  defaultValue = (ev, index) => {
    this.showError = false;
    this.selected[index] = ev.target.textContent;
    this.option[index] = false;
  }

  showErrorMsg = () => {
    setTimeout(() => {
      this.showError = true;
    }, 200);
  }
}
