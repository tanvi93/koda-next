import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './../../shared-services/api.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  private landingBg: string;
  private mascothandstretch: string;

  constructor(private route: Router, private apiService: ApiService) {
    this.landingBg = '../assets/images/landing-page/homePageCompressed.jpg';
    this.mascothandstretch = '../assets/images/landing-page/mascot-hand-stretch.png';
  }

  ngOnInit() {
    const progress = localStorage.getItem('userProgress');
    if (progress) {
      this.route.navigate(['/dashboard']);
    }
    this.apiService.getUserProgress();
    this.apiService.getGameProgress();
  }

}
