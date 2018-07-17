import { Component, OnInit } from '@angular/core';
import { assetsLink } from './../../shared-services/config';

@Component({
  selector: 'app-intro-to-conditionals',
  templateUrl: './intro-to-conditionals.component.html',
  styleUrls: ['./intro-to-conditionals.component.scss']
})

/**
 * @export
 * @class IntroToConditionalsComponent
 * @description The component contains a mascot who introduces the user to conditional loops concept by showing some block images.
 * Click anywhere to continue button to switch to next dialogue and block images.
 * @implements {OnInit} initialise the path of mascot image to the variable mascot and the initial block image to image variable.
 * @constructor initiate loading value to true to show loader till the images load.
 * Defines the array of heading displayed on screen and the array of block images.
 */

/**
 *@method imageLoad This method is called to load all the images in the component before the screen is displayed.
 * The loader is displayed till the images loads.
 * @method clickOnScreen This method is called when user clicks anywhere on the blue screen.
 * Here, when user clicks on screen, the next dialogue and accordingly the image of block changes to show how event works.
 * Here, the msgIndex variable is incremented on each count and the msgIndex value is given to the path of block images so the image 
 * on that index in blockImage array will be displayed.
 */

export class IntroToConditionalsComponent implements OnInit {

  private loading: boolean;
  private msgs: Array<any>;
  private msgIndex: number;
  private mascot: string;
  private image: string;
  private blockImage: Array<any>;

  constructor() {
    this.msgIndex = 0;
    this.loading = true;
    this.msgs = [
      `You used the if block to restrict the movement of the cap within the Stage.`,
      `The if block decides which action to take based on whether a condition is met or not.`,
      `Conditions are often expressed using the comparison operators (>, <, >=,<=,=,) or logical operators (AND, OR, NOT).`,
      `If the condition is met, the code inside the if block is executed.`
    ];
    this.blockImage = ['intro_to_conditions_1.png', 'intro_to_conditions_2.png', 'intro_to_conditions_2.png', 'intro_to_conditions_3.png'];
    this.imagesLoad();
  }

  ngOnInit() {
    this.mascot = `${assetsLink}monkey_menace/mascot_pointing_up_right_full.png`;
    this.image = `${assetsLink}block_images/intro_to_conditions_1.png`;
  }

  imagesLoad() {
    const arr = ['monkey_menace/mascot_pointing_up_right_full.png', 'block_images/intro_to_conditions_1.png', 'block_images/intro_to_conditions_2.png', 'block_images/intro_to_conditions_3.png'];
    let image = null;
    let imageCount = 0;
    const mascotLoad = () => {
      ++imageCount;
      if (imageCount === arr.length - 1) {
        this.loading = false;
      }
    }
    arr.forEach(v => {
      image = new Image();
      image.onload = mascotLoad;
      image.src = `${assetsLink}${v}`;
    });
  }

  clickOnScreen() {
    if (this.msgIndex < this.msgs.length - 1) {
      this.msgIndex++;
      this.image = `${assetsLink}block_images/${this.blockImage[this.msgIndex]}`;
    }
  }

}
