import { Injectable } from '@angular/core';
import { blocksData } from './../../../data/coding';
import { ActivityTrackerService } from './../../../shared-services/activity-tracker.service';

declare var Blockly: any;
let blockPresentOnWorkspace = [];
let initialLoadFlag = true;
declare function unescape(s: string): string;

@Injectable()
export class MagicalCaveService {
  private blockList: any;
  private codes: Array<any>;
  private blockdata: any;
  private successObj: any;
  private firstCheckDone: any;
  private secondCheckDone: any;
  private thirdCheckDone: any;
  private oldXml: string;
  private localData: any;
  private tracker: ActivityTrackerService;

  constructor() {
    this.blockdata = {};
    this.successObj = {};
    this.firstCheckDone = 0;
    this.secondCheckDone = 0;
    this.thirdCheckDone = 0;
    this.oldXml = '';
    this.tracker = new ActivityTrackerService();
  }

  validateCode(blockList, codes, sprites, spriteStatus, callback) {
    setTimeout(() => {
      this.blockdata = {};
      this.blockList = blockList;
      this.codes = codes;
      const nearPoleArea = {
        'x1': -30, 'x2': -19, 'y1': -10, 'y2': 3
      };

      for (let i = 0; i < this.blockList.length; i++) {
        this.blockdata[i] = JSON.parse(this.codes[i]).params;
        this.blockdata[i]['name'] = this.blockList[i];
      }
    
      const boyPosition = sprites[0].currentOffset;
      const rockPosition = sprites[1].currentOffset;
      if (this.blockList[0] === 'moveTo' && boyPosition.x >= nearPoleArea.x1 && boyPosition.x <= nearPoleArea.x2 && boyPosition.y >= nearPoleArea.y1 && boyPosition.y <= nearPoleArea.y2) {
        if (this.blockdata[1].name === 'say' && Number(this.blockdata[1].spriteIndex) === 0 && unescape(this.blockdata[1].textName).toLowerCase().indexOf('petros mobilios') >= 0) {
          if (this.blockList[2] === 'moveBy' && (Number(this.blockdata[2].spriteIndex) === 1) && ((rockPosition.x >= 6 || rockPosition.x <= -17) && rockPosition.y === sprites[1].initialOffset.y)) {
            if (this.blockList[3] === 'say' && Number(this.blockdata[3].spriteIndex) === 2 && unescape(this.blockdata[3].textName).toLowerCase().indexOf('thank') >= 0) {
              this.tracker.setContent('sequencing', 2);
              this.successObj['success'] = true;
              this.successObj['title'] = 'You did it!';
              this.successObj['msg'] = 'The genie will make sure that there’s a whole lot of magic in store for you.';
              return callback(this.successObj);
            }
          }
        }
      }
   
    }, 100);

  }

  workSpaceOnChange(e, cb, workSpace) {
  
    let blockPresent = false;
    const json = e.toJson();
  
    if (initialLoadFlag) {
      switch (json.type) {
        case 'ui':
          return;  
        case 'move':
          initialLoadFlag = false;
          return;
        case 'delete':
          return;
        case 'create':
          if (json.ids.length === 7) {
            blockPresentOnWorkspace = [];
            for (let i = 0; i < json.ids.length; i++) {
              blockPresentOnWorkspace.push(json.ids[i]);
            }
          }  
      }
    }
 
    for (let i = 0; i < blockPresentOnWorkspace.length; i++) {
      // check 0: Any block added or deleted?
      if (json.type === 'move' && json.blockId === blockPresentOnWorkspace[i]) {
        blockPresent = true; 
        if (!e.oldParentId) {
          const text = Blockly.Xml.workspaceToDom(workSpace);
          blocksData.magical_cave_coding.initialCode = Blockly.Xml.domToPrettyText(text);
        } 
      }
      if (json.type === 'delete' && json.blockId === blockPresentOnWorkspace[i]) {
        initialLoadFlag = true;
        return cb(`You don’t need to add or delete any blocks. Just correct the sequence of blocks and their inputs.`);
      }
      if (json.type === 'change' && json.blockId === blockPresentOnWorkspace[i]) {
        const text = Blockly.Xml.workspaceToDom(workSpace);
        blocksData.magical_cave_coding.initialCode = Blockly.Xml.domToPrettyText(text);
      }
    }
  
    if (json.type === 'move' && blockPresent === false ) {
      initialLoadFlag = true;
      cb(`You don’t need to add or delete any blocks. Just correct the sequence of blocks and their inputs.`);
    }
   
  }
}
