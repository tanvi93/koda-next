import { Injectable } from '@angular/core';
import { blocksData } from './../../../data/coding';

declare var Blockly: any;
let initialLoadFlag = true;

@Injectable()
// export class MoveCapLeftService {

//   private blockList: any;
//   private codes: Array<any>;
//   private blockObj = [];
//   private arrayOfIds: Array<any>;
//   private leftKeySelected: Boolean;
//   private successObj: any;

//   constructor() {
//     this.successObj = {};
//     this.arrayOfIds = [];
//     this.leftKeySelected = false;
//   }

//   validateCode(blockList, codes, sprites, spriteStatus, callback) {
//     setTimeout(() => {
//       this.blockList = blockList;
//       this.codes = codes;

//       const keyEventBlock = JSON.parse(this.codes[0]).params;
//       const innerBlockData = (atob(keyEventBlock.linesOfCode)).split(';');
//       const innerBlock = JSON.parse(innerBlockData[0]);

//       if (Number(innerBlock.params.spriteIndex) === -1) {
//         return callback('Make sure that you have chosen an option for all the dropdowns in your code.');
//       }
    
//       // check 1. New block added within event block ?
//       if (keyEventBlock === '') {
//         return callback(`Looks like you didn’t connect your new block correctly. Since we want to move the cap only when
//         the left arrow key is pressed, the new block should be attached inside <img src = "./assets/images/when_key_pressed.png"
//         width = "50px">.`);
//       }

//       // check 2. Goto/Move to/Move by? (On left arrow key press)
//       if (spriteStatus[0]) {
//         if (innerBlock.method !== 'moveBy' && innerBlock.method !== 'goTo' && innerBlock.method !== 'moveTo') {
//           return callback(`Oops! That doesn't look right.Look for a block that can be used to make the cap move.`);
//         }


//         // check 3. Char = cap?
//         if (sprites[innerBlock.params.spriteIndex].name !== 'cap') {
//           return callback(`Oops! That doesn't look right. Make sure you select the correct character from the dropdown in the block.`);
//         }

//         const offsetOfCap = sprites[2].currentOffset;
//         // check 4. Input moves the cap completely off the Stage ?
//         if ((offsetOfCap.x <= (-35 - (sprites[0].width / 2))) || (offsetOfCap.x >= (35 + (sprites[0].width / 2))) ||
//           (offsetOfCap.y <= (-21 - (sprites[0].height / 2))) || (offsetOfCap.y >= (21 + (sprites[0].width / 2)))) {
//           return callback(`Looks like the cap has moved out of the Stage. Recheck your input values.`);
//         }

//         // check 5. Input doesn’t move the cap at all?
//         if (((innerBlock.method === 'goTo' || innerBlock.method === 'moveTo') && (innerBlock.params.x === offsetOfCap.x) &&
//           innerBlock.params.y === offsetOfCap.y) || (innerBlock.method === 'moveBy' && innerBlock.params.x === 0 &&
//             innerBlock.params.y === 0)) {
//           return callback(`Try changing your input values so that the cap moves two steps left from its current position.
//           To test your code, click <img src="./assets/images/playimage.png" width="50px"> and press left arrow key.`);
//         }

//         // check 6. Go to used?
//         if (innerBlock.method === 'goTo') {
//           return callback(`Hmm… <img src="./assets/images/go_to_block_img.png" width="120px" height="25px"> makes the
//           cap magically appear at a new position instead of gradually moving it. Try another block.`);
//         }

//         // check 7. Move to block used?
//         if (innerBlock.method === 'moveBy') {
//           // check 8a. Cap moves left?
//           if (innerBlock.params.direction !== 'L') {
//             return callback(`The cap is not moving to the left as it is supposed to. Check the inputs of the block and try again.
//             To test your code, click <img src="./assets/images/playimage.png" width="50px"> and press left arrow key.`);
//           }

//           // check 8b. Cap moving by 2 steps?
//           if (Number(innerBlock.params.x) !== -2) {
//             return callback(`That looks great! When the left arrow key is pressed, the cap should move 2 steps to the left.
//             Recheck the input to your block and test again by clicking <img src="./assets/images/playimage.png" width="50px">
//             and pressing left arrow key.`);
//           } else {
//             this.successObj['success'] = true;
//             this.successObj['title'] = 'Like a champ!';
//             this.successObj['msg'] = `The cap is now moving left whenever the left arrow key is pressed.
//             That’s your first step towards making the game interactive!`;
//             return callback(this.successObj);
//           }
//         }

//         if (innerBlock.method === 'moveTo') {

//           // check 7a. X coordinate input is ‘cap: x - 2’?
//           if (Number(innerBlock.params.x) !== (sprites[2].initialOffset.x - 2)) {
//             return callback(`Try changing your input values so that the cap moves two steps left from its current position every time 
//             the left arrow key is pressed. Remember the cap’s current position keeps changing as it moves. To test your code, 
//             click <img src="./assets/images/playimage.png" width="50px"> and press left arrow key.
//             <Hint: Use <arithmetic operator block image> for the cap’s new X coordinate.`);
//           }

//           // check 7b. Cap’s Y coordinate changes?
//           if (Number(innerBlock.params.y) !== offsetOfCap.y) {
//             return callback(`Note that the cap should only move left, not up or down. Check the inputs of your block and try again.
//             To test your code, click <img src="./assets/images/playimage.png" width="50px"> and press left arrow key.`);
//           } else {
//             this.successObj['success'] = true;
//             this.successObj['title'] = 'Like a champ!';
//             this.successObj['msg'] = `The cap is now moving left whenever the left arrow key is pressed.
//             That’s your first step towards making the game interactive!`;
//             return callback(this.successObj);
//           }
//         }
//       }
//     }, 100);
//   }

//   workSpaceOnChange(e, cb, workSpace) {

//     const json = e.toJson();

//     // check a.“when key pressed” dragged to workspace?
//     if (initialLoadFlag === true) {
//       if (json.type === 'move' && json.blockId === 'when_key_pressed') {
//         const text = Blockly.Xml.workspaceToDom(workSpace);
//         blocksData.mm3_1_c1.initialCode = Blockly.Xml.domToPrettyText(text);
//         initialLoadFlag = false;
//         cb(`That’s great! You found the correct block! Now select the correct input to this block such that it can detect 
//         when the left arrow key is pressed.`);
//       } else if (json.type === 'move' && json.blockId !== 'when_key_pressed' && !json.newParentId) {
//         cb(`Oops! Looks like you selected the wrong block.<br>Look for a block that helps in detecting whether
//          the left arrow key has been pressed.`);
//       }
//     }
//     // check b. “Left arrow” is selected in the event?
//     if (json.type === 'change') {
//       if (json.blockId === 'when_key_pressed') {
//         if (json.newValue === '37' && this.leftKeySelected === false) {
//           const text = Blockly.Xml.workspaceToDom(workSpace);
//           blocksData.mm3_1_c1.initialCode = Blockly.Xml.domToPrettyText(text);
//           cb(`Well done! Now add a block such that the cap moves two steps to the left when the left arrow key is pressed.
//           To test your code, click < img src = "./assets/images/playimage.png" width = "50px" > and press left arrow key.`);
//           this.leftKeySelected = true;
//         } else {
//           if (this.leftKeySelected === false) {
//             const text = Blockly.Xml.workspaceToDom(workSpace);
//             blocksData.mm3_1_c1.initialCode = Blockly.Xml.domToPrettyText(text);
//           }

//           cb('We need to detect whenever the player presses the left arrow key. Check the input of your block.');
//         }
//       } else {
//         const text = Blockly.Xml.workspaceToDom(workSpace);
//         blocksData.mm3_1_c1.initialCode = Blockly.Xml.domToPrettyText(text);
//       }
//     }
//   }
// }

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