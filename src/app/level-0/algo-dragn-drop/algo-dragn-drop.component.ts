import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { algoStep } from '../../data/dragAndDrop';

@Component({
  selector: 'app-algo-dragn-drop',
  templateUrl: './algo-dragn-drop.component.html',
  styleUrls: ['./algo-dragn-drop.component.scss']
})

/**
  * @name AlgoDragnDropComponent
  * @description This component contains algorithm of game.The steps are in incorrect sequence,
  * user have to drag each step and drop it in right order/sequence.
  * This is the parent component consist of
  * - Instruction Bar
  * - Drag Zone (consist of steps in incorrect order)
  * - Drop Zone (consist of empty space to place step in order)
  * @constructor intializing the loader and image count.
  * @param { object } algorithmObj contains the data of algo drag drop.
  * @param { boolean } loading It's value will be true till the images gets load.
  */

  /**
   * @method OnInit
   * @memberOf AlgoDragnDropComponent
   * @description This method gives data of current page to algorithmObj object with the help of routing parameter.
   * Preloader is defined in this method.
   * @method imageLoad when all the images are loaded, this makes the loading variable false so the loader disappears.
   */

export class AlgoDragnDropComponent implements OnInit {
  private algorithmObj: any;
  private pageId: String;
  private loading: Boolean;
  private imageCount;

  constructor(private route: ActivatedRoute) {
    this.loading = true;
    this.imageCount = 0;
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.pageId = params.pageId;
      this.algorithmObj = algoStep[`${this.pageId}`];
    });

    const imageLoad = () => {
      this.imageCount++;
      if (this.algorithmObj.steps.length === this.imageCount) {
        this.loading = false;
      }
    };

    for (let i = 0; i < this.algorithmObj.steps.length; i++) {
      const image = new Image();
      image.onload = imageLoad;
      image.src = this.algorithmObj.steps[i].icon;
    }
  }

}
