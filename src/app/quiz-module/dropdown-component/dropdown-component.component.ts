import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
// import { SuccessModalComponent } from './../../../shared/success-modal/modal.component';


/**
 * @name DropdownComponentComponent
 * @description This component will be injected wherever there is need of quiz related activity needed to be perform.
 * @param {object} dataContent input from quiz which will be used for providing header for quiz section along with different quiz options.
 * @param {string} error this variable is use to send error msg which will be use by showErrorMsg Fucntion.
 * @param {boolean} showError this variable is set false initially false inorder to hide error msg and whenever error needed to be displayed * * than this will be set to true.
 * @method submitAnswer this function is called inorder to validate whether user have done the task correctly and it will give respective feedback as per user have done the activity
 * @method showErrorMsg this function is called when the user choose wrong answer from the given choices.
 * @method clickOption this function is called whenever the select option is been changed.
 */

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
