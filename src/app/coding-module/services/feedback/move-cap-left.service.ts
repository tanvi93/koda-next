import { Injectable } from '@angular/core';
import { blocksData } from './../../../data/coding';

declare var Blockly: any;

@Injectable()
export class MoveCapLeftService {
  private codes: Array<any>;

  constructor() { }

  validateCode(blockList, codes, sprites, spriteStatus, callback) {
    if (blockList.indexOf('keydownEventBind') === -1) {
      return callback('Add block that can only perform on left arrow key press/hit.');
    }
  }

  checkForSuccess() {
      const successObj = {
        success: true,
        title: 'Like a champ!',
        msg: 'The cap is now moving left whenever the left arrow key is pressed.That’s your first step towards making the game interactive!'
      }
      return successObj;
  }

  on_left_arrow_keypress(codes, sprites, spriteStatus, callback) {

    let coords: any = {};

    sprites.forEach(v => {
      const name = v.name.toLowerCase();
      if (v.currentOffset) {
        coords[name] = {
          'currentOffset': v.currentOffset,
          'initialOffset': v.initialOffset
        };
      }
    });

    const horizontalLimit = 35 - (sprites[2].width / 2);
    const verticalLimit = 21 - (sprites[2].height / 2);

    if (coords.cap.currentOffset.x <= -(horizontalLimit) || coords.cap.currentOffset.x >= horizontalLimit ||
      coords.cap.currentOffset.y <= -(verticalLimit) || coords.cap.currentOffset.y >= verticalLimit) {
      return callback('Whole cap should be visible.');
    }

    if (coords.cap.currentOffset.x >= coords.cap.initialOffset.x || coords.cap.currentOffset.y !== coords.cap.initialOffset.y) {
      return callback('Cap should move to left only.');
    } else {
      const obj = this.checkForSuccess();
      if (obj) {
        return callback(obj);
      }
    }

  }
}