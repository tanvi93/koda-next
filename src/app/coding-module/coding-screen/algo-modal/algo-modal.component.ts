import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-algo-modal',
  templateUrl: './algo-modal.component.html',
  styleUrls: ['./algo-modal.component.scss']
})
export class AlgoModalComponent {
  public codingScreenData;

  constructor(public algoDialog: MatDialogRef<AlgoModalComponent>) { }

  closeDialog() {
    this.algoDialog.close();
  }

}
