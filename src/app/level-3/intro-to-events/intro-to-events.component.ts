import { Component, OnInit } from '@angular/core';
import { assetsLink } from './../../shared-services/config';

@Component({
  selector: 'app-intro-to-events',
  templateUrl: './intro-to-events.component.html',
  styleUrls: ['./intro-to-events.component.scss']
})
export class IntroToEventsComponent implements OnInit {
  private loading: boolean;
  private msgs: Array<any>;
  private msgIndex: number;
  private mascot: string;
  private changeCss: boolean;

  constructor() {
    this.msgIndex = 0;
    this.loading = true;
    this.changeCss = false;
    this.msgs = [
      `In games, the player's action -- pressing a key, clicking the mouse, or typing something -- is called an Event. The thing that happens when such an event occurs is called the Response.`,
      `Thus, left and right arrow key presses are Events and the cap moving left and right are respective Responses.`,
      `Blocks used to code for such events are called Event Blocks.`,
      `In the game, when the player presses the left arrow key, the code under the event block is executed and the cap moves 2 steps to the left.`
    ];
  }

  ngOnInit() {
    this.mascot = `${assetsLink}monkey_menace/mascot_arms_folded_full.png`;
    // this.scene1 = `${assetsLink}monkey_menace/${this.images[this.msgIndex]}`;
  }

  clickOnScreen() {
    if (this.msgIndex < 3) {
    this.msgIndex++;
    if (this.msgIndex == 2) {
      this.mascot = `${assetsLink}monkey_menace/mascot_pointing_up_right_full.png`;
      this.changeCss = true;
    }
      // this.mascot = `${assetsLink}monkey_menace/mascot_arms_folded_full.png`;
      // this.scene3 = '';
      // this.changeCss = true;
      // this.scene1 = `${assetsLink}monkey_menace/${this.images[this.msgIndex]}`;
      // this.audio.play(this.msgIndex);
    }
  }
}
