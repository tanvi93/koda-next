import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-drag-container',
  templateUrl: './drag-container.component.html',
  styleUrls: ['./drag-container.component.scss']
})

/**
 * @name DragContainerComponent
 * @description This component contains the incorrect sequence of steps of algorithm of the game and some extra steps.
 * @param { object } algo This object contains the algorithm steps data.
 */

  /**
   * @method OnInit
   * @memberOf DragContainerComponent
   * @description This method initialise the css property for question component.
   */

export class DragContainerComponent implements OnInit {
  @Input() algo;
  private questionObj;

  constructor() { }

  ngOnInit() {
    this.questionObj = {
      backgroundColor: '#ECD45B',
      color: '#3e3a48',
      fontSize: '20.8px'
    };
  }

}
