import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilitiesService } from './../../shared-services/utilities.service';
import { AudioService } from './../../shared-services/audio.service';
import { assetsLink } from './../../shared-services/config';

@Component({
  selector: 'app-mascot-talking',
  templateUrl: './mascot-talking.component.html',
  styleUrls: ['./mascot-talking.component.scss']
})
export class MascotTalkingComponent implements OnInit {
  private mascot: String;
  private pageId;
  private speech: any;
  private VOs: any;
  private activeIndex;
  private audios: Array<any>;
  private currentAudio;
  private speechData;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private utility: UtilitiesService,
    private audio: AudioService) { 
    this.mascot = `${assetsLink}monkey_menace/mascot_arms_folded_full.png`;
    this.activeIndex = 0;
    this.speech = {
      intro_to_mm: [
        'Hello, there! I am Milo. Welcome to KODA!',
        'I will keep you company throughout your journey here. I am sure well be good friends soon!',
        'Ever Imagined a game thats played according to YOUR rules!',
        'Here you can not just imagine but actually create your own game - the way you like it!',
        `Have you played the game Monkey Menace before? It's my favourite! Let's check it out!`
      ],
      intro_to_algo: [
        'Before you start building a game, you should always chalk out an ALGORITHM.',
        'An algorithm is a step-by-step plan for doing something.',
        'It will help you stay on track and avoid mistakes.'
      ]
    }
    this.VOs = {
      intro_to_mm: [
        './assets/audio/intro_to_mm/Slide_1.mp3',
        './assets/audio/intro_to_mm/Slide_2.mp3',
        './assets/audio/intro_to_mm/Slide_3.mp3',
        './assets/audio/intro_to_mm/Slide_4.mp3',
        './assets/audio/intro_to_mm/Slide_5.mp3'
      ],
      intro_to_algo: [
        './assets/audio/intro_to_algo/Slide_1.mp3',
        './assets/audio/intro_to_algo/Slide_2.mp3',
        './assets/audio/intro_to_algo/Slide_3.mp3'
      ]
    }
  }

  ngOnInit() {
    this.speechData = { width: '75%',  position: 'bottom', autoHideMsg: false };
    this.route.params.subscribe(params => {
      this.pageId = params.pageId;
      this.audio.loader(this.VOs[this.pageId]);
      this.audio.play(0);
    });
  }

  goNext() {
    if (!this.audio.readyToGoNext) return;
    if (this.speech[this.pageId].length - 1 === this.activeIndex) {
      this.utility.nextPage(this.router.url.substr(1));
      return;
    }
    this.activeIndex++;
    this.audio.play(this.activeIndex);
  }

}