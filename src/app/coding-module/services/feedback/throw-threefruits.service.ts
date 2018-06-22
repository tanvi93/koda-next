import { Injectable } from '@angular/core';

@Injectable()
export class ThrowThreefruitsService {
  private blockList: any;
  private codes: Array<any>;

  constructor() { }

  validateCode(blockList, codes, sprites, spriteStatus, callback) {
    this.blockList = blockList;
    this.codes = codes;
    console.log(this.codes);
    console.log(sprites);
    // const blockObj = JSON.parse(this.codes[0].match(/\(([^)]+)\)/)[1].replace(/[']/g, ""));
    // check 1: Exactly 9 blocks on the workspace?
    //Less than 9 blocks
    if (this.blockList.length < 9) {
      return callback(' You don’t seem to have enough blocks in your Code Zone to make the monkey throw fruits from three different positions. Are you sure you have added all the blocks needed to make the monkey throw the fruit from another position?');
    }
   //More than 9 blocks
    if (this.blockList.length > 9) {
      return callback('Remove the unnecessary blocks from the Code Zone. You need only 9 blocks in the Code Zone: 3 blocks for each fruit. Check your blocks and try again.');
    }
  }

  workSpaceOnChange(e) {
    console.log('workspace event');
    console.log(e);
  }
}
