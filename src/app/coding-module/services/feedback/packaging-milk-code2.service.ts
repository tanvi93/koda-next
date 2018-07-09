import { Injectable } from '@angular/core';
import { blocksData } from './../../../data/coding';

declare var Blockly: any;
let blockPresentOnWorkspace = [];
let initialLoadFlag = true;
let insideRepeatBlock;
let a;

@Injectable()
export class PackagingMilkCode2Service {
  private blockList: any;
  private codes: Array<any>;
  private successObj;
  private firstCheck: Boolean;

  constructor() {
    this.successObj = {};
    this.firstCheck = false;
  }

  validateCode(blockList, codes, sprites, spriteStatus, callback) {
    setTimeout(() => {
      this.blockList = blockList;
      this.codes = codes;
console.log(this.blockList);
      const blockObj = JSON.parse(this.codes[0]).params;
    
      loop1: for (let i = 0; i < this.blockList.length; i++) {
        if (this.blockList[i] !== 'wait') {
          if ((this.blockList[i] === 'moveTo' || this.blockList[i] === 'moveBy') && Number(blockObj.spriteIndex) === 0 && spriteStatus[0].currentPosition.x === -23 && spriteStatus[0].currentPosition.y === -10) {
          
            for (let j = i + 1; j < (this.blockList.length - i); j++) {
              if (this.blockList[j] !== 'wait'){
                const repeatBlockObj = JSON.parse(this.codes[j]).params;

                if (Number(repeatBlockObj.times) === 2) {
                  const innerCode =atob(repeatBlockObj.linesOfCode).split(';');
                  const insideRepeatBlock = JSON.parse(innerCode[0]).params;
                  const innerCode2 = JSON.parse(innerCode[1]).params;
        
                    if (this.blockList[j + 2] !== 'wait' && this.blockList[j + 2] === '  nextAvatar') {
              
                        if (Number(insideRepeatBlock.wait_secs) <= 1.5 && Number(insideRepeatBlock.wait_secs) >= 0.5) {
              
                          if (Number(innerCode2.spriteIndex) === 1) {
                            this.firstCheck = true;
                            a = j + 2;
                          }
                        }  
                      } else if (this.blockList[j + 2] === '  wait') {
                        const waitTime = Number(JSON.parse(this.codes[i + 3]).times);
                        const totalTime = insideRepeatBlock + waitTime;
                        if (totalTime > 1.5 || totalTime < 0.5) {
                          break loop1;
                        }
                      }
                  
                  break loop1;
                }
                break loop1;
            }
            }
          }
          break;
        }
      }
      if (this.firstCheck) {
        loop2: for (let i = a + 1; i < this.blockList.length; i++) {
          if (this.blockList[i] !== 'wait') {
            this.blockList[i] = this.blockList[i].replace(/(\r\n|\n|\r)/gm, '').replace('}', '');
    
            if ((this.blockList[i] === 'moveTo' || this.blockList[i] === 'moveBy') && Number(blockObj.spriteIndex) === 0 && spriteStatus[3].currentPosition.x === -6 && spriteStatus[3].currentPosition.y === -10) {
          
              for (let j = i + 1; j < this.blockList.length; j++) {
                if (this.blockList[j] !== 'wait') {
                  if (this.codes[j] === 'var repeat_end2 = (2)') {
                    if (this.blockList[j + 1] === 'for ') {
                      insideRepeatBlock = Number(this.codes[j + 1].split(/{([^}]+)}/)[1].split(':')[1].replace(/"/g, ''));
                      if (this.blockList[j + 2] !== 'wait' && this.blockList[j + 2] === '  nextAvatar') {
                        if (insideRepeatBlock <= 1.5 && insideRepeatBlock >= 0.5) {
                          const fourthblock = this.codes[j + 2].split(/{([^}]+)}/)[1].replace(/\"/g, "");
                          if (fourthblock === 'spriteIndex:2') {
  
                            for (let k = j + 3; k < this.blockList.length; k++) {
                              this.blockList[k] = this.blockList[k].replace(/(\r\n|\n|\r)/gm, '').replace('}', '');
                              if (this.blockList[k] !== 'wait') {
                                if (this.blockList[k] === 'nextAvatar' || this.blockList[k] === 'changeAvatar') {
                                  const nextLook = this.codes[k].split(/{([^}]+)}/)[1].replace(/\"/g, "");
                                  console.log(nextLook);
                                  if ((nextLook === 'spriteIndex:0') || (nextLook === 'spriteIndex:0,avatarIndex:1')) {
                                    for (let l = k + 1; l < this.blockList.length;) {
                                      if (this.blockList[l] !== 'wait') {
                                        if ((this.blockList[l] === 'moveTo' || this.blockList[l] === 'moveBy') && Number(blockObj.spriteIndex) === 0 && spriteStatus[7].currentPosition.x === 8 && spriteStatus[7].currentPosition.y === -10) {
                                          if (l === blockList.length - 1) {
                                            this.successObj['success'] = true;
                                            this.successObj['title'] = 'Great!';
                                            this.successObj['msg'] = 'The bottle is labelled and ready to be filled with milk.';
                                            this.successObj['mascotImage'] = 'assets/images/activities/packaging_milk/mascot_head.png';
                                            this.successObj['backgroundColor'] = 'rgb(255, 230, 85)';
                                            return callback(this.successObj);
                                          }
                                          break loop2;
                                        }
                                        break loop2;
                                      } else {
                                        l++;
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        } else if (this.blockList[j + 2] === '  wait') {
                          const waitTime = Number(this.codes[i + 3].split(/{([^}]+)}/)[1].split(':')[1].replace(/"/g, ''));
                          const totalTime = insideRepeatBlock + waitTime;
                          if (totalTime > 1.5 || totalTime < 0.5) {
                            break loop2;
                          }
                        }
                      }
                      break loop2;
                    }
                    break loop2;
                  }
                }
              }
              break;
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
      blocksData.packaging_milk_coding2.initialCode = Blockly.Xml.domToPrettyText(text);
    }
  }
}  

