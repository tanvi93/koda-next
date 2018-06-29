import { Component, OnInit } from '@angular/core';
import { AudioService } from './../../shared-services/audio.service';
import { assetsLink } from './../../shared-services/config';

@Component({
  selector: 'app-repetitive-code',
  templateUrl: './repetitive-code.component.html',
  styleUrls: ['./repetitive-code.component.scss']
})
export class RepetitiveCodeComponent implements OnInit {
  private scene1: string;
  private mascot: string;
  private msgs: Array<string>;
  private msgIndex: number;
  private show: boolean;

  constructor(private audio: AudioService) {
    this.msgIndex = 0;

    this.imagesLoad();
    this.scene1 = `${assetsLink}monkey_menace/repetitive-code.png`;
    this.mascot = `${assetsLink}monkey_menace/mascot_pointing_up_left_full.png`;

    this.msgs = [
      `So our code for the monkey throwing 5 fruits from different positions would look like this.`,
      `This code will keep getting longer if the monkey has to throw more fruits.<br> I\'m sure there\'s a simpler way to do this!`
    ];
    let audios = [
      './assets/audio/repetitive_code/Slide_1.mp3',
      './assets/audio/repetitive_code/Slide_2.mp3'
    ];

    this.audio.loader(audios);
  }

  ngOnInit() {
    this.audio.play(this.msgIndex);
  }

  imagesLoad() {
    let images = ['mascot_pointing_up_left_full.png', 'mascot_arms_folded_left_full.png', 'repetitive-code.png'];
    let image = null;
    let imageCount = 0;
    const mascotLoad = () => {
      ++imageCount;
      if (imageCount === images.length - 1) {
        this.show = true;
      }
    }
    images.forEach(v => {
      image = new Image();
      image.onload = mascotLoad;
      image.src = `${assetsLink}monkey_menace/${v}`;
    });
  }

  goNext() {
    if (this.audio.readyToGoNext && this.msgIndex <= this.msgs.length-1) {
      this.msgIndex++;
      this.mascot = `${assetsLink}monkey_menace/mascot_arms_folded_left_full.png`;
      this.audio.play(this.msgIndex);
    }
  }
}
