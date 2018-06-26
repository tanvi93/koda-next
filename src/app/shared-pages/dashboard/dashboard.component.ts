import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  private userProgress;
  private gameProgress;

  constructor() { }

  ngOnInit() {
    this.userProgress = localStorage.getItem('userProgress');
    this.gameProgress = localStorage.getItem('gameProgress');
    if (this.userProgress) {
      this.userProgress = JSON.parse(this.userProgress);
    }
    if (this.gameProgress) {
      this.gameProgress = JSON.parse(this.gameProgress);
    }
    // console.log(this.userProgress, this.gameProgress);
  }

}
