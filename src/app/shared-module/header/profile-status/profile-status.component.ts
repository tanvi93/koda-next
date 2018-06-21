import { Component, OnChanges, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { UtilitiesService } from './../../../shared-services/utilities.service';

@Component({
  selector: 'app-profile-status',
  templateUrl: './profile-status.component.html',
  styleUrls: ['./profile-status.component.scss']
})
export class ProfileStatusComponent implements OnChanges {
  @Input() gameDetails;
  private badgeImage = 'assets/images/badgeIcon.svg';
  private scoreImage = 'assets/images/scoreIcon.svg';
  private badgeValue = '3';
  private scoreValue = '3000';

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private utility: UtilitiesService) {
    this.utility.scoreChangeCallback(() => {
      this.onScoreChnage();
    });
    iconRegistry.addSvgIcon(
      'badgeImage',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/badgeIcon.svg'));
    iconRegistry.addSvgIcon(
      'scoreImage',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/scoreIcon.svg'));
  }

  onScoreChnage() {
    this.scoreValue = JSON.parse(localStorage.getItem('gameProgress')).pointsEarned;
  }

  ngOnChanges() {
    if (this.gameDetails) {
      this.scoreValue = this.gameDetails.pointsEarned;
      this.badgeValue = this.gameDetails.badgesEarned;
    }
  }

}
