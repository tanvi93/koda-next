import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { quiz } from './../../data/radioMcq';

@Component({
  selector: 'app-radio-quiz',
  templateUrl: './radio-quiz.component.html',
  styleUrls: []
})
export class RadioQuizComponent implements OnInit {
  private quizObj: any;
  private pageId: String;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.pageId = params.pageId;
      this.quizObj = quiz[`${this.pageId}`];
    });
  }
}
