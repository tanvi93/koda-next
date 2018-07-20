import { Injectable } from '@angular/core';
import { blocksData } from './../../../data/coding';

declare var Blockly: any;
let blockPresentOnWorkspace = [];
let initialLoadFlag = true;
let success: Boolean;

@Injectable()
export class PackagingMilkCode2Service {
  private blockList: any;
  private codes: Array<any>;
  private successObj;
  private firstCheck: Boolean;
  private blockObj;


  constructor() {
    this.successObj = {};
    this.blockObj = {};
    this.firstCheck = false;
  }

  validateCode(blockList, codes, sprites, spriteStatus, callback) {
    setTimeout(() => {
      this.blockList = blockList;
      this.codes = codes;
      success = false;
      // const blockObj = JSON.parse(this.codes[0]).params;
      for (let i = 0; i < this.blockList.length; i++) {
        if (this.blockList[i] === 'wait' && (this.blockList[i + 1] !== 'changeAvatar') && (this.blockList[i + 1] !== 'nextAvatar')) {
          this.blockList.splice(i, 1);
          this.codes.splice(i, 1);
        }
        this.blockObj[i] = JSON.parse(this.codes[i]);
      }
      repeat(0, 0, -23, 1, this.blockObj);
      if (success) {
        repeat(2, 3, -6, 2, this.blockObj);
        if ((this.blockObj[4].method === 'changeAvatar' && Number(this.blockObj[4].params.spriteIndex) === 0 && Number(this.blockObj[4].params.avatarIndex) === 1) || (this.blockObj[4].method === 'nextAvatar' && Number(this.blockObj[4].params.spriteIndex) === 0)) {
          if ((this.blockObj[this.blockList.length - 1].method === 'moveTo' || this.blockObj[this.blockList.length - 1].method === 'moveBy') && Number(this.blockObj[this.blockList.length - 1].params.spriteIndex) === 0 && spriteStatus[7].currentPosition.x === 8 && spriteStatus[7].currentPosition.y === -10) {
            this.successObj['success'] = true;
            this.successObj['title'] = 'Great!';
            this.successObj['msg'] = 'The bottle is labelled and ready to be filled with milk.';
            this.successObj['mascotImage'] = 'assets/images/activities/packaging_milk/mascot_head.png';
            this.successObj['backgroundColor'] = 'rgb(255, 230, 85)';
            return callback(this.successObj);
          }
        }
      }

      function repeat(n, position, positionX, sprite, blockObj) {
        if ((blockObj[n].method === 'moveTo' || blockObj[n].method === 'moveBy') && Number(blockObj[n].params.spriteIndex) === 0 && spriteStatus[position].currentPosition.x === positionX && spriteStatus[position].currentPosition.y === -10) {
          
          if (blockObj[n + 1].method === 'repeat' && Number(blockObj[n + 1].params.times) === 2) {
            const innerCode = atob(blockObj[n + 1].params.linesOfCode).split(';');
            const code = {};
            let waitSec = [];
            let waitValue = 0;

            for (let j = 0; j < innerCode.length - 1; j++) {
              code[j] = JSON.parse(innerCode[j]);
              if (code[j].method === 'wait') {
                waitSec.push(code[j].params.wait_secs);
              }
            }
            waitSec.forEach(function (value) {
              waitValue += value;
            }, this);
            if (waitValue <= 1.5 && waitValue >= 0.5 && code[innerCode.length - 2].method == 'nextAvatar' && Number(code[innerCode.length - 2].params.spriteIndex) === sprite) {
              success = true;
            }
          }
        }
      }
    }, 100);
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
          return;
        case 'create':
          if (json.ids.length === 7 && blockPresentOnWorkspace.length === 0) {
            for (let i = 0; i < 7; i++) {
              blockPresentOnWorkspace.push(json.ids[i]);
            }
          }
      }
    }

    for (let i = 0; i < blockPresentOnWorkspace.length; i++) {

      // check a : Existing blocks deleted/detached?
      if ((json.type === 'delete' || (json.type === 'move' && json.blockId !== blockPresentOnWorkspace[0])) && json.blockId === blockPresentOnWorkspace[i]) {
        initialLoadFlag = true;
        blockPresent = true;
        return cb('Don’t delete or detach the code that cleans the bottle. Add blocks to move the bottle under the labeller, get it labelled, and then move it to the milk dispensing spot.');
      }
    }

    if (json.type === 'move' && blockPresent === false && !e.newParentId && workspace.topBlocks_.length === 1 && json.blockId !== 'move_to') {
      initialLoadFlag = true;
      return cb(`Don't attach the blocks above the given code. The bottle should be clean before labelling it.`);
    }

    if (json.type === 'change' || (((json.type === 'move' && !e.newInputName) || json.type === 'delete') && blockPresent === false)) {
      const text = Blockly.Xml.workspaceToDom(workspace);
      blocksData.packaging_milk_coding2_challenge.initialCode = Blockly.Xml.domToPrettyText(text);
    }
  }
}

