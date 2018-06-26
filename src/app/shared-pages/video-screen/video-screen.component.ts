import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { videoData } from './../../data/videoPages';

@Component({
  selector: 'app-video-screen',
  templateUrl: './video-screen.component.html',
  styleUrls: ['./video-screen.component.scss']
})
export class VideoScreenComponent implements OnInit {
  private showButton: boolean;
  private pageId: string;
  private pageData: any;
  private bgColor: String;
  private bottomPosition: String;

  constructor(private route: ActivatedRoute) {
    this.showButton = false;
    this.bgColor = 'transparent';
    this.bottomPosition = '-15px';
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const pageId = params['pageId'];
      this.pageData = videoData[pageId];
      const video: HTMLVideoElement = <HTMLVideoElement>document.getElementById('videoPlayer');
      video.src = this.pageData.src;
      video.play();
      this.showButton = false;
      setTimeout(() => {
        this.showButton = true;
      }, 17 * 1000);
    });
  }

}
