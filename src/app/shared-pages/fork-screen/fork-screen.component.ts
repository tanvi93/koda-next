import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { forkPageData } from './../../data/forkPage';
import { AudioService } from './../../shared-services/audio.service';

@Component({
  selector: 'app-fork-screen',
  templateUrl: './fork-screen.component.html',
  styleUrls: ['./fork-screen.component.scss']
})
export class ForkScreenComponent implements OnInit {
  private mascotImageSrc: String;
  private headingQuestion: String;
  private pageData: any;
  private leftButtonText: String;
  private rightButtonText: String;
  private bgColor: String;

  constructor(private activateRoute: ActivatedRoute,
    private router: Router,
    private audio: AudioService
  ) {
    this.bgColor = "#22c36a";
  }

  ngOnInit() {
    this.activateRoute.params.subscribe(params => {
      this.pageData = forkPageData[params.pageId];
      this.audio.loader([this.pageData.audio]);
      this.mascotImageSrc = this.pageData.mascotImage;
      this.headingQuestion = this.pageData.question;
      this.leftButtonText = this.pageData.leftButtonText;
      this.rightButtonText = this.pageData.rightButtonText;
      this.audio.play();
    })
  }

  goLeft() {
    this.audio.stop();
    this.router.navigate([`/${this.pageData.leftPath}`]);
  }

  goRight() {
    this.audio.stop();
    this.router.navigate([`/${this.pageData.rightPath}`]);
  }

}
