import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilitiesService } from './../../shared-services/utilities.service';
import { AudioService } from './../../shared-services/audio.service';
import { assetsLink } from './../../shared-services/config';

@Component({
  selector: 'app-algo-steps',
  templateUrl: './algo-steps.component.html',
  styleUrls: ['./algo-steps.component.scss']
})
export class AlgoStepsComponent implements OnInit {
  private algoList: Array<any>;
  private mascot: string;
  private step: string;
  private stepId: number;
  private readyToGoNext: boolean;

  constructor(private activeRoute: ActivatedRoute,
    private router: Router,
    private utility: UtilitiesService,
    private audio: AudioService,
  ) {
    this.mascot = `${assetsLink}monkey_menace/mascot_pointing_up_right_full.png`;
    this.algoList = [
      {
        step: 1,
        stepText: 'Select and position background and characters',
        speech: `Let's get working on the first step of our algorithm!`,
        image: `${assetsLink}monkey_menace/step1.png`
      }, {
        step: 2,
        stepText: 'Make the monkey throw fruits',
        speech: `Let's proceed to the second step of our algorithm!`,
        image: `${assetsLink}monkey_menace/make_the_monkey_throw_fruits.png`
      }, {
        step: 3,
        stepText: 'Make the hat move when player presses the keys',
        speech: `Moving on to the next step of our algorithm!`,
        image: `${assetsLink}monkey_menace/make_the_cap_move.png`
      }, {
        step: 4,
        stepText: 'Increase the score if player catches a fruit',
        speech: `Now that we've coded for all the game characters, let's move on to the rules of the game.`,
        image: `${assetsLink}monkey_menace/step4.png`
      }, {
        step: 5,
        stepText: 'End game if player misses more than five fruits',
        speech: `Tremendous progress! Let’s move on to the last step of your algorithm.`,
        image: `${assetsLink}monkey_menace/game_over.png`
      }
    ];
  }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      this.fillData(params.stepId);
      this.stepId = params.stepId
    });
  }

  fillData(stepId) {
    // const stepName = ['first', 'second', 'third', 'forth', 'fifth'];
    // this.step = stepName[stepId - 1];
    this.audio.loader([`./assets/audio/algo_steps/step_${stepId > 2 ? 2 : stepId}.mp3`]);
    this.audio.play();
  }

  goNext() {
    if (!this.audio.readyToGoNext) return;
    this.utility.nextPage(this.router.url.substr(1));
  }

}
