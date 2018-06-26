import { Component, Input, OnChanges } from '@angular/core';
import { AudioService } from './../../shared-services/audio.service'
@Component({
  selector: 'app-error-msg',
  templateUrl: './error-msg.component.html',
  styleUrls: ['./error-msg.component.scss']
})
export class ErrorMsgComponent implements OnChanges {
  @Input() error: String;
  @Input() success: Boolean;
  private errorAudio: any;

  constructor(private audio: AudioService) {
  }

  ngOnChanges() {
    if (!this.success) {
      this.audio.errorSound.play();
    }
  }

}
