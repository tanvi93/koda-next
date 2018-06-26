import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
// import { SuccessModalComponent } from './../../../shared/success-modal/modal.component';

@Component({
  selector: 'app-dropdown-component',
  templateUrl: './dropdown-component.component.html',
  styleUrls: ['./dropdown-component.component.scss']
})
export class DropdownComponentComponent implements OnInit {

  @Input() dataContent;
  // dialogRef: MatDialogRef<SuccessModalComponent>;

  showError: boolean = false;
  selected: Array<String>;
  option: Array<boolean>;
  error: string;
  stylingObj: object;


  constructor(public dialog: MatDialog) {
    this.selected = [];
    this.option = [];
  }

  ngOnInit() {
    this.dataContent.options.forEach((element, index) => {
      this.selected.push('Choose From');
      this.option.push(false);
    });
  }

  submitAnswer = (data) => {
    this.showError = false;
    if (this.selected.indexOf('Choose From') !== -1) {
      this.error = this.dataContent.options[this.selected.indexOf('Choose From')].ifEmpty;
      this.showErrorMsg();
    } else if (this.option.indexOf(false) !== -1) {
      this.showErrorMsg();
    } else if (this.option.indexOf(false) === -1) {
      this.showError = false;
      // this.dialogRef = this.dialog.open(SuccessModalComponent, {
      //   hasBackdrop: true,
      //   panelClass: 'app-full-bleed-dialog'
      // });
      // this.dialogRef.componentInstance.modalData = this.dataContent;
    }
  }

  clickOption = (selection, data, ev, i) => {
    setTimeout(() => {
      console.log(this.option[i]);
      console.log(ev.source);

      this.selected[i] = selection;
      ev.source.trigger.nativeElement.style.color = this.option[i] ? 'green' : 'red';
      console.log(ev.source.trigger.nativeElement.style.color);

    }, 200);
  }

  inputValue = (selection, ev, index) => {
    this.showError = false;
    this.selected[index] = selection.option;
    this.option[index] = selection.isCorrect;
    this.error = selection.msg;
  }

  defaultValue = (ev, index) => {
    this.showError = false;
    this.selected[index] = ev.target.textContent;
    this.option[index] = false;
  }

  showErrorMsg = () => {
    setTimeout(() => {
      this.showError = true;
    }, 200);
  }
}
