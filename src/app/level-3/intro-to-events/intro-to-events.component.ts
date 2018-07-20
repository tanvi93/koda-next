import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilitiesService } from './../../shared-services/utilities.service';
import { AudioService } from './../../shared-services/audio.service';
import { assetsLink } from './../../shared-services/config';

/**
 * @export
 * @class IntroToEventsComponent
 * @description The component contains a mascot who introduces the user to event concept by showing some block images.
 * The click anywhere to continue button to switch to next dialogue and mascot image.
 * @implements {OnInit} initialise the path of mascot image to the variable mascot.
 * @constructor initiate loading value to true, changeCss and changeImage value to false.
 * Defines the array of heading displayed on screen and the preloader.
 */

/**
 *@method imageLoad This method is called to load all the images in the component before the screen is displayed.
 * The loader is displayed till the images loads.
 * @method clickOnScreen This method is called when user clicks anywhere on the blue screen.
 * Here, when user clicks on screen, the next dialogue and accordingly the image of mascot changes and the block images are displayed 
 * to show how event works.
 */

@Component({
  selector: 'app-intro-to-events',
  templateUrl: './intro-to-events.component.html',
  styleUrls: ['./intro-to-events.component.scss']
})



export class IntroToEventsComponent implements OnInit {
  private loading: boolean;
  private msgs: Array<any>;
  private msgIndex: number;
  private mascot: string;
  private changeCss: boolean;
  private changeImage: boolean;
  private image: string;
  private showBlockImage: Boolean;

  constructor(private audio: AudioService, private utility: UtilitiesService, private router: Router) {
    this.msgIndex = 0;
    this.loading = true;
    this.changeCss = false;
    this.changeImage = false;
    this.showBlockImage = false;
    this.msgs = [
      `In games, the player's action -- pressing a key, clicking the mouse, or typing something -- is called an Event. The thing that happens when such an event occurs is called the Response.`,
      `Thus, left and right arrow key presses are Events and the cap moving left and right are respective Responses.`,
      `Blocks used to code for such events are called Event Blocks.`,
      `In the game, when the player presses the left arrow key, the code under the event block is executed and the cap moves 2 steps to the left.`
    ];
    this.imagesLoad();
  }

  ngOnInit() {
    this.mascot = `${assetsLink}monkey_menace/mascot_arms_folded_full.png`;
  }

  imagesLoad() {
    const arr = ['monkey_menace/mascot_arms_folded_full.png', 'monkey_menace/mascot_pointing_up_right_full.png', 'block_images/event_block_1.png', 'block_images/event_block_2.png'];
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
      this.changeImage = false;
      if (this.msgIndex === 1) {
        this.mascot = `${assetsLink}monkey_menace/mascot_pointing_up_right_full.png`;
        this.image = `${assetsLink}block_images/event_block_1.png`;
        this.showBlockImage = true;
        this.changeCss = true;
      } else {
        this.image = `${assetsLink}block_images/event_block_2.png`;
        this.changeImage = true;
      }
      this.msgIndex++;
    } else {
      this.utility.nextPage(this.router.url.substr(1));
      return;
    }
  }
}
