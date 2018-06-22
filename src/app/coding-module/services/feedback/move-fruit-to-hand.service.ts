import { Injectable } from '@angular/core';
import { blocksData } from './../../../data/coding';

declare var Blockly: any;
let initialLoadFlag = true;
let initialblockArray = [];

@Injectable()
export class MoveFruitToHandService {

  private verticalToleranceValue: number;
  private horizontalToleranceValue: number;
  private boundaryCondition: any;
  private blockList: any;
  private codes: Array<any>;
  private eventFlag: boolean;
  private flowChartMsg: string;
  private success: Boolean;
  private successObj: any;

  constructor() {
    this.success = false;
    this.successObj = {};
    this.eventFlag = true;
    this.boundaryCondition = {
      'X': 35, 'Y': 21
    };
    this.horizontalToleranceValue = 2;
    this.verticalToleranceValue = 2;
  }

  validateCode(blockList, codes, sprites, spriteStatus, callback) {
    // tslint:disable-next-line:prefer-const
    this.blockList = blockList;
    this.codes = codes;
   
    setTimeout(() => {

      // condition to check whether block is greater than 2
      if (this.codes.length > 2) {
        // tslint:disable-next-line:max-line-length
        this.flowChartMsg = 'You need only 2 blocks in the Code Zone: one to move the monkey, and other to move the fruit. Check your blocks and try again.';
        return callback(this.flowChartMsg);
      }

      // condition to check whether block is less than 2
      if (this.codes.length < 2) {
        this.flowChartMsg = 'You need to add a new block to make the fruit move to monkey’s hand.';
        return callback(this.flowChartMsg);
      }

      // condtion to check whether enter block is moveBy/goto or not
      if (this.blockList[1] !== 'goTo' && this.blockList[1] !== 'moveBy') {
        this.flowChartMsg = 'Oops! That doesn\'t look right. Look for a block that can be used to move the fruit to the monkey’s hand.';
        return callback(this.flowChartMsg);
      }

      const blockObj = JSON.parse(this.codes[1].match(/\(([^)]+)\)/)[1].replace(/[']/g, ''));

      // condition to check whether the block added have fruit as character
      if (Number(blockObj.spriteIndex) !== 1) {
        // tslint:disable-next-line:max-line-length
        this.flowChartMsg = 'Oops! That doesn\'t look right. Make sure you select the correct character from the dropdown in the block used to move the fruit.';
        return callback(this.flowChartMsg);
      }

      // condition to check boundary condition
      if (((Math.abs(spriteStatus[1].currentPosition.x) >= this.boundaryCondition.X)
        || (Math.abs(spriteStatus[1].currentPosition.y) >= this.boundaryCondition.Y))) {
        this.flowChartMsg = 'Looks like the fruit has moved out of the Stage. Recheck your input values.';
        return callback(this.flowChartMsg);
      }
     
      // condition to check whether fruits reached monkey's hand
      const monkeyHandX = spriteStatus[1].currentPosition.x - spriteStatus[0].currentPosition.x;
      const monkeyHandY = spriteStatus[1].currentPosition.y - spriteStatus[0].currentPosition.y;
      if ((monkeyHandX > (sprites[0].handPositions.x + 1)) || (monkeyHandX < (sprites[0].handPositions.x - 1)) || (monkeyHandY > sprites[0].handPositions.y + 1) || (monkeyHandY < sprites[0].handPositions.y - 1)) {
        this.flowChartMsg = `Oh! The fruit hasn’t reached monkey’s hand. Check the inputs of the block and try again. Remember, you can find the new coordinates of monkey's hand by clicking or tapping on it.`;
        return callback(this.flowChartMsg);
      }

      // condition to check whether correct sequence have been acheived using goto block or not
      if (this.blockList[1] !== 'goTo') {
        // tslint:disable-next-line:max-line-length
        this.flowChartMsg = 'Hmm... that didn\'t quite happen the way it should have.The fruit should appear in monkey’s hand instead of moving towards the monkey\'s hand. Try another block.';
        return callback(this.flowChartMsg);
      } else {
        this.success = true;
        this.successObj['success'] = this.success;
        this.successObj['title'] = `That's amazing!`;
        this.successObj['msg'] = `You made the monkey take its fruit along. You're surely getting a hang of code blocks!`;
        return callback(this.successObj);
      }
    }, 500);
  }
  workSpaceOnChange(e, cb, workspace) {
    const json = e.toJson();
    if (json.type === 'create') {
      for (let i = 0; i < json.ids.length; i++) {
        initialblockArray.push(json.ids[i]);
      }
    }
  
    if (initialLoadFlag) {
      switch (json.type) {
        case 'move':
          initialLoadFlag = false;
          return;
        case 'delete':
          initialblockArray = [];
          return;
      }
    }
   
    if (json.type === 'move' && json.blockId !== initialblockArray[0]) {
      const text = Blockly.Xml.workspaceToDom(workspace);
      blocksData.mm2_1_c2.initialCode = Blockly.Xml.domToPrettyText(text);
    }

    if ((e.type === 'change') && (json.blockId !== initialblockArray[0] && json.blockId !== initialblockArray[1] && json.blockId !== initialblockArray[2])) {
      const text = Blockly.Xml.workspaceToDom(workspace);
      blocksData.mm2_1_c2.initialCode = Blockly.Xml.domToPrettyText(text);
    }

// Check 1. Were the earlier blocks changed?
    if ((e.type === 'change') && (json.blockId === initialblockArray[0] || json.blockId === initialblockArray[1] || json.blockId === initialblockArray[2])) {
      initialLoadFlag = true;
      cb('Don’t make any changes to your previous code. Just add a new block to make the fruit move to monkey’s hand.');
    }
    if (e.type === 'delete') {
      if (json.blockId === initialblockArray[0]) {
        initialLoadFlag = true;
        initialblockArray = [];
        cb('Don’t make any changes to your previous code. Just add a new block to make the fruit move to monkey’s hand.');
      } else if (json.blockId !== initialblockArray[0] && json.blockId !== initialblockArray[1] && json.blockId !== initialblockArray[2]) {
        const text = Blockly.Xml.workspaceToDom(workspace);
        blocksData.mm2_1_c2.initialCode = Blockly.Xml.domToPrettyText(text);
      }  
     
    }
  }
}