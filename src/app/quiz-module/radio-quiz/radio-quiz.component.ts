import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { SuccessModalComponent } from './../../shared-module/success-modal/success-modal.component';
import { ActivatedRoute } from '@angular/router';
import { quiz } from './../../data/radioMcq';

@Component({
  selector: 'app-radio-quiz',
  templateUrl: './radio-quiz.component.html',
  styleUrls: ['./radio-quiz.component.scss']
})
  
  
  /**
   * @name RadioQuizComponent<app-radio-quiz>
   * @description This component will deal with the activity which are based on radio type
   * In this component we will get data from RadioMCQ.ts based on which page has been triggerd
   * @param QuizObj its holds entire detail of the activity.
   * @param pageId its hold the name of page whoes activity we are creating.
   * @param showError its act as flag variable inorder to hide or reveal error based on user interaction.
   * @param error this variable holds the message which we want to display through error component
   * @param stylingObj this object mostly deals with taking care of style which we want to provide to our radio MCQ header
   * @constructor initiate Sprite service, and add icons srcs
   */

  /**
   * @method OnInit
   * @memberOf RadioQuizComponent
   * @description This method will initialize the showError variable along with routing .
   */

  /**
   * @method radioFunction
   * @memberOf RadioQuizComponent
   * @description help to decide whether user have done the activity properly or not.
   * @param data object which help if validating the activity.
   */

  /**
   * @method showErrorMsg
   * @memberOf RadioQuizComponent
   * @description this method help in showing error whenever the user did some mistake while performing the give task.
   */
export class RadioQuizComponent implements OnInit {
  private quizObj: any;
  private pageId: String;
  private showError: boolean;
  private error: string;
  private stylingObj: object;  
  constructor(private route: ActivatedRoute, public dialog: MatDialog) { }
  dialogRef: MatDialogRef<SuccessModalComponent>;

  ngOnInit() {
    this.showError = false;
    this.route.params.subscribe(params => {
      this.pageId = params.pageId;
      this.quizObj = quiz[`${this.pageId}`];
      console.log(this.quizObj);
    });
    
  }

  radioFunction = (data) => {
    this.showError = false;
    if (data.msg !== undefined) {
      this.error = data.msg;
      this.showErrorMsg();
    } else {
      this.showError = false;
      this.dialogRef = this.dialog.open(SuccessModalComponent, {
        hasBackdrop: true,
        panelClass: 'app-full-bleed-dialog'
      });
      this.dialogRef.componentInstance.modalData = this.quizObj;
    }
  }

  showErrorMsg = () => {
    setTimeout(() => {
      this.showError = true;
    }, 200);
  }
}
