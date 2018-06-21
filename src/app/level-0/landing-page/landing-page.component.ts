import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  private landingBg: string;
  private mascothandstretch: string;

  constructor() {
    this.landingBg = '../assets/images/landing-page/homePageCompressed.jpg';
    this.mascothandstretch = '../assets/images/landing-page/mascot-hand-stretch.png';}

  ngOnInit() {
  }

}
