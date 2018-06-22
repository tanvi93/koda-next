import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-quiz-wrapper',
  templateUrl: './quiz-wrapper.component.html',
  styleUrls: ['./quiz-wrapper.component.scss']
})
  
export class QuizWrapperComponent implements OnInit {
  @Input() quizObj;

  constructor() { }

  ngOnInit() {
    console.log(this.quizObj);
  }

}
