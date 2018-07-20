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
  private speechCss;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private utility: UtilitiesService,
    private audio: AudioService) {
    this.mascot = `${assetsLink}monkey_menace/mascot_arms_folded_full.png`;
    this.speech = `Just like we did for the monkey, we should also make sure that the cap doesn't go out of the Stage even if the player keeps pressing the left or right arrow key.`;
    // this.VOs = {
    //   intro_to_mm: [
    //     './assets/audio/intro_to_mm/Slide_1.mp3',
    //     './assets/audio/intro_to_mm/Slide_2.mp3',
    //     './assets/audio/intro_to_mm/Slide_3.mp3',
    //     './assets/audio/intro_to_mm/Slide_4.mp3',
    //     './assets/audio/intro_to_mm/Slide_5.mp3'
    //   ],
    //   intro_to_algo: [
    //     './assets/audio/intro_to_algo/Slide_1.mp3',
    //     './assets/audio/intro_to_algo/Slide_2.mp3',
    //     './assets/audio/intro_to_algo/Slide_3.mp3'
    //   ]
    // }
  }

  ngOnInit() {
    this.speechCss = { width: '75%', position: 'bottom' };
      // this.audio.loader(this.VOs[this.pageId]);
      // this.audio.play(0);
  }

  goNext() {
    if (!this.audio.readyToGoNext) return;
    this.utility.nextPage(this.router.url.substr(1));
    return;
  }

}
