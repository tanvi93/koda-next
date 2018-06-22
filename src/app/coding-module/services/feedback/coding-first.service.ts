import { Injectable } from '@angular/core';

@Injectable()
export class CodingFirstService {
  private blockList: any;
  private codes: Array<any>;

  constructor() { }

  validateCode(blockList, codes, sprites, spriteStatus, callback) {
    this.blockList = blockList;
    this.codes = codes;
    console.log(this.blockList, this.codes);
    return callback('Hello There');
  }

  workSpaceOnChange(e, cb) {
    console.log(e);
    cb("WS Changes");
  }

}
