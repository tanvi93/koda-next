import { Injectable } from '@angular/core';
import { blocksData } from './../../../data/coding';

declare var Blockly: any;
let initialLoadFlag = true;

@Injectable()
export class MoveCapRightService {

  private blockList: any;
  private codes: Array<any>;
  private blockObj = [];
  private rightKeySelected: Boolean = false;
  private successObj: any;

  constructor() {
    this.rightKeySelected = false;
    this.successObj = {};
  }

  validateCode(blockList, codes, sprites, spriteStatus, callback) {
    setTimeout(() => {
    this.blockList = blockList;
    this.codes = codes;

    let innerBlockData = this.codes[0].match(/"(.*?)"/)[1];
    innerBlockData = atob(innerBlockData);

    let firstBlockName = innerBlockData.substr(0, innerBlockData.indexOf('('));
    firstBlockName = firstBlockName.trim();
    if(spriteStatus[0]){
    // check 1. Goto/Move to/Move by? (On left arrow key press)
    if (firstBlockName !== 'moveBy' && firstBlockName !== 'goTo' && firstBlockName !== 'moveTo') {
      return callback(`Oops! That doesn't look right.Look for a block that can be used to make the cap move.`);
    }

    const firstBlockInput = innerBlockData.match(/\(([^)]+)\)/)[1];
    const firstBlockInputObj = JSON.parse(firstBlockInput.substr(1, firstBlockInput.length - 2).replace(/'/g, '"'));
  
    if (Number(firstBlockInputObj.spriteIndex) === -1) {
      return callback('Make sure that you have chosen an option for all the dropdowns in your code.');
    }
    // check 2. Char = cap?
    if (sprites[firstBlockInputObj.spriteIndex].name !== 'cap') {
      return callback(`Oops! That doesn't look right. Make sure you select the correct character from the dropdown in the block.`);
    }

    const offsetOfCap = sprites[Number(firstBlockInputObj.spriteIndex)].currentOffset ? sprites[Number(firstBlockInputObj.spriteIndex)].currentOffset : sprites[Number(firstBlockInputObj.spriteIndex)].initialOffset;
    // check 3. Input moves the cap completely off the Stage ?
    if ((offsetOfCap.x <= (-35 - (sprites[0].width / 2))) || (offsetOfCap.x >= (35 + (sprites[0].width / 2))) ||
      (offsetOfCap.y <= (-21 - (sprites[0].height / 2))) || (offsetOfCap.y >= (21 + (sprites[0].width / 2)))) {
      return callback(`Looks like the cap has moved out of the Stage. Recheck your input values.`);
    }

    // check 4. Input doesn’t move the cap at all?
    if (((firstBlockName === 'goTo' || firstBlockName === 'moveTo') && (Number(firstBlockInputObj.x) === offsetOfCap.x) && Number(firstBlockInputObj.y) === offsetOfCap.y) || (firstBlockName === 'moveBy' && Number(firstBlockInputObj.x) === 0 && Number(firstBlockInputObj.y) === 0)) {
      return callback(`Try changing your input values so that the cap moves two steps left from its current position. To test your code, click <img src="./assets/images/playimage.png" width="50px"> and press left arrow key.`);
    }
    // check 5. Cap moving right?
    if (sprites[Number(firstBlockInputObj.spriteIndex)].initialOffset.x > sprites[Number(firstBlockInputObj.spriteIndex)].currentOffset.x) {
      return callback(`The cap is not moving to the right as it is supposed to. Check the inputs of the block and try again.`);
    }
    // check 6. Goto/Move to?

    if (firstBlockName === 'goTo') {
      return callback(`This block will make the cap to appear on right but remember cap has to move and not to appear. Try another block.`);
    }
  
    if (firstBlockName === 'moveTo') {
      return callback(` This block will move the cap to the right by specifying the coordinates. Instead, look for simpler block which helps to move the cap two steps to the right from its current position. Try another block.`);
    }
     
      // check 7. Cap moves two steps to the right?
      if (Number(firstBlockInputObj.x) === 2) {
        this.successObj['success'] = true;
        this.successObj['title'] = 'Super!';
        this.successObj['msg'] = 'Left and right! The cap also obeys your commands now.';
        return callback(this.successObj);
      } else {
        return callback(`Doesn’t look like the cap is moving to the right. Check your inputs to the block.`);
      }
    }
  },100);
}

  workSpaceOnChange(e, cb, workSpace) {

    const json = e.toJson();

    // check a.“when key pressed” dragged to workspace?
    if (initialLoadFlag === true) {
      if (json.type === 'move' && json.blockId === 'when_key_pressed') {
        const text = Blockly.Xml.workspaceToDom(workSpace);
        blocksData.mm3_1_c2.initialCode = Blockly.Xml.domToPrettyText(text);
        initialLoadFlag = false;
        // cb('That’s great! You found the correct block! Now select the correct input to this block such that it can detect when the left arrow key is pressed.');

      } else if (json.type === 'move' && json.blockId !== 'when_key_pressed' && !json.newParentId) {
        cb('Oops! Looks like you selected the wrong block. Look for a block that helps in detecting a keypress.');
      }
    }

    // check b. “Right arrow” is selected in the event?
    if (json.type === 'change') {
      if (json.blockId === 'when_key_pressed') {
        if (json.newValue === '39' && this.rightKeySelected === false) {
          const text = Blockly.Xml.workspaceToDom(workSpace);
          blocksData.mm3_1_c2.initialCode = Blockly.Xml.domToPrettyText(text);
          cb('That’s great! Now move the cap two steps to the right when the right arrow key is pressed.');
          this.rightKeySelected = true;
        } else {
          if (this.rightKeySelected === false) {
            const text = Blockly.Xml.workspaceToDom(workSpace);
            blocksData.mm3_1_c2.initialCode = Blockly.Xml.domToPrettyText(text);
          }

          cb('You found the correct block! But remember, we want to detect if the right arrow key has been pressed. Check your inputs.');
        }
      } else {
        const text = Blockly.Xml.workspaceToDom(workSpace);
        blocksData.mm3_1_c2.initialCode = Blockly.Xml.domToPrettyText(text);
      }
    }
  }
}
