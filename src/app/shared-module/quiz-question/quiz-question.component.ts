import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-quiz-question',
  templateUrl: './quiz-question.component.html',
  styleUrls: ['./quiz-question.component.scss']
})
export class QuizQuestionComponent implements OnChanges {
  @Input() question: String;
  // @Input() style;
  private stylingObj;

  constructor() { }

  ngOnChanges() {
    // this.stylingObj = {
    //   'background-color': this.style.backgroundColor,
    //   'font-size': this.style.fontSize,
    //   'color': this.style.color
    // };
  }

}
