import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material';
import { UtilitiesService } from './../../shared-services/utilities.service';
import { AudioService } from './../../shared-services/audio.service';

@Component({
  selector: 'app-success-modal',
  templateUrl: './success-modal.component.html',
  styleUrls: ['./success-modal.component.scss']
})
export class SuccessModalComponent implements OnInit {

  private data;
  private successmascot: string;
  private successAudio: any;
  @Input() modalData;
  @Input() gameElementModalObj;
  private scoreValue = '0';
  private gameDetails;

  constructor(public successDialog: MatDialogRef<SuccessModalComponent>, private router: Router,
    private utility: UtilitiesService, private audio: AudioService) {
    this.gameDetails = localStorage.getItem('gameProgress');
    this.gameDetails = JSON.parse(this.gameDetails);
    this.scoreValue = this.gameDetails.pointsEarned;
  }

  ngOnInit() {
    if (this.modalData) {
      this.data = this.modalData;
      if (!this.modalData.popupMascotImage) {
        this.modalData.popupMascotImage = './assets/images/monkey_menace/mascot_thumbs_up_head.png';
      }
    } else {
      this.data = this.gameElementModalObj;
    }
    this.audio.successSound.play();
    this.scoreValue = this.utility.getPointsForPage(this.router.url.substr(1));

  }

  buttonClicked() {
    this.successDialog.close();
    this.utility.nextPage(this.router.url.substr(1));
  }

}
