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
   * @param allCorrectFlag this variable shows the status of complete activity. True represent that all the options have been correctly answered
   * @param currentMsgStatus this variables represent whether the current option selected from dropdown is correct or not
   * @param hideButtonFlag this variables controls the visibility of submit button
   * @constructor initiate all the params
   */

  /**
   * @method OnInit
   * @memberOf DropdownQuizComponent
   * @description This method will initialize the showError variable along with routing .
   */

  /**
   * @method submitAnswer
   * @memberOf DropdownQuizComponent
   * @description This function will trigger success popup for the activity.
   */
  /**
   * @method selectResult
   * @memberOf DropdownQuizComponent
   * @param event its the event catcher variable which get triggered whenever event is get triggered from child component, it contains all the information about all the activity.
   * @description this method help in showing error whenever the user did some activity while performing the give task.
   */


  /**
   * @method showErrorMsg
   * @memberOf DropdownQuizComponent
   * @description this method help in showing error whenever the user did some activity while performing the give task.
   */
export class DropdownQuizComponent implements OnInit {
  
  dialogRef: MatDialogRef<SuccessModalComponent>;
  private quizObj: any;
  private pageId: String;
  private showError: boolean = false;
  private selected: Array<String>;
  private option: Array<boolean>;
  private error: string;
  private correctAnswer: boolean[];
  private allCorrectFlag: boolean;
  private currentMsgStatus: boolean;
  private hideButtonFlag: boolean;
  private submitBtn: string;

  constructor(private route: ActivatedRoute, public dialog: MatDialog) {
    this.selected = [];
    this.option = [];
    this.correctAnswer = [];
    this.allCorrectFlag = false;
    this.currentMsgStatus = false;
    this.hideButtonFlag = false;
    this.submitBtn = "../assets/images/submit.png";
  }

  ngOnInit() {
    this.showError = false;
    this.route.params.subscribe(params => {
      this.pageId = params.pageId;
      this.quizObj = quiz[`${this.pageId}`];
      this.quizObj.options.forEach((element, index) => {
        this.selected.push('Choose From');
        this.option.push(false);
        element.options.forEach(data => {
          if (data.isCorrect) {
            this.correctAnswer.push(data.option)
          }
        });        
      });
    });
  }

  submitAnswer = () => {
    this.showError = false;
    this.hideButtonFlag = true;
    this.dialogRef = this.dialog.open(SuccessModalComponent, {
      hasBackdrop: true,
      panelClass: 'app-full-bleed-dialog'
    });
    this.dialogRef.componentInstance.modalData = this.quizObj;
  }

  selectResult = (event) => {
    this.hideButtonFlag = true;
    this.error = event.message;
    this.currentMsgStatus = event.answerStatus;
    this.showErrorMsg();
    this.option[event.id] = event.answerStatus;

    // auto hide condition if success option comes
    if (this.currentMsgStatus) {
      setTimeout(() => {
        this.showError = false;
        this.hideButtonFlag = false;
      }, 2000);
    }

    // testing whether all option is correctly added or not
    if (this.option.indexOf(false) === -1) {
      this.allCorrectFlag = true;
    } else {
      this.allCorrectFlag = false;
    }

    // default error condition whenever user choose default option
    if (event.answerValue === 'Select') {
      this.error = this.quizObj.options[event.id].ifEmpty;
      this.option[event.id] = false;
    }
  }

  showErrorMsg = () => {
    this.showError = false;
    setTimeout(() => {
      this.showError = true;
    }, 100);
  }
}
