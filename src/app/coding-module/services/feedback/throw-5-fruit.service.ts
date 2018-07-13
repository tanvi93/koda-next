import { Injectable } from '@angular/core';

let initialblockArray: string[] = [];
let initialLoadFlag = true;
let repeatblockCount = 0;
let noOfBlocks = 0;
let surroundParentName = '';


@Injectable()
export class Throw5FruitService {


  private blockList: any;
  private codes: Array<any>;
  private spriteIndex: any;
  private flowChartMsg: string;
  private success: Boolean;
  private successObj: any;

  constructor() {
    this.success = false;
    this.successObj = {};
  }

  validateCode(blockList, codes, sprites, spriteStatus, callback) {

    this.spriteIndex = [];

    codes.forEach(element => {
      this.spriteIndex.push(element[element.indexOf('spriteIndex') + 13]);
    });
    // tslint:disable-next-line:prefer-const
    this.blockList = blockList;
    this.codes = codes;

    setTimeout(() => {
      console.log(codes);
      
      // check 1:- checking whether no of block doesnt exceed 4
      if (repeatblockCount === 0 && this.codes.length < 4) {
        this.flowChartMsg = 'You need to add a new block to make the monkey throw 5 fruits now. As you found out in the previous quiz, the repeat block might be useful.';
        return callback(this.flowChartMsg);
      }

      // check 2(a)
      // check whether more than one repeat block is used
      if (repeatblockCount > 1) {
        this.flowChartMsg = 'Something seems wrong with the number of repeat blocks you have used and the code that you have put inside them. Try again.';
        return callback(this.flowChartMsg);
      }
      // check 2(b)
      // no repeat and more than required block count
      if (repeatblockCount === 0 && noOfBlocks > 14) {
        this.flowChartMsg = 'You don’t need so many blocks to make the monkey throw 5 fruits! Try using just one repeat block.';
        return callback(this.flowChartMsg);
      }

      // check 2(c)
      // no repeat and more than required block count
      if (repeatblockCount === 0 && noOfBlocks < 15) {
        this.flowChartMsg = 'The code doesn’t seem to make the monkey throw the fruit 5 times! Try using the repeat block.';
        return callback(this.flowChartMsg);
      }

      // check 3
      // check whether repeat block is there and block count is more than 4
      if (repeatblockCount === 1 && noOfBlocks > 4) {
        this.flowChartMsg = 'Just adding the repeat block is sufficient to make the monkey throw 5 fruits. You seem to have some unnecessary blocks in your code. Put them in the trash can and try again.';
        return callback(this.flowChartMsg);
      }

      // condition to check whether inputvalue is 5 or not
      if (surroundParentName !== 'controls_repeat_ext') {
        this.flowChartMsg = 'Something doesn’t seem right with how you have connected your earlier blocks to the repeat block. Remember, the code for throwing one fruit needs to be repeated 5 times for the monkey to throw 5 fruits.';
        return callback(this.flowChartMsg);
      }
      // check whether number is 5 or not
      if (JSON.parse(codes).params.times !== '5') {
        this.flowChartMsg = 'You are so close to perfecting this. We want the fruit to be thrown 5 times. Maybe a small change in the input to the repeat block will help.';
        return callback(this.flowChartMsg);
      } else {
        this.success = true;
        this.successObj['success'] = this.success;
        this.successObj['title'] = 'You truly are good at this!';
        // tslint:disable-next-line:max-line-length
        this.successObj['msg'] = 'If you remember playing the game, the monkey doesn’t even stop at 5 fruits. It keeps them coming till the player loses! Let’s try doing the same.';

        return callback(this.successObj);
      }
    }, 500);
  }
  // condition to check whether previous block has been disturbed
  workSpaceOnChange(e, callback, workspace) {
    let tempBlock = workspace.getAllBlocks();
    repeatblockCount = 0;
    noOfBlocks = 0;

    
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


    tempBlock.forEach(element => {
      if (element.type === 'controls_repeat_ext') {
        ++repeatblockCount;
      }
      if (element.type !== 'number' && element.type !== 'arithmetic_operators'
        && element.type !== 'random_number' && element.type !== 'get_coordinates') {
        ++noOfBlocks;
      }
    });

    // check condition (a)
    if ((e.type === 'move') && (e.blockId !== 'go_to') && (e.newParentId !== 'go_to') && (initialblockArray.indexOf(e.blockId) !== -1)) {
      initialLoadFlag = true;
      callback('Don’t make any changes to your previous code. Just add a new block to make the monkey throw fruit from 5 random positions.');
    }
    
    // will not allow to change or delete the previously loaded block
    if ((e.type === 'change' || e.type === 'delete') && initialblockArray.indexOf(e.blockId) !== -1) {
      initialLoadFlag = true;
      callback('Don’t make any changes to your previous code. Just add a new block to make the monkey throw fruit from 5 random positions.');
    }

    // will not allow new block to break sequence of the previous loaded block
    if (e.type === 'move' && initialblockArray.indexOf(e.blockId) === -1 && (e.newParentId !== 'move_by' && initialblockArray.indexOf(e.newParentId) !== -1 && workspace.topBlocks_[0].id !== e.blockId)) {
      initialLoadFlag = true;
      callback('Don’t make any changes to your previous code. Just add a new block to make the monkey throw fruit from 5 random positions.');
    }

    // help to find whether repeat block is surrounding the rest of the block or not
    if (workspace.getBlockById('go_to') !== null && workspace.topBlocks_.length > 0 && workspace.getBlockById('go_to').getSurroundParent() !== null) {
      surroundParentName = workspace.getBlockById('go_to').getSurroundParent().type;
    } else {
      surroundParentName = '';
    }
  }

}