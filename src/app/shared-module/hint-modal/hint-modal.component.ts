import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UtilitiesService } from './../../shared-services/utilities.service';

@Component({
  selector: 'app-hint-modal',
  templateUrl: './hint-modal.component.html',
  styleUrls: ['./hint-modal.component.scss']
})

/**
 * @name HintModal
 * @description This component is for providing the hint for the quiz.
 * It consist of the open icon image and points which are in the form of list.
 * @param { Array} codingScreenData  hint points from coding screen.
 * @param { Array } codingScreenData hint points from quiz component.
 * @method closeDialog this function is called when the open dialog image is clicked.
 * It closes these open modal.
 */

export class HintModalComponent implements OnInit {
  @Input() codingScreenData;
  @Input() quizData;
  private data;
  private flagValue: any;

  constructor(public hintDialog: MatDialogRef<HintModalComponent>, private utility: UtilitiesService) { }

  ngOnInit() {
    if (this.codingScreenData) {
      let hintImageCount = 0;
      const onImageLoad = () => {
        ++hintImageCount;
        if (hintImageCount === this.codingScreenData.icons[2].content.length) {
        }
      }

      let hintImageLoad = Object.keys(this.codingScreenData.icons[2].content).map(key => {
        let image = new Image();

        image.onload = onImageLoad;
        image.src = this.codingScreenData.icons[2].content[key].unlockHint;

        return image;
      });

      this.data = this.codingScreenData.icons[2].content;
    } else if (this.quizData) {
      this.data = this.quizData.hint;
    }
  }

  closeDialog = () => {
    this.hintDialog.close();
  }

  optionChoosen(ev) {
    this.utility.deductPointsForHint();
    this.codingScreenData.icons[2].currentHintValue = this.codingScreenData.icons[2].content[ev.target.id - 1].unlockHint;
    this.codingScreenData.icons[2].content[ev.target.id - 1].hintActive = true;
    if (this.codingScreenData.icons[2].totalHintAvailable !== 1) {
      this.codingScreenData.icons[2].content[ev.target.id].hintDisable = false;
    }
    this.codingScreenData.icons[2].totalHintAvailable -= 1;
  }

}

