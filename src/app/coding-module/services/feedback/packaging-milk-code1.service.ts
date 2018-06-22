import { Injectable } from '@angular/core';
import { blocksData } from './../../../data/coding';

declare var Blockly: any;
let blockPresentOnWorkspace = [];
let initialLoadFlag = true;

@Injectable()
export class PackagingMilkCode1Service {
  private blockList: any;
  private codes: Array<any>;
  private successObj;

  constructor() { 
    this.successObj = {};
  }

  validateCode(blockList, codes, sprites, spriteStatus, callback) {
    setTimeout(() => {
      this.blockList = blockList;
      this.codes = codes;
     
      const blockObj = JSON.parse(this.codes[0].match(/'(.*?)'/)[1]);

      if (Number(blockObj.spriteIndex) === 0 && spriteStatus[0].currentPosition.x === -23 && spriteStatus[0].currentPosition.y === -10) {
  
        if (this.codes[1] === 'var repeat_end = (2)') {
    
          const thirdBlock = this.codes[2].split(/{([^}]+)}/)[1].split(':')[1].replace(/"/g, '');
          if (Number(thirdBlock) <= 1.5 && Number(thirdBlock) >= 0.5) {
         
            const fourthblock = this.codes[3].split(/{([^}]+)}/)[1].replace(/\"/g, "");
            if (fourthblock === 'spriteIndex:1') {
              this.successObj['success'] = true;
              this.successObj['title'] = 'Great!';
              this.successObj['msg'] = 'The bottle is now sparkling clean and fit to be filled with milk.';
              this.successObj['mascotImage'] = 'assets/images/activities/packaging_milk/mascot_head.png';
              this.successObj['backgroundColor'] = 'rgb(255, 230, 85)';
              return callback(this.successObj);
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
          blockPresentOnWorkspace = [];
          return;
        case 'create':
          blockPresentOnWorkspace = [];  
          for (let i = 0; i < json.ids.length; i++) {
            switch (json.ids[i]) {
              case 'move_to': blockPresentOnWorkspace.push(json.ids[i]);
                break;
              case 'get_coordinates': blockPresentOnWorkspace.push(json.ids[i]);
                break;
              case 'wait': blockPresentOnWorkspace.push(json.ids[i]);
                break;
              case 'next_look': blockPresentOnWorkspace.push(json.ids[i]);
                break;
              case 'controls_repeat_ext': blockPresentOnWorkspace.push(json.ids[i]);
                break;
            }            
          }
      }
    }
   
    for (let i = 0; i < blockPresentOnWorkspace.length; i++) {
      if (json.type === 'move' && json.blockId === blockPresentOnWorkspace[i]) {
        blockPresent = true;
      }

      // check b : Existing blocks deleted/sequence changed/detached?
      if ((json.type === 'delete') && json.blockId === blockPresentOnWorkspace[i]) {
          console.log('inside delete', workspace.topBlocks_.length);
          initialLoadFlag = true;
          return cb('Don’t delete or rearrange the blocks in the given code. Just give correct inputs to the blocks.');
        }
      
      if (json.type === 'move' && json.blockId === blockPresentOnWorkspace[i] && json.blockId !== blockPresentOnWorkspace[0]) {
        initialLoadFlag = true;
        return cb('Don’t delete or rearrange the blocks in the given code. Just give correct inputs to the blocks.');
      }
    }
    
    if (workspace.topBlocks_.length === 1 && json.type === 'move' && blockPresent === false && !e.newInputName) {
      initialLoadFlag = true;
        return cb('You do not need to add any new code. Just enter the required inputs.');
    }
    
    if ((workspace.topBlocks_.length === 1 && json.type === 'move' && blockPresent === false) || json.type === 'change') {
      const text = Blockly.Xml.workspaceToDom(workspace);
      blocksData.packaging_milk_coding1.initialCode = Blockly.Xml.domToPrettyText(text);
    }

  }
}  
