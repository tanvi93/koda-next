import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
// import { SuccessModalComponent } from './../../../shared/success-modal/modal.component';



/**
 * @name RadioComponentComponent
 * @description This component will be injected wherever there is need of quiz related activity needed to be perform.
 * @param {object} dataContent input from quiz which will be used for providing header for quiz section along with different quiz options.
 * @param {string} error this variable is use to send error msg which will be use by showErrorMsg Fucntion.
 * @param {boolean} showError this variable is set false initially false inorder to hide error msg and whenever error needed to be displayed * * than this will be set to true.
 * @method radioFunction this function is called radio button is clicked inorder provide appropriate result based on user input.
 * @method showErrorMsg this function is called when the user choose wrong answer from the given choices.
 */

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
