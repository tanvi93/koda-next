import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-sorted-elements-zone',
  templateUrl: './sorted-elements-zone.component.html',
  styleUrls: ['./sorted-elements-zone.component.scss']
})

/**
 * @export
 * @class SortedElementsZoneComponent
 * @implements {OnChanges} detects the changes in the input.
 * @constructor intializing showRule1 and showRule2, two boolean values for showing the correct steps of rules.
 * @description
 * The component contains different containers for characters, background and rules of the game.
 * When the elements are clicked it is displayed inside specify containers to show in which category it comes.
 */
/**
   * @method ngOnChanges
   * @memberOf SortedElementsZoneComponent
   * @description This method is called when any input changes.
   * Here when the Id of image changes that image get visible with animation in the particular container.
   */

export class SortedElementsZoneComponent implements OnChanges {
  @Input() gameInfo;
  @Input() displayImage;
  private showRule1;
  private showRule2;

  constructor() {
    this.showRule1 = false;
    this.showRule2 = false;
  }

  ngOnChanges() {
    if (this.displayImage) {
      const element = document.getElementById(this.displayImage + 'Showed');
      element.style.display = 'block';
      element.classList.add('animated');
      element.classList.add('zoomIn');
      switch (this.displayImage) {
        case 'img5': this.showRule1 = true;
          break;
        case 'img6': this.showRule2 = true;
          break;
      }
    }
  }

}
