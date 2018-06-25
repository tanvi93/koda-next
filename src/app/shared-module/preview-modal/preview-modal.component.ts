import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-preview-modal',
  templateUrl: './preview-modal.component.html',
  styleUrls: ['./preview-modal.component.scss']
})

/**
 * @name PreviewModal
 * @description This component contains the video of the game/activity.
 * It consist of the open icon image and video of the game/activity on which the preview is called.
 * @param { string } quizPreview  video path of quiz component.
 * @param { string } data It contains the video link of either coding screen or quiz depending upon which page is called.
 * @param { function } closeDialog this function is called when the open dialog image is clicked.
 * When clicked  it closes the open modal.
 */

export class PreviewModalComponent implements OnInit {
  @Input() quizPreview;
  private data;

  constructor(public previewDialog: MatDialogRef<PreviewModalComponent>) { }

  ngOnInit() {
    if (this.quizPreview) {
      this.data = this.quizPreview;
    }
  }

  closeDialog() {
    this.previewDialog.close();
  }

}
