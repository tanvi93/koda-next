import { Injectable } from '@angular/core';
import { blocksData } from './../../../data/coding';

declare var Blockly: any;
let initialLoadFlag = true;

@Injectable()
export class MoveCapLeftService {

  private blockList: any;
  private codes: Array<any>;
  private blockObj = [];
  private arrayOfIds: Array<any>;
  private leftKeySelected: Boolean;
  private successObj: any;

  constructor() {
    this.successObj = {};
    this.arrayOfIds = [];
    this.leftKeySelected = false;
  }

  validateCode(blockList, codes, sprites, spriteStatus, callback) {
    setTimeout(() => {
    this.blockList = blockList;
    this.codes = codes;
   
    // if (this.leftKeySelected === true) {
    let innerBlockData = this.codes[0].match(/"(.*?)"/)[1];
    innerBlockData = atob(innerBlockData);
   
    // check 1. New block added within event block ?
    if (innerBlockData === '') {
      return callback('Looks like you didn’t connect your new block correctly. Since we want to move the cap only when the left arrow key is pressed, the new block should be attached inside <img src="./assets/images/when_key_pressed.png" width="50px">.');
    }
    let firstBlockName = innerBlockData.substr(0, innerBlockData.indexOf('('));
    firstBlockName = firstBlockName.trim();
    // check 2. Goto/Move to/Move by? (On left arrow key press)
    if (spriteStatus[0]) {
    if (firstBlockName !== 'moveBy' && firstBlockName !== 'goTo' && firstBlockName !== 'moveTo') {
      return callback(`Oops! That doesn't look right.Look for a block that can be used to make the cap move.`);
    }

    const firstBlockInput = innerBlockData.match(/\(([^)]+)\)/)[1];
    const firstBlockInputObj = JSON.parse(firstBlockInput.substr(1, firstBlockInput.length - 2).replace(/'/g, '"'));
  
    if (Number(firstBlockInputObj.spriteIndex) === -1) {
      return callback('Make sure that you have chosen an option for all the dropdowns in your code.');
    }
    // check 3. Char = cap?
    if (sprites[firstBlockInputObj.spriteIndex].name !== 'cap') {
      return callback(`Oops! That doesn't look right. Make sure you select the correct character from the dropdown in the block.`);
    }

    const offsetOfCap = sprites[2].currentOffset;
    // check 4. Input moves the cap completely off the Stage ?
    if ((offsetOfCap.x <= (-35 - (sprites[0].width / 2))) || (offsetOfCap.x >= (35 + (sprites[0].width / 2))) ||
      (offsetOfCap.y <= (-21 - (sprites[0].height / 2))) || (offsetOfCap.y >= (21 + (sprites[0].width / 2)))) {
      return callback(`Looks like the cap has moved out of the Stage. Recheck your input values.`);
    }

    // check 5. Input doesn’t move the cap at all?
    if (((firstBlockName === 'goTo' || firstBlockName === 'moveTo') && (firstBlockInputObj.x === offsetOfCap.x) && firstBlockInputObj.y === offsetOfCap.y) || (firstBlockName === 'moveBy' && firstBlockInputObj.x === 0 && firstBlockInputObj.y === 0)) {
      return callback(`Try changing your input values so that the cap moves two steps left from its current position. To test your code, click <img src="./assets/images/playimage.png" width="50px"> and press left arrow key.`);
    }

    // check 6. Go to used?
    if (firstBlockName === 'goTo') {
      return callback(`Hmm… <img src="./assets/images/go_to_block_img.png" width="120px" height="25px"> makes the cap magically appear at a new position instead of gradually moving it. Try another block.`);
    }
    // check 7. Move to block used?
    if (firstBlockName === 'moveBy') {
      // check 8a. Cap moves left?
      if (firstBlockInputObj.direction !== 'L') {
        return callback(`The cap is not moving to the left as it is supposed to. Check the inputs of the block and try again. To test your code, click <img src="./assets/images/playimage.png" width="50px"> and press left arrow key.`);
      }
      // check 8b. Cap moving by 2 steps?
      if (Number(firstBlockInputObj.x) !== -2) {
        return callback(`That looks great! When the left arrow key is pressed, the cap should move 2 steps to the left. Recheck the input to your block and test again by clicking <img src="./assets/images/playimage.png" width="50px"> and pressing left arrow key.`);
      } else {
        console.log('success');
        this.successObj['success'] = true;
        this.successObj['title'] = 'Like a champ!';
        this.successObj['msg'] = 'The cap is now moving left whenever the left arrow key is pressed. That’s your first step towards making the game interactive!';
        return callback(this.successObj);
      }
    }

    if (firstBlockName === 'moveTo') {
     
      // check 7a. X coordinate input is ‘cap: x - 2’?
      if (Number(firstBlockInputObj.x) !== (sprites[2].initialOffset.x - 2)) {
        return callback(`Try changing your input values so that the cap moves two steps left from its current position every time the left arrow key is pressed. Remember the cap’s current position keeps changing as it moves. To test your code, click <img src="./assets/images/playimage.png" width="50px"> and press left arrow key.
         <Hint: Use <arithmetic operator block image> for the cap’s new X coordinate.`);
      }
      // check 7b. Cap’s Y coordinate changes?
      if (Number(firstBlockInputObj.y) !== offsetOfCap.y) {
        return callback(`Note that the cap should only move left, not up or down. Check the inputs of your block and try again. To test your code, click <img src="./assets/images/playimage.png" width="50px"> and press left arrow key.`)
      } else {
        this.successObj['success'] = true;
        this.successObj['title'] = 'Like a champ!';
        this.successObj['msg'] = 'The cap is now moving left whenever the left arrow key is pressed. That’s your first step towards making the game interactive!';
        return callback(this.successObj);
      }
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
        blocksData.mm3_1_c1.initialCode = Blockly.Xml.domToPrettyText(text);
        initialLoadFlag = false;
        cb('That’s great! You found the correct block! Now select the correct input to this block such that it can detect when the left arrow key is pressed.');

      } else if (json.type === 'move' && json.blockId !== 'when_key_pressed' && !json.newParentId) {
        cb('Oops! Looks like you selected the wrong block.<br>Look for a block that helps in detecting whether the left arrow key has been pressed.');
      }
    }
    // check b. “Left arrow” is selected in the event?
    if (json.type === 'change') {
      if (json.blockId === 'when_key_pressed') {
        if (json.newValue === '37' && this.leftKeySelected === false) {
          const text = Blockly.Xml.workspaceToDom(workSpace);
          blocksData.mm3_1_c1.initialCode = Blockly.Xml.domToPrettyText(text);
          cb('Well done! Now add a block such that the cap moves two steps to the left when the left arrow key is pressed. To test your code, click <img src="./assets/images/playimage.png" width="50px"> and press left arrow key.');
          this.leftKeySelected = true;
        } else {
          if (this.leftKeySelected === false) {
            const text = Blockly.Xml.workspaceToDom(workSpace);
            blocksData.mm3_1_c1.initialCode = Blockly.Xml.domToPrettyText(text);
          }

          cb('We need to detect whenever the player presses the left arrow key. Check the input of your block.');
        }
      } else {
        const text = Blockly.Xml.workspaceToDom(workSpace);
        blocksData.mm3_1_c1.initialCode = Blockly.Xml.domToPrettyText(text);
      }
    }
  }
}