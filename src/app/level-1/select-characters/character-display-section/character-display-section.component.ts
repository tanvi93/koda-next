import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { SuccessModalComponent } from './../../../shared-module/success-modal/success-modal.component';
import { Router } from '@angular/router';
import { UtilitiesService } from './../../../shared-services/utilities.service';

@Component({
  selector: 'app-character-display-section',
  templateUrl: './character-display-section.component.html',
  styleUrls: ['./character-display-section.component.scss']
})

    /**
   * @name CharacterDisplaySectionComponent<app-character-display-section>
   * @param imageData its input variable which will hold the data related to what user want to see on the display screen and this all data is received from its sibiling through parent.
   * @param contentData its holds entire detail of the page which is accepted from its parent component.
   * @description This component will deal displaying character which its sibiling have selected.
   */

  /**
   * @method selectionList
   * @memberOf CharacterDisplaySectionComponent
   * @description this method get triggered whenever user click submit button. This method check the validation whether all the character have been selected or not and provide message accordingly.
   */

  /**
   * @method hideErrorMsg
   * @memberOf CharacterDisplaySectionComponent
   * @description this method is triggered from the parent through child component concept which helps in hidding msg whenever user is doing something in other child of its parent.
   */

  
export class CharacterDisplaySectionComponent implements OnInit {
  dialogRef: MatDialogRef<SuccessModalComponent>;

  @Input() contentData;
  @Input() imageDetail;
  private errorMsgFlag: boolean;
  constructor(public dialog: MatDialog, private utility: UtilitiesService, private router: Router) { }

  ngOnInit() {
    this.errorMsgFlag = false;
  }

  selectionList() {
    if (this.imageDetail.backgroundPath.path === '' || this.imageDetail.monkeyImage.path === '' ||
      this.imageDetail.fruitImage.path === '' || this.imageDetail.capImage.path === '') {
      this.errorMsgFlag = true;
    } else {
      const imageIndexes = {
        monkeyIndex: this.imageDetail.monkeyImage.id,
        fruitIndex: this.imageDetail.fruitImage.id,
        capIndex: this.imageDetail.capImage.id,
        background: this.imageDetail.backgroundPath.id,
      }
      this.utility.updateLooks(imageIndexes);
      this.dialogRef = this.dialog.open(SuccessModalComponent, {
        hasBackdrop: true,
        disableClose: true,
        panelClass: 'app-full-bleed-dialog'
      });
      this.dialogRef.componentInstance.modalData = this.contentData;
    }
  }

  hideErrorMsg() {
    this.errorMsgFlag = false;
  }
}