import { Injectable } from '@angular/core';

declare var Blockly: any;
let initialblockArray: string[] = [];
let initialLoadFlag = true;

@Injectable()
export class MakeFruitFallService {

  private boundaryCondition: any;
  private blockList: any;
  private codes: Array<any>;
  private spriteIndex: any;
  private success: Boolean;
  private successObj: any;
  
  private flowChartMsg: string;
  constructor() {
    this.success = false;
    this.successObj = {};
    this.boundaryCondition = {
      x: null,
      y: null
    };
  }

  validateCode(blockList, codes, sprites, spriteStatus, callback) {

    this.boundaryCondition.x = sprites[1].boundaryCondition.x;
    this.boundaryCondition.y = sprites[1].boundaryCondition.y;
    
    this.spriteIndex = [];

    codes.forEach(element => {
      this.spriteIndex.push(element[element.indexOf('spriteIndex') + 14]);
    });

    this.blockList = blockList;
    this.codes = codes;
    
    setTimeout(() => {
      
      // condition to check whether block is greater than 3
      if (this.codes.length > 3) {
        this.flowChartMsg = 'You need only 3 blocks in the Code Zone: one to move the monkey, one to move the fruit to monkey’s hand, and one to make the fruit fall. Check your blocks and try again.';
        return callback(this.flowChartMsg);
      }

      // condition to check whether block is less than 3
      if (this.codes.length < 3) {
        this.flowChartMsg = 'You need to add a new block to make the fruit fall on the ground.';
        return callback(this.flowChartMsg);
      }

      // condtion to check whether enter block is moveBy/goto or not
      if (this.blockList[2] !== 'goTo' && this.blockList[2] !== 'moveBy') {
        this.flowChartMsg = 'Oops! That doesn\'t look right. Look for a block that can make the fruit fall on the ground.';
        return callback(this.flowChartMsg);
      }
      
      // condition to check whether the block added have fruit as character
      if (this.spriteIndex[2] !== '1') {
        this.flowChartMsg = 'Oops! That doesn\'t look right. Make sure you select the correct character from the dropdown in the block.';
        return callback(this.flowChartMsg);
      }
      
      // condition due to goto block as movement for fruit to fell down
      if (this.blockList[2] === 'goTo') {

        // condition to check whether fruits goes beyond boudary
        if (((Math.abs(spriteStatus[2].currentPosition.x) >= this.boundaryCondition.x)
          || (Math.abs(spriteStatus[2].currentPosition.y) >= this.boundaryCondition.y))) {
            this.flowChartMsg = 'Looks like the fruit has moved out of the Stage. Recheck your input values.';
            return callback(this.flowChartMsg);
        }

        // condition to check whether fruit moves at all
        if ((spriteStatus[1].currentPosition.x === spriteStatus[2].currentPosition.x)
          && (spriteStatus[1].currentPosition.y === spriteStatus[2].currentPosition.y)) {
          this.flowChartMsg = 'Try changing your input values so that the fruit moves from its current position.';
          return callback(this.flowChartMsg);
        }
        
          // condition to check whether fruit is moving down or not.
        if (spriteStatus[2].currentPosition.y > sprites[2].currentOffset.y || spriteStatus[2].currentPosition.y <= -19) {
            this.flowChartMsg = 'The fruit is moving but it needs to reach as low as the cap so that the player can try to catch it. Recheck the input values to your block.';
            return callback(this.flowChartMsg);
        } else {
            this.flowChartMsg = 'Hmm... that didn\'t quite happen the way it should have. The fruit should fall down slowly from monkey\'s hand instead of just appearing on the ground. Try another block.';
            return callback(this.flowChartMsg);
        }
      }

      if (this.blockList[2] === 'moveBy') {
        let thirdBlockDetail = JSON.parse(this.codes[2]).params;
        let fruitXValue = spriteStatus[1].currentPosition.x + thirdBlockDetail.x 
        let fruitYValue = spriteStatus[1].currentPosition.y - thirdBlockDetail.y 

        // condition to check whether fruits goes beyond boudary
        if (((Math.abs(fruitXValue) >= this.boundaryCondition.x)
          || (Math.abs(fruitYValue) >= this.boundaryCondition.y))) {
          this.flowChartMsg = 'Looks like the fruit has moved out of the Stage. Recheck your input values.';
          return callback(this.flowChartMsg);
        }

         // condition to check whether fruit moves at all
        if (thirdBlockDetail.x === 0 && thirdBlockDetail.y === 0) {
          this.flowChartMsg = 'Try changing your input values so that the fruit moves from its current position.';
          return callback(this.flowChartMsg);
        }
        
        // condition to check whether fruit is moving down or not.
        if (fruitYValue > sprites[2].currentOffset.y || fruitYValue <= -19) {
          this.flowChartMsg = 'The fruit is moving but it needs to reach as low as the cap so that the player can try to catch it. Recheck the input values to your block.';
          return callback(this.flowChartMsg);
        } else {
            this.success = true;
            this.successObj['success'] = this.success;
            this.successObj['title'] = 'This looks great!';
            this.successObj['msg'] = 'You made the monkey throw a fruit on the ground! Congrats on writing your first piece of code!';

            return callback(this.successObj);
        }
      }
    }, 500);
  }
  // condition to check whether previous block has been disturbed
  workSpaceOnChange(e, cb, wsp) {
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
          return;
        default:
          return;
      }
    }
    
    if (e.type === 'delete' && initialblockArray.indexOf(e.blockId) >= 0) {
      this.flowChartMsg = 'Don’t make any changes to your previous code. Just add a new block to make the fruit fall on the ground.';
      initialLoadFlag = true;
      cb(this.flowChartMsg);
    }
    
    if (e.type === 'move' && initialblockArray.indexOf(e.blockId) > 0) {
      this.flowChartMsg = 'Don’t make any changes to your previous code. Just add a new block to make the fruit fall on the ground.';
      initialLoadFlag = true;
      cb(this.flowChartMsg);
    }
    
    if (e.type === 'change' && initialblockArray.indexOf(e.blockId) !== -1) {
      this.flowChartMsg = 'Don’t make any changes to your previous code. Just add a new block to make the fruit fall on the ground.';
      initialLoadFlag = true;
      cb(this.flowChartMsg);
    }
    
    if (e.type === 'move' && initialblockArray.indexOf(e.blockId) === -1 && e.newParentId === 'go_to') {
      this.flowChartMsg = 'Don’t make any changes to your previous code. Just add a new block to make the fruit fall on the ground.';
      initialLoadFlag = true;
      cb(this.flowChartMsg);
    }
    
    if (wsp.topBlocks_.length === 0 || wsp.topBlocks_[0].id !== 'go_to') {
      this.flowChartMsg = 'Don’t make any changes to your previous code. Just add a new block to make the fruit fall on the ground.';
      initialLoadFlag = true;
      cb(this.flowChartMsg);
    }
  }
}