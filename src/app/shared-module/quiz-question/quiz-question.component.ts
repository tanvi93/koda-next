import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-quiz-question',
  templateUrl: './quiz-question.component.html',
  styleUrls: ['./quiz-question.component.scss']
})
export class QuizQuestionComponent implements OnChanges {
  @Input() question: String;

  constructor() { }

  ngOnChanges() {
  }

}
