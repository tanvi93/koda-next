import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-feedback-area',
  templateUrl: './feedback-area.component.html',
  styleUrls: ['./feedback-area.component.scss']
})
export class FeedbackAreaComponent implements OnInit {
  @Input() feedback: String;

  private feedbackStr: String;

  constructor() { }

  ngOnInit() {
    this.feedbackStr = this.feedback;
  }

  ngOnChanges() {
    console.log('hola');
    if (this.feedback && this.feedback.length) {
      let element = document.getElementById("feedback-text");
      setTimeout(() => {
        element.classList.add("animated");
        element.classList.add("pulse");
        setTimeout(() => {
          element.classList.remove("animated");
          element.classList.remove("pulse");
        }, 400);
      }, 200);
    }
  }

}
