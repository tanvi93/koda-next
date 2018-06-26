import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { stories } from './../../data/storyline';
import { UtilitiesService } from './../../shared-services/utilities.service';
import { AudioService } from './../../shared-services/audio.service';

@Component({
  selector: 'app-storyline-screen',
  templateUrl: './storyline-screen.component.html',
  styleUrls: ['./storyline-screen.component.scss']
})
export class StorylineScreenComponent implements OnInit {
  private show: boolean;
  private pageId: string;
  private story: any;
  private activeIndex: number;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private audio: AudioService,
    private utility: UtilitiesService) {
    this.show = true;
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.pageId = params.pageId;
      this.story = stories[`${this.pageId}`];
      if (this.story.backgroundAudio) {
        this.audio.loader([this.story.backgroundAudio]);
        this.audio.playForever();
      }
      let image = null;
      this.story.backgroundImgs.forEach(v => {
        image = new Image();
        image.src = v;
      });
      this.activeIndex = 0;
    });
  }

  goNext() {
    if (this.story.backgroundImgs.length - 1 === this.activeIndex) {
      this.utility.nextPage(this.router.url.substr(1));
      return;
    }
    this.activeIndex++;
  }

}
