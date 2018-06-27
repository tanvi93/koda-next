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
export class FormulaQuizComponent implements OnInit {
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
    });
  }

}
