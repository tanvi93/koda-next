import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
// import { SuccessModalComponent } from './../../../shared/success-modal/modal.component';

@Component({
  selector: 'app-radio-component',
  templateUrl: './radio-component.component.html',
  styleUrls: ['./radio-component.component.scss']
})
export class RadioComponentComponent implements OnInit {
@Input() dataContent;
// dialogRef: MatDialogRef<SuccessModalComponent>;

showError: boolean = false;
error: string;
constructor(public dialog: MatDialog) { }

ngOnInit() {
}

radioFunction = (data) => {
  this.showError = false;
  if (data.msg !== undefined) {
    this.error = data.msg;
    this.showErrorMsg();
  } else {
    this.showError = false;
    // this.dialogRef = this.dialog.open(SuccessModalComponent, {
    //   hasBackdrop: true,
    //   panelClass: 'app-full-bleed-dialog'
    // });
    // this.dialogRef.componentInstance.modalData = this.dataContent;
  }
}

showErrorMsg = () => {
  setTimeout(() => {
    this.showError = true;
  }, 200);
}
}
