import { Injectable } from '@angular/core';

let ifBlockFlag = false;
let initialLoadFlag = true;
let relationalFlagError = true;
let perfectCoordPos = false;
let getcoordNumberId = null;
let getcoordChar = 0;
let getcoordAxis = 'x';
let operatorValue = 'eq';
let numberValue = '0';
let finalFeedbackFlag = false;
let ifblockParent = null;
let moveByParent = 'key_pressed';

const relationalBlockDetail = [];
const boundaryCondition = '-32';
const initialblockArray = [];

@Injectable()

export class MoveCapToLeftendService {

  private verticalToleranceValue: number;
  private horizontalToleranceValue: number;
  private boundaryCondition: any;
  private blockList: any;
  private codes: Array<any>;
  private eventFlag: boolean;
  private spriteIndex: any;
  private flowChartMsg: string;
  private success: Boolean;
  private successObj: any;

  constructor() {
    this.success = false;
    this.successObj = {};
    this.eventFlag = true;
    this.boundaryCondition = {
      'X': 32, 'Y': 21
    };
    this.horizontalToleranceValue = 2;
    this.verticalToleranceValue = 2;
  }

  validateCode(blockList, codes, sprites, spriteStatus, callback) {

    this.spriteIndex = [];

    codes.forEach(element => {
      this.spriteIndex.push(element[element.indexOf('spriteIndex') + 13]);
    });
    // tslint:disable-next-line:prefer-const
    this.blockList = blockList;
    this.codes = codes;
    console.log(this.blockList);
    console.log(this.codes);

    setTimeout(() => {
      console.log(ifBlockFlag);
      if (ifBlockFlag) {

        if (relationalFlagError) {
          // tslint:disable-next-line:max-line-length
          this.flowChartMsg = 'You need to move the cap left only if cap’s x coordinate >= [[leftmostx + 2]].Look for blocks that will help you do this comparison and add it as an input to the <if block image >.< RUN button >';
          perfectCoordPos = false;
          return callback(this.flowChartMsg);
        } else if (!relationalFlagError) {
          // tslint:disable-next-line:max-line-length
          this.flowChartMsg = 'Great! You discovered the compare block! But remember that the cap’s x coordinate has to be compared to[leftmostx + 2].Recheck your inputs to the compare block.';
          perfectCoordPos = true;
          return callback(this.flowChartMsg);
        }
      }
      if (finalFeedbackFlag) {
        if (moveByParent !== 'controls_if') {
          this.flowChartMsg = 'The cap should move left only if the condition of the <if block image> is true. Recheck the placement of the block that moves the cap.';
          perfectCoordPos = true;
          return callback(this.flowChartMsg);
        }

        if (ifblockParent !== 'when_key_pressed') {
          this.flowChartMsg = 'The cap should move left only if the condition of the <if block image> is true. Recheck the placement of the block that moves the cap.';
          perfectCoordPos = true;
          return callback(this.flowChartMsg);
        } else {
          this.success = true;
          this.successObj['success'] = this.success;

          // tslint:disable-next-line:max-line-length
          this.successObj['msg'] = 'Well done! You have made sure the cap won’t go off Stage when the player moves it left.';

          return callback(this.successObj);
        }

      }
    }, 500);
  }
  workSpaceOnChange(e, cb, workspace) {
    let ifBlockArray;
    const temp = workspace.getAllBlocks();
    if (e.type === 'move') {
      console.log(workspace);
      console.log(temp);
    }
    const conditionalData = { 'feedback': null };

    if (initialLoadFlag) {
      if (e.type === 'create') {
        initialblockArray.push(e.ids);
      }
      initialLoadFlag = false;
    }

    if (e.type === 'move') {
      console.log('entered for loop', typeof(ifBlockArray), ifBlockArray);
      if (ifBlockArray === undefined) {
        for (let i = 0; i < temp.length; i++) {
          if (temp[i].id === 'controls_if') {
            console.log(temp[i]);
            ifBlockArray = temp[i];
          }
        }
        console.log(ifBlockArray);
      }
      if (e.blockId === 'move_by') {
        moveByParent = e.newParentId;
        console.log(moveByParent);
      } else if (e.blockId === 'controls_if') {
        ifblockParent = e.newParentId;
        console.log(ifblockParent);
      }
    }

    if (e.type === 'change') {
      if (e.blockId === 'get_coordinates') {
        if (e.name === 'sprite') {
          getcoordChar = e.newValue;
        } else if (e.name === 'axis') {
          getcoordAxis = e.newValue;
        }
      }

      if (e.blockId === getcoordNumberId) {
        numberValue = e.newValue;
      }
      if (e.blockId === 'relational_operators' && e.name === 'operator') {
        operatorValue = e.newValue;
      }
    }
    // to avoid changes in preloaded blocks
    if ((e.type === 'change' || e.type === 'delete') && initialblockArray[0].indexOf(e.blockId) !== -1) {
      this.flowChartMsg = 'Don’t make any changes to your previous code. Just add a new block to make the fruit move to monkey’s hand.';
      cb(this.flowChartMsg);
    }

    if ((e.type === 'move') && (initialblockArray[0].indexOf(e.blockId) === -1)) {
      // to detect whether if block is been added or not
      if (!ifBlockFlag) {
        if (e.blockId !== 'controls_if') {
          this.flowChartMsg = 'Are you sure that block will let you perform an action after checking a condition? Try again.';
          cb(this.flowChartMsg);
          return;
        } else if (e.blockId === 'controls_if') {
          // tslint:disable-next-line:max-line-length
          this.flowChartMsg = 'Now code the condition ‘cap’s x coordinate >= [leftmostx + 2]’ using appropriate blocks and add it as an input to the <if block image>. Click here when you’re done. <RUN Button>';
          ifBlockFlag = true;
          conditionalData.feedback = this.flowChartMsg;
          cb(conditionalData);
          return;
        }
      }
    }

    if (workspace.topBlocks_.length > 1 && ifBlockFlag) {
      console.log(ifBlockArray);
      if (workspace.topBlocks_[1].childBlocks_.length === 0) {
        this.flowChartMsg = 'Now code the condition ‘cap’s x coordinate >= [leftmostx + 2]’ using appropriate blocks and add it as an input to the <if block image>. Click here when you’re done. <RUN Button>';
        relationalFlagError = true;
        perfectCoordPos = false;
        conditionalData.feedback = this.flowChartMsg;
        cb(conditionalData);
        return;
      } else  {
        if (workspace.topBlocks_[1].childBlocks_[0].type !== 'relational_operators') {
          this.flowChartMsg = 'You need to move the cap left only if cap’s x coordinate >= [[leftmostx + 2]].Look for blocks that will help you do this comparison and add it as an input to the <if block image >.< DONE >';
          relationalFlagError = true;
          perfectCoordPos = false;
          conditionalData.feedback = this.flowChartMsg;
          cb(conditionalData);
          return;
        } else {
          relationalFlagError = false;
        }
      }
    } else {
      relationalFlagError = true;
      perfectCoordPos = false;
    }

    if (perfectCoordPos && ifBlockFlag) {
      relationalBlockDetail[0] = workspace.topBlocks_[1].childBlocks_[0].childBlocks_[0].type;
      relationalBlockDetail[1] = workspace.topBlocks_[1].childBlocks_[0].childBlocks_[1].type;

      if ((relationalBlockDetail.indexOf('get_coordinates') === -1) || (relationalBlockDetail.indexOf('number') === -1)  ) {

        this.flowChartMsg = 'Great! You discovered the compare block! But remember that the cap’s x coordinate has to be compared to[leftmostx + 2].Recheck your inputs to the compare block.';
        conditionalData.feedback = this.flowChartMsg;
        cb(conditionalData);
        return;
      } else {

        if (workspace.topBlocks_[1].childBlocks_[0].childBlocks_[0].type === 'number') {
            getcoordNumberId = workspace.topBlocks_[1].childBlocks_[0].childBlocks_[0].id;
          } else {
            getcoordNumberId = workspace.topBlocks_[1].childBlocks_[0].childBlocks_[1].id;
          }

          if (getcoordChar !== 2) {
            this.flowChartMsg = 'Oops! Looks like you selected the wrong character from the block’s dropdown.Try again.';
            conditionalData.feedback = this.flowChartMsg;
            cb(conditionalData);
            return;
          }

          if (getcoordAxis !== 'x') {
            this.flowChartMsg = 'Are you sure you are checking the value of the correct coordinate of the cap?';
            conditionalData.feedback = this.flowChartMsg;
            cb(conditionalData);
            return;
          }

        if (numberValue !== boundaryCondition) {
            this.flowChartMsg = 'Are you sure the value you are comparing the cap’s X coordinate to is correct? Remember the condition to be checked is ‘cap’s x coordinate >= [leftmostx + 2]’. Recheck your input values.';
            conditionalData.feedback = this.flowChartMsg;
            cb(conditionalData);
            return;
          }

        if ((workspace.topBlocks_[1].childBlocks_[0].childBlocks_[0].type === 'number' && operatorValue !== 'gte')
          || (workspace.topBlocks_[1].childBlocks_[0].childBlocks_[0].type === 'get_coordinates' && operatorValue !== 'lte')) {
            this.flowChartMsg = 'Are you sure <operator used by the user> is the correct comparison? Remember the condition to be checked is ‘cap’s x coordinate >= [leftmostx + 2]’. Recheck your input values.';
            conditionalData.feedback = this.flowChartMsg;
            cb(conditionalData);
            return;
        } else {
            this.flowChartMsg = 'Super! Now attach the <If block image> at the correct place in your code such that the cap moves only when the input condition is true. Test it out!';
            finalFeedbackFlag = true;
            conditionalData.feedback = this.flowChartMsg;
            cb(conditionalData);
            return;
          }
      }
    }


    if (e.type === 'delete') {
      // to restrict deletion of if block from the workspace
      if (e.blockId === 'controls_if') {
        this.flowChartMsg = 'Are you sure that block will let you perform an action after checking a condition? Try again.';
        ifBlockFlag = false;
        ifBlockArray = [];
        cb(this.flowChartMsg);
      } else if (e.blockId === 'get_coordinates') {
        getcoordChar = 0;
        getcoordAxis = 'x';
      }
    }
  }
}