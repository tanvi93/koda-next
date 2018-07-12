import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { selectCharacterContent } from './../../../data/selectCharacterContent';

@Component({
  selector: 'app-position-validation',
  templateUrl: './position-validation.component.html',
  styleUrls: ['./position-validation.component.scss']
})
  
  /**
   * @name PositionValidationComponent<app-position-validation>
   * @description This component will deal positioning of choosen character which user have choosen in select character activity
   * @param contentData its holds entire detail of the page which is passed as an input to its child component.
   * @constructor intiate all parameter related to character and its indicator.
   */


  /**
   * @method hideError
   * @memberOf PositionValidationComponent
   * @description this method help in hiding the errror msg whenever user changes position of character which is then conveyed by his parent.
   */
export class PositionValidationComponent implements OnInit, OnChanges {
  @Input() contentData;
  @Input() errorFlag;

  private lockIcon: string;
  private marker: string;
  private msgFlag: boolean;
  private firstTray: string;
  private secondTray: string[];

  constructor() { }
  
  ngOnInit() {
    const selectedIndexs = JSON.parse(localStorage.getItem('gameProgress')).preferenceMap;
    this.lockIcon = this.contentData.lockIcon;
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