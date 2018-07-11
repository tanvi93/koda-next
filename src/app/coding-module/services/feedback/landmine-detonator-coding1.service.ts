import { Injectable } from '@angular/core';
import { element } from 'protractor';

let initialLoadFlag = true;
let initialblockArray: string[] = [];

@Injectable()
export class LandmineDetonatorCoding1Service {

  private success: Boolean;
  private successObj: any;
  private blockDetail: object;

  constructor() {
    this.success = false;
    this.successObj = {};
  }

  validateCode(blockList, codes, sprites, spriteStatus, callback) {

    setTimeout(() => {

      let updatedBlockList = [];
      let nonRequiredBlock = [];
      let spriteIndex = [];
      let droneBlockList = [];
      let landmineBlockList = [];
      let detonatorBlockList = [];
      let explosionBlockList = [];
      let step1Index = 0;
      let step2Index = 0;
      let extraDetonatorBlock = 0;
      let removeExtraBlock = 0;
     
      blockList.forEach((element, index) => {
        if (element !== 'wait' && element !== 'showCoo' && element !== 'say') {
          updatedBlockList.push(element);
        } else if (element === 'showCoo' || element === 'say') {
          nonRequiredBlock.push(index);
        }
      });
      
      codes.forEach(element => {
        let data = JSON.parse(element);
        if (data.method !== 'showCoo' && data.method !== 'wait' && data.method !== 'say') {
          spriteIndex.push(data.params.spriteIndex);
        }
      });
      
      spriteIndex.forEach((element, index) => {
        switch (element) {
          case '0': {
            droneBlockList.push(index);
            break;
          }
          case '1': {
            landmineBlockList.push(index);
            break;
          }
          case '2': {
            detonatorBlockList.push(index);
            break;
          }
          case '3': {
            explosionBlockList.push(index);
            break;
          }
          default: {
            
          }
        }
      });

     
      

      spriteIndex.every((element, index) => {
        if (element !== '0') {
          step1Index = index;
          return false;
        } else return true;
      });
      let step2SpriteStatus: any[] = spriteIndex.splice(step1Index);

      console.log(spriteStatus);
      
      
      if (step2SpriteStatus.length > 0) {
        step2SpriteStatus.every((element, index) => {
          if (element !== '2') {
            step2Index = index;
            return false;
          } else return true;
        });
      }
      
      if (updatedBlockList[detonatorBlockList[detonatorBlockList.length - 1]] === 'visiblityToggle'
        && updatedBlockList[detonatorBlockList[detonatorBlockList.length - 2]] === 'visiblityToggle') {
        extraDetonatorBlock = 0;
        removeExtraBlock = 1;
      } else {
        extraDetonatorBlock = 1;
        removeExtraBlock = 0;
      }

      console.log(sprites);
      
      step2Index = step1Index + step2Index;
      
      if (nonRequiredBlock.length === 0) {
        if ((updatedBlockList[step1Index - 1] === 'moveBy' || updatedBlockList[step1Index - 1] === 'moveTo')
          && spriteStatus[step1Index - 1].currentPosition.x >= 8 && spriteStatus[step1Index - 1].currentPosition.x <= 10 && spriteStatus[step1Index - 1].currentPosition.y >= -7 && spriteStatus[step1Index - 1].currentPosition.y <= -2) {
            
          if (step1Index < step2Index && updatedBlockList[detonatorBlockList[detonatorBlockList.length + extraDetonatorBlock - 3]] === 'goTo' && spriteStatus[detonatorBlockList[detonatorBlockList.length + extraDetonatorBlock - 3]].currentPosition.x >= 8 && spriteStatus[detonatorBlockList[detonatorBlockList.length + extraDetonatorBlock - 3]].currentPosition.x <= 10 && (spriteStatus[detonatorBlockList[detonatorBlockList.length + extraDetonatorBlock - 3]].currentPosition.y === -11 || spriteStatus[detonatorBlockList[detonatorBlockList.length + extraDetonatorBlock - 3]].currentPosition.y === -12)) {
              
            if (updatedBlockList[detonatorBlockList[detonatorBlockList.length + extraDetonatorBlock - 2]] === 'visiblityToggle' && spriteStatus[detonatorBlockList[detonatorBlockList.length + extraDetonatorBlock - 2]].visibility.spriteIndex === '2' && spriteStatus[detonatorBlockList[detonatorBlockList.length + extraDetonatorBlock - 2]].visibility.visibility === 1) {
              
              if (updatedBlockList[step2Index] === 'nextAvatar'
                || updatedBlockList[step2Index] === 'changeAvatar') {
                
                if ((updatedBlockList[droneBlockList[droneBlockList.length - 1]] === 'moveTo'
                  || updatedBlockList[droneBlockList[droneBlockList.length - 1]] === 'moveBy')
                  && spriteStatus[droneBlockList[droneBlockList.length - 1]].currentPosition.y >= 1
                  && Math.abs(spriteStatus[droneBlockList[droneBlockList.length - 1]].currentPosition.y) < 20
                  && Math.abs(spriteStatus[droneBlockList[droneBlockList.length - 1]].currentPosition.y) < 30) {
                    
                  if (updatedBlockList[explosionBlockList[explosionBlockList.length - 2]] === 'goTo'
                    && sprites[3].currentOffset.x >= 8 && sprites[3].currentOffset.x <= 10
                    && (sprites[3].currentOffset.y === -11 || sprites[3].currentOffset.y === -12)) {
                    
                    if ((explosionBlockList[explosionBlockList.length - 1] + 3 === updatedBlockList.length)
                      || ((explosionBlockList[explosionBlockList.length - 1] + 1 + landmineBlockList.length) === (updatedBlockList.length)- removeExtraBlock)) {
                      
                      if (!sprites[3].isHidden && sprites[0].currentLookIdx == '1' && (landmineBlockList.length <= 1) && updatedBlockList[explosionBlockList[explosionBlockList.length - 1]] === 'visiblityToggle') {
                        this.success = true;
                        this.successObj['success'] = this.success;
                        this.successObj['title'] = 'That\'s awesome!';
                        this.successObj['msg'] = 'However, remember that landmines could be anywhere on a minefield. We must make sure that our code is robust.';
                        return callback(this.successObj);
                      }
                    }
                  }
                }
              }
            }  
          }
        }
      }

      }, 500);
  }
  
  workSpaceOnChange(e, cb, wsp) {
    
    if (e.type === 'create' && (e.blockId === 'move_by')) {
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

    // if (!wsp.getBlockById('move_by') || wsp.topBlocks_[0].id !== 'move_by') {
    //   initialLoadFlag = true;
    //   cb('The code given to you is for the drone scanning the minefield. Add your blocks below it.');
    // }

    // // to allow only goto block to be able move  
    // if (e.type === 'move' && e.blockId !== 'move_by'  && initialblockArray.indexOf(e.blockId) !== -1) {
    //   initialLoadFlag = true;
    //   cb('Don\'t make any changes to the code given to you. It makes the drone scan the minefield. Add new blocks to complete the detonation of the landmine as shown in the preview.');
    // }

    // // to detect change n deletion of required block 
    // if ((e.type === 'change' || e.type === 'delete') && (initialblockArray.indexOf(e.blockId) !== -1 && (e.element === 'field'))) {
    //     initialLoadFlag = true;
    //   cb('Don\'t make any changes to the code given to you. It makes the drone scan the minefield. Add new blocks to complete the detonation of the landmine as shown in the preview.');
    // }

    // if (e.type === 'delete' && initialblockArray.indexOf(e.blockId) !== -1) {
    //   initialLoadFlag = true;
    //   cb('Don\'t make any changes to the code given to you. It makes the drone scan the minefield. Add new blocks to complete the detonation of the landmine as shown in the preview.');
    // }
  }
}
