import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  @Input() userData;
  private userrankdetails;

  constructor() { 
    this.userrankdetails = [
    {
      image: './assets/images/dashboard/global-rank.png',
      link: './assets/images/dashboard/link-arrow.png',
      status: 'Gloabl Rank',
      count: '157'
    }, {
      image: './assets/images/dashboard/total-points.png',
      status: 'Total Points',
      count: '5787'
    }, {
      image: './assets/images/dashboard/total-points.png',
      link: './assets/images/dashboard/link-arrow.png',
      status: 'Badges Unlocked',
      count: '5'
    }
  ];
  }

  ngOnInit() {
    this.userrankdetails[0].count = this.userData.leaderboardRank;
    this.userrankdetails[1].count = this.userData.pointsEarned;
    this.userrankdetails[2].count = this.userData.badgesEarned;
  }

}
