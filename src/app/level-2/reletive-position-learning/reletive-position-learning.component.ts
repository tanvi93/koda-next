import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AudioService } from './../../shared-services/audio.service';
import { assetsLink } from './../../shared-services/config';

@Component({
  selector: 'app-reletive-position-learning',
  templateUrl: './reletive-position-learning.component.html',
  styleUrls: ['./reletive-position-learning.component.scss']
})
  
export class ReletivePositionLearningComponent implements OnInit {
  private scene1: string;
  private scene3: string;
  private images: Array<string>;
  private mascot: string;
  private msgs: Array<string>;
  private msgIndex: number;
  private show: boolean;
  private changeCss: boolean;

  constructor(private router: Router, private audio: AudioService) {
    this.changeCss = false;
    this.msgIndex = 0;

    this.scene3 = `${assetsLink}monkey_menace/Right image.jpg`;
    this.msgs = [
      `But now that the monkey is moving to a random position, the fruit doesn't reach the monkey's <br> hand as it should! How can we tackle this problem?`,
      `Did you notice that when the monkey is holding the fruit, the fruit is always at a fixed distance <br> from the monkey?`,
      `For example,<br> When monkey is at (0, 13), the fruit is at (-5, 8).`,
      `And when monkey is at (15, 13), the fruit is at (10, 8).`,
      `What can you conclude from these examples?`
    ];
    let audios = [
      './assets/audio/relative_position_learning/Slide_1.mp3',
      './assets/audio/relative_position_learning/Slide_2.mp3',
      './assets/audio/relative_position_learning/Slide_3.mp3',
      './assets/audio/relative_position_learning/Slide_4.mp3',
      './assets/audio/relative_position_learning/Slide_5.mp3',
    ];

    this.imagesLoad();
    this.audio.loader(audios);
  }

  ngOnInit() {
    this.mascot = `${assetsLink}monkey_menace/mascot_pointing_up_right_full.png`;
    this.scene1 = `${assetsLink}monkey_menace/${this.images[this.msgIndex]}`;
    this.audio.play(this.msgIndex);
  }

  imagesLoad() {
    this.images = ['Code.png', '1.jpg', '2.jpg', '3.jpg', '3.jpg'];
    const arr = [...this.images, 'Right image.jpg', 'mascot_pointing_up_right_full.png'];
    let image = null;
    let imageCount = 0;
    const mascotLoad = () => {
      ++imageCount;
      if (imageCount === arr.length - 1) {
        this.show = true;
      }
    }
    arr.forEach(v => {
      image = new Image();
      image.onload = mascotLoad;
      image.src = `${assetsLink}monkey_menace/${v}`;
    });
  }

  clickOnScreen() {
    if (this.audio.readyToGoNext && this.msgIndex <= 3) {
      this.msgIndex++;
      this.mascot = `${assetsLink}monkey_menace/mascot_arms_folded_full.png`;
      this.scene3 = '';
      this.changeCss = true;
      this.scene1 = `${assetsLink}monkey_menace/${this.images[this.msgIndex]}`;
      this.audio.play(this.msgIndex);
    }
  }

}
