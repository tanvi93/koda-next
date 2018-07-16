import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { candy_jar } from '../../data/candyJarActivity';

@Component({
  selector: 'app-candy-jar',
  templateUrl: './candy-jar.component.html',
  styleUrls: ['./candy-jar.component.scss']
})
export class CandyJarComponent implements OnInit {
  private quizObj: any;
  private pageId: String;

  constructor(private route: ActivatedRoute) {
    this.quizObj = candy_jar;
   }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params);
      this.pageId = params.pageId;
      // this.quizObj = quiz[`${this.pageId}`];
    });
    console.log(this.quizObj);
  }

}
