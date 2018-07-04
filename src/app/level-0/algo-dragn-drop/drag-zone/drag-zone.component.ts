import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-drag-zone',
  templateUrl: './drag-zone.component.html',
  styleUrls: ['./drag-zone.component.scss']
})

/**
 * @name DragZoneComponent
 * @description This component contains the incorrect sequence of steps of algorithm of the game.
 * @param { object } algo This object contains the algorithm steps data.
 */

export class DragZoneComponent {
  @Input() algo;

  constructor() { }

}
