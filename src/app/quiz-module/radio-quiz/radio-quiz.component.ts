import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { quiz } from './../../data/radioMcq';

@Component({
  selector: 'app-radio-quiz',
  templateUrl: './radio-quiz.component.html',
  styleUrls: ['./radio-quiz.component.scss']
})
export class RadioQuizComponent implements OnInit {
  private quizData: any;
  private pageId: String;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.pageId = this.route.snapshot.paramMap.get('pageId');
      this.quizData = quiz[`${this.pageId}`];
    });
  }
}
