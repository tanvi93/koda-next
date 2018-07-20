import { Injectable } from '@angular/core';

let singleParentBlock = true;

@Injectable()
export class MonkeyMoveToNewPositionService {
  private blockList: any;
  private codes: Array<any>;
  private success: Boolean;
  private successObj: any;

  constructor() {
    this.success = false;
    this.successObj = {};
  }

  validateCode(blockList, codes, sprites, spriteStatus, callback) {

    setTimeout(() => {
      this.blockList = blockList;
      this.codes = codes;

     // Check #0: Is there exactly one block on the workspace?
      if (this.blockList.length !== 1) {
        return callback('You need only one block in the Code Zone to move the monkey. Check your blocks and try again.');
      }
      
      // Check #1: go to or move block used?
      if (this.blockList[0] !== 'moveBy' && this.blockList[0] !== 'goTo') {
        return callback("Oops! That doesn't look right. Look for a block that can be used to move the monkey.");
      }

      // const blockObj = JSON.parse(this.codes[0].match(/\(([^)]+)\)/)[1].replace(/[']/g, ""));
      const blockObj = JSON.parse(this.codes[0]).params;
      const spriteIndex = Number(blockObj.spriteIndex);

    // Check #2: character = monkey?
      if (spriteIndex !== 0) {
      return callback("Oops! That doesn't look right. Make sure you select the correct character from the dropdown in the block.");
    }

    // Check #3: Input moves the monkey from initial position?
      if ((this.blockList[0] === 'goTo' && Number(blockObj.x) === sprites[spriteIndex].initialOffset.x && Number(blockObj.y) === sprites[spriteIndex].initialOffset.y) || (this.blockList[0] === 'moveBy' && Number(blockObj.x) === 0 && Number(blockObj.y) === 0)) {
        return callback('Try changing your input values so that the monkey moves to a new X coordinate.');
    }


    // Check #4: Input moves the monkey completely off the stage?
      if ((spriteStatus[0].currentPosition.x <= sprites[spriteIndex].disappearCoordinates.x1) || (spriteStatus[0].currentPosition.x >= sprites[spriteIndex].disappearCoordinates.x2) || (spriteStatus[0].currentPosition.y <= sprites[spriteIndex].disappearCoordinates.y1) || (spriteStatus[0].currentPosition.y >= sprites[spriteIndex].disappearCoordinates.y2)) {
      return callback('Looks like the monkey has moved out of the Stage. Recheck your input values.');
    }

    // Check #5: Go to block?
    if (this.blockList[0] !== 'goTo') {
      return callback("Hmm... the monkey is moving to a new position now but that didn't quite happen the way it should have. The monkey should appear in a new position instead of moving slowly across the Stage. Try another block.");
    }

    // Check #6:Monkey’s Y coord changed?
      if (Number(blockObj.y) !== sprites[spriteIndex].initialOffset.y) {
      // tslint:disable-next-line:max-line-length
        return callback(`The monkey is now moving to a new position but remember, only its X coordinate should change. Don’t change monkey’s Y coordinate from its initial value (${sprites[spriteIndex].initialOffset.y}).`);
    }
    
    // Check #7:Monkey remains fully visible on stage?
      if ((spriteStatus[0].currentPosition.x >= sprites[spriteIndex].partiallyVisible.x1) && (spriteStatus[0].currentPosition.x <= sprites[spriteIndex].partiallyVisible.x2)) {
      this.success = true;
      this.successObj['success'] = this.success;
      this.successObj['title'] = 'Kudos!';
      this.successObj['msg'] = 'You successfully used code blocks to move the monkey.';
      return callback(this.successObj);
      } else if ((spriteStatus[0].currentPosition.x < sprites[spriteIndex].partiallyVisible.x1) || (spriteStatus[0].currentPosition.x > sprites[spriteIndex].partiallyVisible.x2)) {
      return callback('Great! The monkey is moving to a new position across the tree but it seems to be partly going off the Stage. Change your input values so that it remains fully visible.');
    }
    }, 500);  
  }

}