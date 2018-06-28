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
  private optionValue: any;
  
  constructor(private route: ActivatedRoute, public dialog: MatDialog) {
    this.optionValue = [];
  }
  dialogRef: MatDialogRef<SuccessModalComponent>;

  ngOnInit() {
    this.showError = false;
    this.route.params.subscribe(params => {
      this.pageId = params.pageId;
      this.quizObj = quiz[`${this.pageId}`];
      this.quizObj.options.forEach(element => {
        this.optionValue.push('');
      });
    });
  }

  submitAnswer = () => {
    this.error = '';
    this.showError = false;
    this.quizObj.options.forEach(element => {
      element.options.forEach(data => {
        console.log(data);
        
      });
    });
  }

  selectValue = (ev, index, input) => {
    this.optionValue[index] = ev.target.value + input;
    console.log(this.optionValue[index], input, ev.target.value);
    
  }

  inputValue = (ev, index, selectInput) => {
    this.optionValue[index] = selectInput + ev.target.value;
    console.log(this.optionValue[index]);
    console.log(Number('-0') + Number('-0'));
    
  }
}
