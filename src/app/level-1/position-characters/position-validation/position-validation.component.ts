import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { selectCharacterContent } from './../../../data/selectCharacterContent';

@Component({
  selector: 'app-position-validation',
  templateUrl: './position-validation.component.html',
  styleUrls: ['./position-validation.component.scss']
})
export class PositionValidationComponent implements OnInit, OnChanges {
  @Input() contentData;
  @Input() errorFlag;

  private lockIcon: string;
  private addIcon: string;
  private marker: string;
  private msgFlag: boolean;
  private firstTray: string;
  private secondTray: string[];

  constructor() { }
  
  ngOnInit() {
    const selectedIndexs = JSON.parse(localStorage.getItem('gameProgress')).preferenceMap;
    this.lockIcon = this.contentData.lockIcon;
    this.addIcon = this.contentData.addIcon;
    this.marker = this.contentData.checkedIcon;
    this.msgFlag = true;
    this.contentData.imageTray[0].imageList[0] = selectCharacterContent.characterList[0].list[selectedIndexs.background];
    this.contentData.imageTray[1].imageList[0] = selectCharacterContent.characterList[1].list[selectedIndexs.monkey];
    this.contentData.imageTray[1].imageList[1] = selectCharacterContent.characterList[2].list[selectedIndexs.fruit];
    this.contentData.imageTray[1].imageList[2] = selectCharacterContent.characterList[3].list[selectedIndexs.cap];
  }

  ngOnChanges() {
    if (this.errorFlag) {
      this.msgFlag = false;
    }
  }

  hideError = () => {
    this.msgFlag = true;
    this.errorFlag = false;
  }
}