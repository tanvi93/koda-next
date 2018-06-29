import { Component, OnInit } from '@angular/core';
import { assetsLink } from './../../shared-services/config';

@Component({
  selector: 'app-summary-game-elements',
  templateUrl: './summary-game-elements.component.html',
  styleUrls: ['./summary-game-elements.component.scss']
})
export class SummaryGameElementsComponent implements OnInit {
  private mascot: string;
  private msgs: Array<string>;
  private msgIndex: number;
  private showButton: any;

  constructor() {
    this.mascot = `${assetsLink}monkey_menace/mascot_arms_folded_left_full.png`;
    this.showButton = false;
  }

  ngOnInit() {
    setTimeout(() => {
      this.showButton = true;
    }, 20 * 1000);
  }

}
