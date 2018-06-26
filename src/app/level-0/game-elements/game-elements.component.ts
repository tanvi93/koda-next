import { Component, OnInit } from '@angular/core';
import { gameElements } from '../../data/gameElements';

@Component({
  selector: 'app-game-elements',
  templateUrl: './game-elements.component.html',
  styleUrls: ['./game-elements.component.scss']
})

export class GameElementsComponent implements OnInit {
  private gameElementsData: any;

  constructor() {
    this.gameElementsData = gameElements;
   }

  ngOnInit() {
    console.log(this.gameElementsData);
  }

}
