import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-drag-container',
  templateUrl: './drag-container.component.html',
  styleUrls: ['./drag-container.component.scss']
})

/**
 * @name DragContainerComponent
 * @description This component contains the incorrect sequence of steps of algorithm of the game.
 * @param { object } algo This object contains the algorithm steps data.
 */

export class DragContainerComponent {
  @Input() algo;

  constructor() { }


}
