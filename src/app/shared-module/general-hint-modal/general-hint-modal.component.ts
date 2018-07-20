import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-general-hint-modal',
  templateUrl: './general-hint-modal.component.html',
  styleUrls: ['./general-hint-modal.component.scss']
})
export class GeneralHintModalComponent implements OnInit {
  public activityHintData;
  @Input() quiz;
  private changeClass;

  constructor(public hintDialog: MatDialogRef<GeneralHintModalComponent>) {
    this.changeClass = false;
  }

  ngOnInit() {
    if (this.quiz) {
      this.changeClass = true;
      this.activityHintData = this.quiz;
    }
}

  closeDialog() {
    this.hintDialog.close();
  }
}
