import { Component, ViewChild } from '@angular/core';
import { selectCharacterContent } from './../../data/selectCharacterContent';
import { CharacterDisplaySectionComponent } from  './character-display-section/character-display-section.component'

@Component({
  selector: 'app-select-characters',
  templateUrl: './select-characters.component.html',
  styleUrls: ['./select-characters.component.scss']
})
 
  /**
   * @name SelectCharactersComponent<app-select-characters>
   * @description This component will deal selecting character from the list which will be use for future game making.
   * @param selectCharacterOutput its a selector for CharacterDisplaySectionComponent through which we will hiding error section of its child whenever the event emitter from selection sections get triggered.
   * @param characterData its holds entire detail of the page which is passed as an input to its child component.
   * @constructor intiate checkData variable
   */

  /**
   * @method recievedImagePath
   * @memberOf SelectCharactersComponent
   * @param $event This varaible object contains data of the character which user want to see in display seciton.
   * @description this is an event based method which get triggered whenever characterSelectionSectionComponent emits data .
   */
  
export class SelectCharactersComponent {
  @ViewChild(CharacterDisplaySectionComponent)
   
  private selectCharacterOutput: CharacterDisplaySectionComponent;  
  private characterData = selectCharacterContent;
  private contentData = selectCharacterContent;
  private imagePath: any;
  constructor() {
    this.imagePath = {
      backgroundPath: {
        id: null,
        path: ''
      },
      monkeyImage: {
        id: null,
        path: ''
      },
      fruitImage: {
        id: null,
        path: ''
      },
      capImage: {
        id: null,
        path: ''
      }
    };
  }

  recievedImagePath($event) {
    this.imagePath = $event;
    this.selectCharacterOutput.hideErrorMsg();
  }
}