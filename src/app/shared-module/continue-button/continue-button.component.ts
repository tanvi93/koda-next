import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilitiesService } from './../../shared-services/utilities.service';
import { AudioService } from './../../shared-services/audio.service';

@Component({
  selector: 'app-continue-button',
  templateUrl: './continue-button.component.html',
  styleUrls: ['./continue-button.component.scss']
})
export class ContinueButtonComponent implements OnInit{
  @Input() pageData;
  @Input() bottom;
  private style;

  constructor(private activeRoute: ActivatedRoute,
    private router: Router,
    private audio: AudioService,
    private utility: UtilitiesService) { }
  
  ngOnInit() {
    if (this.bottom) {
      this.style = {
        bottom: this.bottom
      }
    }
  }

  goNext() {
    this.audio.stop();
    this.audio.badgeSound.pause();
    this.utility.nextPage(this.router.url.substr(1), this.pageData);
  }

}
