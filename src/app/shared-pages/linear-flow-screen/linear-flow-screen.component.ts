import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilitiesService } from './../../shared-services/utilities.service';
import { continueScreenData } from './../../data/continueScreen';
import { AudioService } from './../../shared-services/audio.service';

@Component({
  selector: 'app-linear-flow-screen',
  templateUrl: './linear-flow-screen.component.html',
  styleUrls: ['./linear-flow-screen.component.scss']
})
export class LinearFlowScreenComponent implements OnInit, OnDestroy {
  private mascotImageSrc: String;
  private headingQuestion: String;
  private pageData: any;
  private leftButtonText: String;
  private rightButtonText: String;

  constructor(private activateRoute: ActivatedRoute,
    private router: Router,
    private utility: UtilitiesService,
    private audio: AudioService
  ) {
  }

  ngOnInit() {
    this.activateRoute.params.subscribe(params => {
      this.pageData = continueScreenData[params.pageId];
      this.mascotImageSrc = this.pageData.mascotImage;
      this.headingQuestion = this.pageData.question;
      this.audio.loader([this.pageData.audio]);
      this.audio.play();
    })
  }

  ngOnDestroy() {
    this.audio.stop();
  }

}
