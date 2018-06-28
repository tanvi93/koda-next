import { Component, OnInit } from '@angular/core';
import { AudioService } from './../../shared-services/audio.service';
import { assetsLink } from './../../shared-services/config';

@Component({
  selector: 'app-intro-to-blocks',
  templateUrl: './intro-to-blocks.component.html',
  styleUrls: ['./intro-to-blocks.component.scss']
})
export class IntroToBlocksComponent implements OnInit {
  private scene1: string;
  private scene3: string;
  private mascotImages: Array<string>;
  private mascot: string;
  private msgs: Array<string>;
  private msgIndex: number;
  private show: boolean;

  constructor(private audio: AudioService) {
    this.msgIndex = 0;
    this.msgs = [
      `To make the monkey throw fruits, you have to convert this image on the left...`,
      `... to what you see on the right!`,
      `And to do this, YOU as the game designer have to make the characters on the Stage move and react like in the game!`,
      `You can do this using CODE BLOCKS! `
    ];
    let audios = [
      './assets/audio/intro_to_blocks/Slide_1.mp3',
      './assets/audio/intro_to_blocks/Slide_2.mp3',
      './assets/audio/intro_to_blocks/Slide_3.mp3',
      './assets/audio/intro_to_blocks/Slide_4.mp3',
    ];
    this.imagesLoad();
    this.mascotImagesLoad();
    this.audio.loader(audios);
  }

  ngOnInit() {
    this.mascot = `${assetsLink}monkey_menace/${this.mascotImages[this.msgIndex]}`;
    const playSlideshow = () => {
      this.audio.play(this.msgIndex, () => {
        if (this.msgIndex === this.msgs.length - 1) return;
        this.msgIndex++;
        playSlideshow();
        if (this.msgIndex < this.mascotImages.length) {
          this.mascot = `${assetsLink}monkey_menace/${this.mascotImages[this.msgIndex]}`;
        }
      })
    }
    let interval = setInterval(() => {
      if (this.show) {
        clearInterval(interval);
        playSlideshow();
      }
    }, 10);
  }

  imagesLoad() {
    this.scene1 = `${assetsLink}monkey_menace/mm_image.png`;
    this.scene3 = `${assetsLink}monkey_menace/MM_without_play_min.gif`;
    const onImageLoad = () => { }
    const image1 = new Image();
    const image2 = new Image();
    image1.onload = onImageLoad;
    image2.onload = onImageLoad;
    image1.src = this.scene1;
    image2.src = this.scene3;
  }

  mascotImagesLoad() {
    this.mascotImages = [
      'mascot_pointing_up_left_full.png',
      'mascot_pointing_up_right_full.png',
      'mascot_arms_folded_full.png'
    ];
    let image = null;
    let imageCount = 0;
    const mascotLoad = () => {
      ++imageCount;
      if (imageCount === this.mascotImages.length - 1) {
        this.show = true;
      }
    }
    this.mascotImages.forEach(v => {
      image = new Image();
      image.onload = mascotLoad;
      image.src = `${assetsLink}monkey_menace/${v}`;
    });
  }

}
