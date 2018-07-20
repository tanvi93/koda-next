import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { badges } from './../../data/badges';
import { UtilitiesService } from './../../shared-services/utilities.service';
import { AudioService } from './../../shared-services/audio.service';

@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.scss']
})
export class BadgesComponent {
  private pageData;
  private avatarImg: string;
  private badgeBGColor: string;

  constructor(private activeRoute: ActivatedRoute,
    private router: Router,
    private utility: UtilitiesService,
    private audio: AudioService) {
    this.badgeBGColor = "#22c36a";
    this.pageData = badges[this.activeRoute.snapshot.paramMap.get('pageId')];
    let userData = JSON.parse(localStorage.getItem('userProgress'));
    this.avatarImg = userData ? userData.avatar : this.pageData.mascotImg;
    this.audio.stopForeverPlayingAudio();
    this.audio.badgeSound.play();
  }

  buttonClicked() {
    this.audio.badgeSound.pause();
    // this.utility.nextPage(this.router.url.substr(1), this.pageData);
  }

}
