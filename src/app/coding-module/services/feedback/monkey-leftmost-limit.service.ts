import { Injectable } from '@angular/core';
import { blocksData } from './../../../data/coding';

declare var Blockly: any;
let initialLoadFlag = true;

@Injectable()
export class MonkeyLeftmostLimit {
  private blockList: any;
  private codes: Array<any>;
  private success: Boolean;
  private successObj: any;
  private arrayOfIds: Array<any>;

  constructor() {
    this.success = false;
    this.successObj = {};
    this.arrayOfIds = [];
  }


  validateCode(blockList, codes, sprites, spriteStatus, callback) {
    setTimeout(() => {
      this.blockList = blockList;
      this.codes = codes;
     
      const leftRange = [{ 'x1': -28, 'x2': -30 }, { 'x1': -28, 'x2': -30 }, { 'x1': -28, 'x2': -31 }, { 'x1': -28, 'x2': -30 }];
      const firstBlockObj = JSON.parse(this.codes[0].match(/\(([^)]+)\)/)[1].replace(/[']/g, ''));
      const spriteIndex = Number(firstBlockObj.spriteIndex);

      // check 1: Monkey moves off Stage?(completely off the stage)
      if ((spriteStatus[0].currentPosition.x <= sprites[spriteIndex].disappearCoordinates.x1) || (spriteStatus[0].currentPosition.x >= sprites[spriteIndex].disappearCoordinates.x2) || (spriteStatus[0].currentPosition.y <= sprites[spriteIndex].disappearCoordinates.y1) || (spriteStatus[0].currentPosition.y >= sprites[spriteIndex].disappearCoordinates.y2)) {
        return callback('Looks like the monkey has moved out of the Stage. Recheck your input values. Remember you have to make the monkey throw a fruit from the left end of the Stage.');
      }

      // check 2:Monkey moves to the leftmost part of the Stage?
      if (spriteStatus[0].currentPosition.x > leftRange[sprites[0].selectedType].x1) {
        return callback(`It doesn’t seem like the monkey moved to the leftmost end of the Stage. Try changing the input values of your 'monkey: go to' block.`);
      }

      // check 3: Monkey remains completely visible on Stage?
      if ((spriteStatus[0].currentPosition.x <= sprites[spriteIndex].partiallyVisible.x1) || (spriteStatus[0].currentPosition.x >= sprites[spriteIndex].partiallyVisible.x2) || (spriteStatus[0].currentPosition.y <= sprites[spriteIndex].partiallyVisible.y1) || (spriteStatus[0].currentPosition.y >= sprites[spriteIndex].partiallyVisible.y2)) {
        return callback(`Great! The monkey is moving to the left end but remember, it should remain completely visible on Stage. Change your inputs to the 'monkey: go to' block a bit.`);
      }

      // check 4: Monkey: Goto Y changed?
      if (Number(firstBlockObj.y) !== sprites[spriteIndex].initialOffset.y) {
        // tslint:disable-next-line:max-line-length
        return callback(`Great! The monkey is moving to the left end but note that the monkey moves only sideways, not up or down. Keep the Y coordinate of the monkey same as its initial Y coordinate (${sprites[firstBlockObj.spriteIndex].initialOffset.y}).`);
      }

      const secondBlockObj = JSON.parse(this.codes[1].match(/\(([^)]+)\)/)[1].replace(/[']/g, ''));
      const offsetOfFruit = sprites[secondBlockObj.spriteIndex].currentOffset ? sprites[secondBlockObj.spriteIndex].currentOffset : sprites[secondBlockObj.spriteIndex].initialOffset;

      // check 5: Fruit goes off the Stage?
      if ((offsetOfFruit.x < -35) || (offsetOfFruit.x > 35) || (offsetOfFruit.y <= -21) || (offsetOfFruit.y >= 21)) {
        return callback(`Great! The monkey is moving to the left end but looks like the fruit has moved out of the Stage. Remember the fruit should fall from monkey’s hand. Recheck your input values to the 'fruit: go to' block.`);
      }
      const monkeyHandX = spriteStatus[1].currentPosition.x - spriteStatus[0].currentPosition.x;
      const monkeyHandY = spriteStatus[1].currentPosition.y - spriteStatus[0].currentPosition.y;
      // check 6: Fruit appears in monkey’s hand?
      if ((monkeyHandX > (sprites[0].handPositions.x + 1)) || (monkeyHandX < (sprites[0].handPositions.x - 1)) || (monkeyHandY > sprites[0].handPositions.y + 1) || (monkeyHandY < sprites[0].handPositions.y - 1)) {
        return callback(`Great! The monkey is moving to the left end but the fruit isn’t falling from the monkey’s hand anymore. Recheck your input values to the 'fruit: go to' block.`);
      } else {
        this.success = true;
        this.successObj['success'] = this.success;
        this.successObj['title'] = 'Well done!';
        this.successObj['msg'] = 'You have identified the leftmost position that the monkey could move to.';
        return callback(this.successObj);
      }
    }, 100);
  }



  workSpaceOnChange(e, cb, workSpace) {
    const json = e.toJson();
    console.log(json);
    if (json.type === 'create') {
      for (let i = 0; i < json.ids.length; i++) {
        this.arrayOfIds.push(json.ids[i]);
      }
    }

    if (initialLoadFlag) {
      switch (json.type) {
        case 'move':
          initialLoadFlag = false;
          return;
        case 'delete':
          this.arrayOfIds = [];
          return;
        default:
          return;
      }
    }

    if (json.type === 'change' && (json.blockId === this.arrayOfIds[1] || json.blockId === this.arrayOfIds[2] || json.blockId === this.arrayOfIds[4] || json.blockId === this.arrayOfIds[5])) {
      const text = Blockly.Xml.workspaceToDom(workSpace);
      blocksData.mm2_2_c1.initialCode = Blockly.Xml.domToPrettyText(text);
      localStorage.setItem('lastCodeXml', Blockly.Xml.domToPrettyText(text));
    }

    // check a: Blocks added/deleted/detached?
    if ((json.type === 'move' && json.blockId !== 'go_to') || (json.type === 'delete' && json.blockId === 'go_to')) {
      initialLoadFlag = true;
      cb(`There’s no need to add or delete any blocks. Just change the inputs of your existing blocks so that the monkey throws the fruit from the left end of the Stage.`);
    }

    // check b: Inputs of third block changed?
    if (json.type === 'change' && ((json.blockId === 'move_by') || (json.blockId === this.arrayOfIds[this.arrayOfIds.length - 1]))) {
      initialLoadFlag = true;
      cb('There’s no need to make any changes to this block. The fruit still needs to fall down to the ground.');
    }

    // check c: Characters of 1st and 2nd blocks changed?
    if (json.type === 'change' && json.blockId !== 'move_by' && json.name === 'sprite') {
      initialLoadFlag = true;
      cb('There’s no need to change the selected character. We still want the monkey to move and the fruit to move to its hand.');
    }
  }
}
