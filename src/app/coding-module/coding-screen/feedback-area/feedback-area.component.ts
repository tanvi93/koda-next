import { Component, OnInit, Input, ElementRef } from '@angular/core';


@Component({
  selector: 'app-feedback-area',
  templateUrl: './feedback-area.component.html',
  styleUrls: ['./feedback-area.component.scss']
})
export class FeedbackAreaComponent implements OnInit {
  @Input() feedback: String;

  private feedbackStr: String;
  private showButton: boolean;

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    this.feedbackStr = this.feedback;
  }

  ngOnChanges() {
    if (this.feedback && this.feedback.length) {
      if (this.elementRef.nativeElement.clientHeight < 80) {
        this.showButton = true;
      }
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
