import { Component } from '@angular/core';
import { Router, ActivationStart, NavigationStart } from '@angular/router';
import { AudioService } from './shared-services/audio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private gameDetails: any;
  private page: string;
  private showToolbar: boolean;

  constructor(private router: Router, private audio: AudioService) {
    this.showToolbar = true;
    this.router.events.subscribe((val) => {
      if (val instanceof ActivationStart) {
        this.gameDetails = localStorage.getItem('gameProgress');
        if (this.gameDetails) {
          this.gameDetails = JSON.parse(this.gameDetails);
        } else {
          this.gameDetails = {};
        }
      } else if (val instanceof NavigationStart) {
        this.page = val.url.substring(1);
        if (this.page.indexOf('badge') !== -1 || this.page.indexOf('challenge') !== -1 || (this.page.indexOf('game') !== -1 && this.page.indexOf('mm') === -1)) {
          audio.backgroundSound.pause();
        } else if (audio.backgroundSound.paused) {
          audio.backgroundSound.play();
        }
        if (this.page === 'dashboard' || this.page === 'level-1/intro' || this.page === 'level-1/') {
          audio.backgroundSound.pause();
          this.showToolbar = false;
        } else {
          this.showToolbar = true;
        }
      }
    });
    audio.backgroundSound.play();
  }

}