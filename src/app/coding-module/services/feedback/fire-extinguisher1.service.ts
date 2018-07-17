import { Injectable } from '@angular/core';
import { checkSequence } from './utility-functions.service';

@Injectable()
export class FireExtinguisher1Service {
  private codes: Array<any>;
  private characterIndex;
  private isPinRemoved: boolean;
  private isLunarCorrect: boolean;

  constructor() { 
    this.characterIndex = {};
  }

  validateCode(blockList, codes, sprites, spriteStatus, callback) {
    if (blockList.indexOf('charClickEventBind') === -1) {
      return callback('No character clicked blocks found, hint for the rescue');
    }
    this.isPinRemoved = false;
    this.isLunarCorrect = false;
    sprites.forEach((v, i) => {
      this.characterIndex[v.name.toLowerCase()] = i;
    });
    let safetyPin = sprites[this.characterIndex.safety_pin];
    const lever = sprites[this.characterIndex.lever];   
    if (safetyPin.instance.intersectsWithObject(lever.instance, null, true)) {
      return callback('Remove safety pin from lever and throw it on left side');
    } else if (safetyPin.currentOffset.x >= (lever.currentOffset.x + 2) || safetyPin.currentOffset.y > (lever.currentOffset.y - 2)) {
      return callback('Remove safety pin from lever and throw it on left side');
    }
    this.isPinRemoved = true;
  }

  checkForSuccess() {
    if (this.isLunarCorrect && this.isPinRemoved) {
      const successObj = {
        success: true,
        title: 'Kudos!',
        msg: 'You successfully used code blocks to move the monkey.'
      }
      return successObj;
    }
  }

  on_lever_press(codes, sprites, spriteStatus, callback) {
    /*---- Coordinates part starts here ----*/
    const extinguisherCoords = sprites[this.characterIndex.extinguisher].currentOffset;
    const fireCoords = sprites[this.characterIndex.fire].currentOffset;
    let xDiff = fireCoords.x - extinguisherCoords.x;
    let yDiff = extinguisherCoords.y - fireCoords.y;
    if ((xDiff < 20 || xDiff > 24) || (yDiff < 3 || yDiff > 6)) {
      return callback('Extinguisher should be near fire');
    }
    /*---- Coordinates part ends here ----*/

    const lever = sprites[this.characterIndex.lever];
    const extinguisher = sprites[this.characterIndex.extinguisher];
    const fire = sprites[this.characterIndex.fire];
    const spray = sprites[this.characterIndex.spray];

    /*---- Character looks part starts here ----*/
    if (lever.currentLookIdx != 0) {
      return callback('Lever is not released yet');
    }  
    
    if (extinguisher.currentLookIdx != 2) {
      return callback('Gas is still remains in extinguisher');
    }

    if (!fire.isHidden) {
      return callback(`Fire haven't gone for good, its still there`);
    }

    if (!spray.isHidden) {
      return callback('Spray is getting wasted :P');
    }
    /*---- Character looks part ends here ----*/

    /*---- Character looks sequencing part starts here ----*/
    let sequence: any = [
      {
        name: 'safety_pin',
        action: 'moveObject',
        error: 'Looks like you forgot to change look of Fire'
      }, {
        name: 'lever',
        action: 'changeLook',
        error: 'Looks like you forgot to change look of Fire'
      }, {
        name: 'plunger',
        action: 'moveObject',
        error: 'Looks like you forgot to change look of Fire'
      }, {
        name: 'extinguisher',
        action: 'changeLook',
        value: {
          lookIdx: 1
        },
        valueError: 'Look is not correct of extinguisher',
        error: 'Looks like you forgot to change look of Fire'
      }, {
        name: 'spray',
        action: 'visibility',
        value: {
          visibility: true
        },
        valueError: 'Spray should not be hidden here',
        error: 'Looks like you forgot to change look of Fire'
      }, {
        name: 'fire',
        action: 'changeLook',
        value: {
          lookIdx: 1,
        },
        valueError: 'Look is not correct of fire',
        error: 'Looks like you forgot to change look of Fire'
      }, {
        name: 'fire',
        action: 'changeLook',
        value: {
          lookIdx: 2
        },
        valueError: 'Look is not correct of fire',
        error: 'Looks like you forgot to change look of Fire'
      }, {
        name: 'fire',
        action: 'visibility',
        value: {
          visibility: false
        },
        valueError: 'Fire should be hidden after extinguisher get empty.',
        error: 'Looks like you forgot to change look of Fire 1'
      }, {
        name: 'extinguisher',
        action: 'changeLook',
        value: {
          lookIdx: 2
        },
        valueError: 'Look is not correct of extinguisher',
        error: 'Sequence of Change looks of Extinguisher is not correct or you forgot to change look of Extinguisher'
      }, {
        name: 'spray',
        action: 'visibility',
        value: {
          visibility: false
        },
        valueError: 'Spray should be hidden after extinguisher get empty.',
        error: 'Looks like you forgot to hide spray'
      }, {
        name: 'plunger',
        action: 'moveObject',
        error: 'Looks like you forgot to move Plunger up'
      }, {
        name: 'lever',
        action: 'changeLook',
        error: 'Looks like you forgot to change look of lever'
      }
    ];

    if (sequence.length > spriteStatus.length) {
      return callback('To few blocks, it needs more. Check Hints if you are stuck');
    }
    
    const result = checkSequence(sequence, spriteStatus);
    if (result === 'success') {
      console.log('success');
    } else {
      return callback(result);
    }
    /*---- Character looks sequencing part ends here ----*/
  }
}
