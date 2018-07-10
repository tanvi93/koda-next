import { Injectable } from '@angular/core';
import { blocksData } from './../../../data/coding';


let initialLoadFlag = true;
let initialblockArray: string[] = [];
let repeatForeverBlock = [];
let repeatNTimesBlock = [];
let repeatForeverCount = 0;
let repeatNTimesCount = 1;
let noOfBlocks = 0;
let surroundParentName = '';
let initialNumberOFBlocks = 0;

declare var Blockly: any;
@Injectable()
export class ThrowFruitsForeverService {


  private blockList: any;
  private codes: Array<any>;
  private flowChartMsg: string;
  private success: Boolean;
  private successObj: any;

  constructor() {
    this.success = false;
    this.successObj = {};
  }

  validateCode(blockList, codes, sprites, spriteStatus, callback) {

    // tslint:disable-next-line:prefer-const
    this.blockList = blockList;
    this.codes = codes;
    console.log(this.blockList);
    
    setTimeout(() => {
      console.log(repeatForeverCount);
      console.log(repeatNTimesCount);
      
      // check-0(a): to detect if no repeat forever block present
      if ((repeatForeverCount  + repeatNTimesCount) === 0) {
        this.flowChartMsg = 'Now the monkey is throwing just one fruit! You need a block that can make the monkey throws fruits forever.';
        return callback(this.flowChartMsg);
      }

      // check-0(b): to detect if more than 1 repeat forever / repeat n times block present
      // code for this case is written compiler case as this case comes under pre-running condition test

      if (blockList.indexOf('var repeat_end = ') !== -1) {
        let y = codes[blockList.indexOf('var repeat_end = ')].match(/\d/g);
        y = y.join("");
        // check-1(a): to detect whether repeat n times block is still present and also no. of block present in workspace? 
        if ((repeatForeverCount + repeatNTimesCount === 1) && repeatForeverCount === 0 && Number(y) <= 10) {
          this.flowChartMsg = 'That doesn’t look right. Look for a block that lets you repeat your code for throwing a fruit forever.';
          return callback(this.flowChartMsg);
        }
      }

      // check-2: to detect whether no of block exceed the limit then required with repeat forever block present in stack.
      if (repeatForeverCount === 1 && noOfBlocks > 15) {
          this.flowChartMsg = 'Almost there! But you seem to have a few extra blocks in your code that are not required for the monkey to throw fruits forever. Remove them and run your code again.';
          return callback(this.flowChartMsg);
      }  
      
      // check-3: to detect whether required no. of block present with repeat forever acting as surround block
      if (repeatForeverCount === 1 && noOfBlocks === 15) {
        if (surroundParentName !== 'controls_repeat_forever') {
          this.flowChartMsg = 'Something isn’t right. Remember, the code that you want to be repeated needs to be placed inside the ‘repeat forever’ block.';
          return callback(this.flowChartMsg);
        } else {
          // success condition
          this.success = true;
          this.successObj['success'] = this.success;
          this.successObj['title'] = 'Such a short code and such wonderful results!';
          this.successObj['msg'] = 'Congratulations! You have completed one huge step in building this game.';
          return callback(this.successObj);
        }
      }
    }, 500);
  }
  // condition to check whether previous block has been disturbed
  workSpaceOnChange(e, callback, workspace) {
    let tempBlocksArray = workspace.getAllBlocks();
    
    repeatNTimesBlock = [];
    repeatForeverBlock = [];
    repeatForeverCount = 0;
    repeatNTimesCount = 0;
    noOfBlocks = workspace.getAllBlocks().length;
    tempBlocksArray.forEach(element => {
      if (element.type === 'controls_repeat_forever') {
        repeatForeverBlock.push(element);
        ++repeatForeverCount;
      } else if (element.type === 'controls_repeat_ext') {
        repeatNTimesBlock.push(element);
        ++repeatNTimesCount;
      }
    });
    
    
    if (e.type === 'create' && (e.blockId === 'repeat_n_times' || e.blockId === 'go_to')) {
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

    // to avoid deletion of go_to block
    if (!workspace.getBlockById('go_to')) {
      initialLoadFlag = true;
      callback('You don’t need to make any changes to your previous code for throwing a fruit. Just use a block that can be used to make the monkey throw fruits forever and connect it correctly to your code for throwing one fruit.');
    }    
    
    // to allow only repeat n time && goto block to be detach/move  
    if ((e.type === 'move') && (e.blockId !== 'go_to' && e.blockId !== 'repeat_n_times') && (e.newParentId !== 'go_to') && (initialblockArray.indexOf(e.blockId) !== -1)) {
        initialLoadFlag = true;
        callback('You don’t need to make any changes to your previous code for throwing a fruit. Just use a block that can be used to make the monkey throw fruits forever and connect it correctly to your code for throwing one fruit.');
    }
    
    if (e.type === 'move' && e.blockId !== 'go_to' && e.newParentId !== 'move_by' && initialblockArray.indexOf(e.newParentId) !== -1 && e.newParentId !== 'repeat_n_times') {
      initialLoadFlag = true;
      callback('You don’t need to make any changes to your previous code for throwing a fruit. Just use a block that can be used to make the monkey throw fruits forever and connect it correctly to your code for throwing one fruit.');
    }
    
    // to detect change n deletion of required block 
    if ((e.type === 'change' || e.type === 'delete') && (initialblockArray.indexOf(e.blockId) !== -1 && (e.element === 'field'))) {
      if (initialblockArray.indexOf(e.blockId) !== 1) {
        initialLoadFlag = true;
        callback('You don’t need to make any changes to your previous code for throwing a fruit. Just use a block that can be used to make the monkey throw fruits forever and connect it correctly to your code for throwing one fruit.');
      }
    }

    if (e.type === 'delete' && initialblockArray.indexOf(e.blockId) !== -1 && e.blockId !== 'repeat_n_times') {
      initialLoadFlag = true;
      callback('You don’t need to make any changes to your previous code for throwing a fruit. Just use a block that can be used to make the monkey throw fruits forever and connect it correctly to your code for throwing one fruit.');
    }

    // to record block status
    if (e.type === 'delete' && e.blockId === 'repeat_n_times' && initialblockArray.indexOf(e.blockId) !== -1) {
      initialblockArray = initialblockArray.splice(2);
      let text = Blockly.Xml.workspaceToDom(workspace);
      blocksData.mm2_6_c2.initialCode = Blockly.Xml.domToPrettyText(text);
    }

    if (repeatForeverCount === 1 && workspace.getBlockById('go_to').getSurroundParent() !== null) {
      surroundParentName = workspace.getBlockById('go_to').getSurroundParent().type;
    } else {
      surroundParentName = '';
    }
  }

  compileCode(blockList, list, workspacePlayground, pageId, callback) {
    
    // check-0(b): to detect if more than 1 repeat forever / repeat n times block present
    if ((repeatForeverCount + repeatNTimesCount) > 1) {
      return callback(this.flowChartMsg = 'You need only one repeat block to make the monkey keep throwing fruits forever.');
    }


    if (blockList.indexOf('var repeat_end = ') !== -1) {
      let y = list[blockList.indexOf('var repeat_end = ')].match(/\d/g);
      y = y.join("");
      // check-1(b):to detect whether repeat n times block is still present and also no. of block present in workspace?
      if ((repeatForeverCount + repeatNTimesCount === 1) && repeatForeverCount === 0 && Number(y) > 10) {
       return callback('That doesn’t look right. The repeat block that you are using will let you repeat your code only ' + y + ' times. Look for a block that lets you repeat your code for throwing a fruit forever.');
      } else {
       return callback(null);
      }
    } else {
      return callback(null)
    }
  }
}
