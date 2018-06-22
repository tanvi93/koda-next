import { Injectable } from '@angular/core';
import { blocksData } from './../../../data/coding';

declare var Blockly: any;
let blockPresentOnWorkspace = [];
let initialLoadFlag = true;

@Injectable()
export class RelativePositioningService {
  private blockList: any;
  private codes: Array<any>;
  private successObj: any;
  private success: Boolean;

  constructor() {
    this.success = false;
    this.successObj = {};  
   }

  validateCode(blockList, codes, sprites, spriteStatus, callback) {
   
    this.blockList = blockList;
    this.codes = codes;
    const valueFromPreviousQuiz = {
      'x': -5, 'y': -5
    };
    const secondBlockObj = JSON.parse(this.codes[1].match(/'(.*?)'/)[1]);
  
    // check 2. Operator blocks used in both the inputs for fruit: goto block?
    if (Number(secondBlockObj.spriteIndex) !== 1 || secondBlockObj.childJson[1].name !== 'arithmetic_operators' || secondBlockObj.childJson[2].name !== 'arithmetic_operators') {
      return callback('As you correctly identified in the last quiz, the fruit must always go to a position that can be expressed as (monkey’s x - 5, monkey’s y - 5). Look for blocks that allow you to express such mathematical operations.');
    }
    
    const xInput = secondBlockObj.x.replace('getArithmeticResult', '');
    const yInput = secondBlockObj.y.replace('getArithmeticResult', '');

   // check 3. The operator blocks contain the Monkey’s coordinate block(s) as first inputs?
    if ((secondBlockObj.x.indexOf('getCoordinate(0, 0)') < 0) || (secondBlockObj.y.indexOf('getCoordinate(0, 1)') < 0) || (xInput.indexOf('getCoordinate(0, 0)') !== 1) || (yInput.indexOf('getCoordinate(0, 1)') !== 1)) {
      return callback('You are using correct blocks for doing mathematical operations, but their inputs seem to be wrong. Remember, the fruit’s needs to go to the coordinates (monkey’s x - 5, monkey’s y - 5). Can you find a block that gives you monkey’s X or Y coordinate? Attach it as an input to the arithmetic operator block.');
    }
   
    // check 4. Operator blocks creating the correct formulas as per the previous quiz?
    if (Number(xInput[22]) === Math.abs(valueFromPreviousQuiz.x) && Number(yInput[22]) === Math.abs(valueFromPreviousQuiz.y) && ((Number(xInput[25]) === 1 && Math.sign(valueFromPreviousQuiz.x) === -1) || (Number(xInput[25]) === 0 && Math.sign(valueFromPreviousQuiz.x) === 1)) && ((Number(yInput[25]) === 1 && Math.sign(valueFromPreviousQuiz.y) === -1) || (Number(yInput[25]) === 0 && Math.sign(valueFromPreviousQuiz.y) === 1))) {
      this.success = true;
      this.successObj['success'] = this.success;
      this.successObj['title'] = 'Done in style!';
      this.successObj['msg'] = 'This coding business is becoming a cakewalk for you.';
      return callback(this.successObj);
    } else {
      return callback('You are almost there! These are the formulas you need to create through blocks: <br>Fruit’s new X coordinate = Monkey x - 5<br>Fruit’s new Y coordinate = monkey y - 5<br>Recheck the inputs to your arithmetic operator blocks and try again.');
    }
  }

  workSpaceOnChange(e, cb, workspace) {
    let blockPresent = false;
    const json = e.toJson(); 
  
    if (initialLoadFlag) {
      switch (json.type) {
        case 'move':
          initialLoadFlag = false;
          return;
        case 'delete':
          blockPresentOnWorkspace = [];
          return;
        case 'create':
          for (let i = 0; i < json.ids.length; i++) {
            blockPresentOnWorkspace.push(json.ids[i]);
          }
      }
    }
 
    if (workspace.topBlocks_.length === 1 && (json.type === 'change') && (json.blockId !== blockPresentOnWorkspace[0] && json.blockId !== blockPresentOnWorkspace[1] && json.blockId !== blockPresentOnWorkspace[2] && json.blockId !== blockPresentOnWorkspace[3] && json.blockId !== blockPresentOnWorkspace[4] && json.blockId !== blockPresentOnWorkspace[blockPresentOnWorkspace.length - 1] && json.blockId !== blockPresentOnWorkspace[blockPresentOnWorkspace.length - 2])) {
      const text = Blockly.Xml.workspaceToDom(workspace);
      blocksData.mm2_2_c4.initialCode = Blockly.Xml.domToPrettyText(text);
    }
  
    for (let i = 0; i < blockPresentOnWorkspace.length; i++) {  
      if (json.type === 'move' && json.blockId === blockPresentOnWorkspace[i]) {
        blockPresent = true;
      }
      // check a. Were the earlier blocks deleted/detached/sequence changed?
      if (((json.type === 'move' || json.type === 'delete') && (json.blockId === blockPresentOnWorkspace[1] || json.blockId === blockPresentOnWorkspace[2] || json.blockId === blockPresentOnWorkspace[3] || json.blockId === blockPresentOnWorkspace[4] || json.blockId === blockPresentOnWorkspace[5] || json.blockId === blockPresentOnWorkspace[blockPresentOnWorkspace.length - 1] || json.blockId === blockPresentOnWorkspace[blockPresentOnWorkspace.length - 2]))) {
        initialLoadFlag = true;
        cb(`Don’t delete or detach the earlier blocks. Look for a way that makes the fruit appear in monkey’s hand whenever monkey goes to a new position and drag it to the Code Zone.`);
        return;
        }
   
        // check b. Any non-input blocks added to Code Zone?
        if ((json.type === 'move' && json.newParentId === 'move_by') || (workspace.topBlocks_.length === 1 && workspace.topBlocks_[0].id !== 'go_to')) {
          initialLoadFlag = true;
          cb('There’s no need for that block. You just need to update a few inputs to your existing blocks.');
          return;
        }
        // check c. Inputs of first or third block changed?
      if (json.type === 'change' && (json.blockId === blockPresentOnWorkspace[0] || json.blockId === blockPresentOnWorkspace[1] || json.blockId === blockPresentOnWorkspace[2] || json.blockId === blockPresentOnWorkspace[3] || json.blockId === blockPresentOnWorkspace[4] || json.blockId === blockPresentOnWorkspace[blockPresentOnWorkspace.length - 1] || json.blockId === blockPresentOnWorkspace[blockPresentOnWorkspace.length - 2])) {
        initialLoadFlag = true;
        cb(`You still want the monkey to go to a random position and the fruit to fall, right? So, no need to change the inputs of the first or the third block. Change the inputs of the second block such that the fruit appears in monkey’s hand whenever monkey goes to a new position.`);
        return;
        }
        
    }  

    if (workspace.topBlocks_.length === 1 && json.type === 'move' && blockPresent === false) {
      console.log('inside saved code');
      const text = Blockly.Xml.workspaceToDom(workspace);
      blocksData.mm2_2_c4.initialCode = Blockly.Xml.domToPrettyText(text);
    }
  }

}