import { Injectable } from '@angular/core';
import { blocksData } from './../../../data/coding';
import { SpriteService } from './../sprite.service';

let sprite = new SpriteService();
let positionData = sprite.getAllSprites('monkey_menace')[0].partiallyVisible;
let randomActivityCompletionFlag = false;
let randomFlag = false;
let numberArray = [];
const initialXmlCode = blocksData.mm2_2_c3.initialCode;
let input_x_value = 0;
let input_y_value = 0;
let initialblockArray = [];
let goToBlockArray = [];
let initialLoadFlag = true;
let moveCount = 0;

declare var Blockly: any;
@Injectable()
export class RandomPositionService {

  private flowChartMsg: string;
  private randomNumberInputx: string;
  private randomNumberInputy: string;
  private success: Boolean;
  private successObj: any;
  private allowedBlocks: any;


  constructor() {
    this.success = false;
    this.successObj = {};
    this.allowedBlocks = ['go_to', 'random_number'];
  }

  validateCode(blockList, codes, sprites, spriteStatus, callback) {

    setTimeout(() => {

      if (randomActivityCompletionFlag) {
        if ((Number(input_x_value) === sprites[0].partiallyVisible.x1 && Number(input_y_value) === sprites[0].partiallyVisible.x2)
          || (Number(input_x_value) === sprites[0].partiallyVisible.x2 && Number(input_y_value) === sprites[0].partiallyVisible.x1)) {

          this.success = true;
          this.successObj['success'] = this.success;
          this.successObj['title'] = 'You’re a rockstar!'
          this.successObj['msg'] = 'Another new block successfully used! The monkey now moves to a random position in every run.';
          return callback(this.successObj);

        } else {

          this.flowChartMsg = 'The monkey should stay between x = ' + sprites[0].partiallyVisible.x1 + ' and x = ' + sprites[0].partiallyVisible.x2 + '. Change your inputs to the random block accordingly.';
          return callback(this.flowChartMsg);

        }
      } else {
        this.flowChartMsg = 'You haven’t made any changes to your previous code yet! Look for a block that lets you pick a random number. Drag it to the Code Zone.';
        return callback(this.flowChartMsg);
      }
    }, 500);
  }

  // condition to check whether previous block has been disturbed
  workSpaceOnChange(e, cb, ws) {
    const conditionalData = { 'feedback': null };
    
    goToBlockArray = [];
    
    let tempBlock = ws.getAllBlocks();

    tempBlock.forEach(element => {
      if (element.type === 'go_to') {
        goToBlockArray.push(element.id);
      }
      if (element.type === 'number') {
        numberArray.push(element.id);
      }
    });
    

    if (e.type === 'create' && e.blockId === 'go_to') {
      initialblockArray = e.ids;
    }

    if (initialLoadFlag) {
      switch (e.type) {
        case 'move':
          initialLoadFlag = false;
          return;
        case 'delete':
          initialblockArray = [];
          numberArray = [];
          return;
        default:
          return;
      }
    }

    


    // this condition will check whether we have detached the code from parent.
    if (e.type === 'move' && (e.blockId === 'move_by' || e.blockId === goToBlockArray[1])) {
      initialLoadFlag = true;
      this.flowChartMsg = 'You don’t need to do that to move the monkey to a random x-coordinate.';
      cb(this.flowChartMsg);
      return;
    }

    // random block added and then the 
    if (e.type === 'move' && tempBlock.length > 8 && this.allowedBlocks.indexOf(e.blockId) === -1) {
      this.flowChartMsg = 'You don\'t need to add or delete any blocks now.';
      cb(this.flowChartMsg);
      return;
    }

    //if any other block have move instead of goto or random block 
    if (e.type === 'move' && e.blockId !== 'go_to' && e.blockId !== 'random_number' && randomFlag) {
      this.flowChartMsg = 'You don\'t need to add or delete any blocks now.';
      cb(this.flowChartMsg);
      return;
    }

    // to store data if random block is been dropped properly
    if (e.type === 'move' && e.blockId === 'random_number' && ws.getAllBlocks().length === 11) {
      let text = Blockly.Xml.workspaceToDom(ws);
      blocksData.mm2_2_c3.initialCode = Blockly.Xml.domToPrettyText(text);
      localStorage.setItem('lastCodeXml', Blockly.Xml.domToPrettyText(text));
      randomFlag = true;
    }

    // to detect deletion of random block & top block 
    if (e.type === 'delete') {
      if (e.blockId === 'random_number' && randomFlag && tempBlock.length === 11) {
        this.flowChartMsg = 'You don\'t need to add or delete any blocks now.';
        this.randomNumberInputx = null;
        this.randomNumberInputy = null;
        cb(this.flowChartMsg);
        return;
      }
      if (ws.topBlocks_.length === 0) {
        this.flowChartMsg = 'You don’t need to do that to move the monkey to a random x-coordinate.';
        cb(this.flowChartMsg);
        return;
      }
    }

    // to detect where random block has been dropped
    if (e.type === 'move' && e.blockId === 'random_number') {
      if (e.newParentId === 'go_to' && e.newInputName === 'input_x') {
        let text = Blockly.Xml.workspaceToDom(ws);
        blocksData.mm2_2_c3.initialCode = Blockly.Xml.domToPrettyText(text);
        localStorage.setItem('lastCodeXml', Blockly.Xml.domToPrettyText(text));
        randomActivityCompletionFlag = true;
        conditionalData.feedback = 'You\’re doing great! Now give appropriate inputs to <img src = "assets/misc_images/random_block_update.png">. You already know that the monkey should stay between x = '+ positionData.x1 + ' and x = ' + positionData.x2 + '  to remain on the Stage. '
        cb(conditionalData)
        return;
      } else if (e.newParentId === 'go_to' && e.newInputName === 'input_y') {
        this.flowChartMsg = 'You found the right block! But it looks like you have not attached it to the correct input. Remember we want the monkey to move to a random x-coordinate every time.';
        conditionalData.feedback = this.flowChartMsg;
        cb(conditionalData);
        return;
      } else if (e.newParentId === undefined) {
        this.flowChartMsg = 'You found the right block! Now attach it as an input to the appropriate block in your code. Remember we want the monkey to move to a random x-coordinate every time.';
        conditionalData.feedback = this.flowChartMsg;
        cb(conditionalData);
        return;
      } else {
        this.flowChartMsg = 'You found the right block! But it looks like you have not attached it to the correct input. Remember we want the monkey to move to a random x-coordinate every time.';
        conditionalData.feedback = this.flowChartMsg;
        cb(conditionalData);
      }

    }

    // detect change in number block or sprite and direction block
    if (e.type === 'change') {
      if (ws.getBlockById(e.blockId).type === 'number' && e.blockId !== this.randomNumberInputx && e.blockId !== this.randomNumberInputy) {
        this.flowChartMsg = 'You don’t need to do that to move the monkey to a random x-coordinate.';
        cb(this.flowChartMsg);
        return;
      }
      if (e.name === 'sprite' || e.name === 'direction') {
        this.flowChartMsg = 'You don’t need to do that to move the monkey to a random x-coordinate.';
        cb(this.flowChartMsg);
        return;
      }

    }
    
    if (e.type === 'delete' && initialblockArray.indexOf(e.blockId) !== -1 && numberArray.indexOf(e.blockId) === -1) {
      this.flowChartMsg = 'You don’t need to do that to move the monkey to a random x-coordinate.';
      cb(this.flowChartMsg);
      return;
    }



    // to detect creation of random block
    if (e.type === 'create' && e.blockId === 'random_number') {
      this.randomNumberInputx = e.ids[1];
      this.randomNumberInputy = e.ids[2];
    }

    // to detect value of randmon block's From n To  value
    if (e.type === 'change') {
      if (e.blockId === this.randomNumberInputx) {
        input_x_value = e.newValue;
      }
      if (e.blockId === this.randomNumberInputy) {
        input_y_value = e.newValue;
      }
    }
  }

}