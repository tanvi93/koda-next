import { Component, OnInit, Input, OnChanges, Pipe, PipeTransform } from '@angular/core';
import { map } from '../../../map';
import { summary } from '../../../data/levelSummary';

@Pipe({ name: 'ObjNgFor' })
export class ObjNgFor implements PipeTransform {
  transform(value: any, args: any[] = null): any {
    return Object.keys(value);
  }
}

@Component({
  selector: 'app-level-progress',
  templateUrl: './level-progress.component.html',
  styleUrls: ['./level-progress.component.scss']
})

/**
 * @export
 * @class LevelProgressComponent
 * @description The component is to show the progress of the user that is how many levels he/she completed and the summary of each level.
 * @param { object } summaryData This object contains summary of each level of the game.
 * @param { object } gameData This object contains the details of how many levels and modules present in a game.
 * @param { array } arrayOfKey This array contains key of the object summaryData.
 * @param { object } levelObj This object contains the data of level which a user clicks on.
 * @implements {OnInit} Initial the levelObj is given data of first level.
 * @implements {OnChanges} when the gameDetails object data is changed the level progress is shown so the dataPresent flag made true.
 * @param { object } gameDetails This object contains all the data of game's progress stored in local storage.
 */

/**
*@method summary This method is called when the main topics in levels are clicked.
* The data of that particular topic is given to levelObj object.
*@method subLevelSummary This method is called when the subtopics in levels are clicked.
* The data of that particular subtopic is given to levelObj object.
*@method completedLevel This method is called when the completed level tick is clicked.
* Here the data of that level is given to levelObj object.On first click the summary is
* shown and on next click the summary is hidden.
*/

export class LevelProgressComponent implements OnInit, OnChanges {

  @Input() gameDetails;
  @Input() dataPresent: Boolean;
  panelOpenState: Boolean = false;
  private gameData;
  private summaryData;
  private levelObj;
  private arrayOfKey;
  private subLevel;
  private levelData;
  private showHide;
  private selectedLevel: number;
  private clickLevel;
  private imageCount;
  private loading;

  constructor() {
    this.gameData = map;
    this.dataPresent = false;
    this.loading = true;
    this.summaryData = summary;
  }

  ngOnInit() {
    this.arrayOfKey = Object.keys(this.summaryData[0]);
    this.levelObj = this.summaryData[0][this.arrayOfKey[0]];
    this.load();
  }

  ngOnChanges() {
    if (this.gameDetails) {
      this.dataPresent = true;
    }
  }

  completedLevel(i) {
    if (this.summaryData[i]) {
      this.arrayOfKey = Object.keys(this.summaryData[i]);
      this.levelObj = this.summaryData[i][this.arrayOfKey[0]];
      if (this.clickLevel === i) {
        this.showHide = !this.showHide;
      } else {
        this.showHide = false;
        setTimeout(() => {
          this.showHide = true;
        }, 100);

      }
      this.clickLevel = i;
      this.levelData = this.summaryData[i];
      this.selectedLevel = i;
    }

  }

  imageLoad = () => {
    this.loading = false;
  }

  load = () => {
    this.loading = true;
    const image = new Image();
    image.onload = this.imageLoad;
    image.src = this.levelObj.image;
  }

  summary(data) {
    if (!this.subLevel) {
      this.levelObj = data;
      this.load();
    }
    this.subLevel = '';
  }

  subLevelSummary(details) {
    this.subLevel = details;
    this.levelObj = this.subLevel;
    this.load();
  }

  hideModal() {
    this.showHide = false;
  }
}
