import { Component, OnInit } from '@angular/core';
import { gameElements } from '../../data/gameElements';

@Component({
  selector: 'app-game-elements',
  templateUrl: './game-elements.component.html',
  styleUrls: ['./game-elements.component.scss']
})

/**
  * @name GameElementsComponent<app-game-elements>
  * @description This component is for identifying the characters,background and rules of the game.
  * This is the parent component consist of
  * - Instruction Bar
  * - Select Elements Zone (consist of elements and rule board of the game)
  * - Sorted Elements Zone (consist of separate containers for characters, background and rules)
  * @constructor intializing the data of game elements.
  * @param { object } gameElementsData contains the data of game elememts that is instruction, different questions and options.
  * @param { string } imageId contains the id of element clicked.The id comes from select elements zone component.
  */

export class GameElementsComponent {
  private gameElementsData: any;
  private imageId;

  constructor() {
    this.gameElementsData = gameElements;
  }

  clickedImage(id) {
    this.imageId = id;
  }
}
