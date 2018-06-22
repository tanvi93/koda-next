import { Injectable } from '@angular/core';

let initialLoadFlag = true;
let initialblockArray: string[] = [];
let numberArray: string[] = [];
const movebyArray: string[] = [];
const essentialBlock: string[] = [];
const otherNonEssentialBlock: string[] = [];
let lastHideBlock: string;
@Injectable()
export class LandmineDetonatorCoding2Service {

  private blockList: any;
  private codes: Array<any>;
  private blockObj: any;
  private success: Boolean;
  private successObj: any;

  constructor() {
    this.success = false;
    this.successObj = {};
    this.blockObj = {};
  }

  validateCode(blockList, codes, sprites, spriteStatus, callback) {

    setTimeout(() => {

      this.blockList = blockList;
      this.codes = codes;
      const updatedBlockList = [];
      const nonRequiredBlock = [];
      const spriteIndex = [];
      const droneBlockList = [];
      const landmineBlockList = [];
      const detonatorBlockList = [];
      const explosionBlockList = [];
      let droneMineFieldPosition = 0;
      let extraDetonatorBlock = 0;
      let removeExtraBlock = 0;
      let droneLookCount = 0;
      console.log(codes);
      
      blockList.forEach((element, index) => {
        if (element !== 'showCoo' && element !== 'say') {
          updatedBlockList.push(element);
        } else if (element === 'showCoo' || element === 'say') {
          nonRequiredBlock.push(index);
        }
      });


      for (let i = 0; i < this.codes.length; i++) {
        this.blockObj[i] = JSON.parse(this.codes[i].match(/'(.*?)'/)[1]);
        }


      codes.forEach(element => {
        if (element.indexOf('showCoo') === -1 && element.indexOf('say')) {
          if (element === 'wait') {
            spriteIndex.push('wait');
          } else {
            spriteIndex.push(element[element.indexOf('spriteIndex') + 14]);
          }
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
            console.log('invalid option selected');
          }  
        }
      });

      if (updatedBlockList[detonatorBlockList[detonatorBlockList.length - 1]] === 'visiblityToggle'
        && updatedBlockList[detonatorBlockList[detonatorBlockList.length - 2]] === 'visiblityToggle') {
        extraDetonatorBlock = 0;
        removeExtraBlock = 1;
      } else {
        extraDetonatorBlock = 1;
        removeExtraBlock = 0;
      }
      
      if (nonRequiredBlock.length === 0 && essentialBlock.length === 5) {
        // checking whether top block is goTo and also its child blocks are random
        if (blockList[0] === 'goTo' && this.blockObj[0].x.substring('getRandom') && this.blockObj[0].y.substring('getRandom') && this.blockObj[0].spriteIndex === '1') {
          console.log('entered');
          
          const RandomData = [];
          
          this.blockObj[0].childJson.forEach(element => {
            if (element.name === 'random_number') {
              RandomData.push(element);
            }
          });
          
          
          const xChildValue1 = RandomData[0].childJson[0].value;
          const xChildValue2 = RandomData[0].childJson[1].value;
          const yChildValue1 = RandomData[1].childJson[0].value;
          const yChildValue2 = RandomData[1].childJson[1].value;
  
          
          // to check range of x value of random block
          if ((((xChildValue1 >= -27 && xChildValue1 <= -10 && xChildValue2 >= 10 && xChildValue2 <= 27)
                || (xChildValue2 >= -27 && xChildValue2 <= -10 && xChildValue1 >= 10 && xChildValue1 <= 27)
            && ((yChildValue1 >= -15 && yChildValue1 <= -12 && yChildValue2 >= -8 && yChildValue2 <= -4)
              || (yChildValue2 >= -15 && yChildValue2 <= -12 && yChildValue1 >= -8 && yChildValue1 <= -4))))
            || (((yChildValue1 >= -27 && yChildValue1 <= -10 && yChildValue2 >= 10 && yChildValue2 <= 27)
              || (yChildValue2 >= -27 && yChildValue2 <= -10 && yChildValue1 >= 10 && yChildValue1 <= 27)
              && ((xChildValue1 >= -15 && xChildValue1 <= -12 && xChildValue2 >= -8 && xChildValue2 <= -4)
                || (xChildValue2 >= -15 && xChildValue2 <= -12 && xChildValue1 >= -8 && xChildValue1 <= -4))))) {
              
              
              // checking whether the drone is scanning the minefield or not using two moveby blocks
              if (this.blockObj[1].direction === 'R' && this.blockObj[1].x === 50
              && this.blockObj[2].direction === 'L' && this.blockObj[1].x === 50) {
                console.log('perfect condition for scanning');
                
                
                droneBlockList.forEach((element, index) => {
                  if (blockList[element] === 'changeAvatar') {
                    droneMineFieldPosition = index;
                    ++droneLookCount;
                  }
                });
                // condition to  failed
                if (droneMineFieldPosition !== 0 && droneLookCount === 1) {
                  // check whether the drone is above the minefield after scanning and also whether it have all the required blocks needed to perform task
                  
                  if (blockList[droneMineFieldPosition] === 'moveTo'
                    && this.blockObj[droneMineFieldPosition].x.indexOf('getCoordinate') !== -1
                    && this.blockObj[droneMineFieldPosition].y.indexOf('getCoordinate') !== -1
                    && this.blockObj[droneMineFieldPosition].y.indexOf('getArithmetic') !== -1
                    && sprites[1].currentOffset.x === spriteStatus[droneMineFieldPosition].currentPosition.x
                    && (spriteStatus[droneMineFieldPosition].currentPosition.y - sprites[1].currentOffset.y >= 5 && spriteStatus[droneMineFieldPosition].currentPosition.y - sprites[1].currentOffset.y <= 10)) {
                        console.log('perfect range for move to drone motion ie 5 to 10');
                        
                    
                    // condition to avoid boundary condition and explosion proximity condition to get triggered
                    if ((updatedBlockList[droneBlockList[droneBlockList.length - 1]] === 'moveTo'
                      || updatedBlockList[droneBlockList[droneBlockList.length - 1]] === 'moveBy')
                      && (sprites[1].currentOffset.y < (sprites[0].currentOffset.y + 16))
                      && Math.abs(spriteStatus[droneBlockList[droneBlockList.length - 1]].currentPosition.y) < 20
                      && Math.abs(spriteStatus[droneBlockList[droneBlockList.length - 1]].currentPosition.y) < 30) {
                          console.log('perfect drone movement in upward direction');
                          
                        // check whether the detonator is above the minefield and also whether it have all the required blocks needed to perform task
                      if (blockList[detonatorBlockList[detonatorBlockList.length + extraDetonatorBlock - 3]] === 'goTo'
                        && this.blockObj[detonatorBlockList[detonatorBlockList.length + extraDetonatorBlock - 3]].x.indexOf('getCoordinate') !== -1
                        && this.blockObj[detonatorBlockList[detonatorBlockList.length + extraDetonatorBlock - 3]].y.indexOf('getCoordinate') !== -1
                      && this.blockObj[detonatorBlockList[detonatorBlockList.length + extraDetonatorBlock - 3]].y.indexOf('getArithmetic') !== -1
                      && sprites[1].currentOffset.x === spriteStatus[detonatorBlockList[detonatorBlockList.length + extraDetonatorBlock - 3]].currentPosition.x
                      && (sprites[1].currentOffset.y === (spriteStatus[detonatorBlockList[detonatorBlockList.length + extraDetonatorBlock - 3]].currentPosition.y - 2))) {
                          console.log('proper condition for detonator movement');
                          
                        // positioning of explosion over the landmine 
                        if (blockList[explosionBlockList[explosionBlockList.length - 2]] === 'goTo'
                        && this.blockObj[explosionBlockList[explosionBlockList.length - 2]].x.indexOf('getCoordinate') !== -1
                        && this.blockObj[explosionBlockList[explosionBlockList.length - 2]].y.indexOf('getCoordinate') !== -1
                        && this.blockObj[explosionBlockList[explosionBlockList.length - 2]].y.indexOf('getArithmetic') !== -1
                        && sprites[3].currentOffset.x === sprites[1].currentOffset.x
                        && (sprites[3].currentOffset.y === (sprites[1].currentOffset.y + 2))) {
                            console.log('proper condition for explosion movement');
                            

                          if ((explosionBlockList[explosionBlockList.length - 1] + 3 === updatedBlockList.length)
                            || ((explosionBlockList[explosionBlockList.length - 1] + 1 + landmineBlockList.length) === (updatedBlockList.length) - removeExtraBlock)) {
  
                            if (!sprites[3].isHidden && sprites[0].currentLookIdx === '1' && (landmineBlockList.length <= 2) && landmineBlockList.length > 0 && updatedBlockList[explosionBlockList[explosionBlockList.length - 1]] === 'visiblityToggle') {
                              
                              this.success = true;
                              this.successObj['success'] = this.success;
                              this.successObj['title'] = 'Bravo!';
                              this.successObj['msg'] = 'That\'s some seriously good work.';
                              this.successObj['mascotImage'] = 'assets/images/activities/landmine_detonator/mascot_head.png';
                              this.successObj['backgroundColor'] = 'rgb(255, 230, 85)';
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
          }
        }
      }, 2000);
  }

  workSpaceOnChange(e, cb, wsp) {

    const tempBlock = wsp.getAllBlocks();

    if (e.type === 'create' && (e.blockId === 'move_by')) {
      
      initialblockArray = e.ids;
      tempBlock.forEach(element => {
        if (element.type === 'number') {
          numberArray.push(element.id);
        }
        if (element.type === 'move_by') {
          movebyArray.push(element.id);
        }
        
        
        if (element.type === 'next_look' || element.type === 'change_look' || element.type === 'show_hide') {
          essentialBlock.push(element.id);
            if (element.type === 'show_hide' && element.childBlocks_.length === 0) {
              lastHideBlock = element.id;
            }
        } else {
          if (element.type !== 'move_by') {
            otherNonEssentialBlock.push(element.id);
          }
        }
      });
    }

    if (initialLoadFlag) {
      switch (e.type) {
        case 'move':
          initialLoadFlag = false;
          return;
        case 'delete':
          initialblockArray = [];
          numberArray = [];
          return;
        default:
          return;
      }
    }

    if (e.type === 'change' && initialblockArray.indexOf(e.blockId) !== -1 && numberArray.indexOf(e.blockId) <= 1) {
      initialLoadFlag = true;
      cb('Don’t update these inputs. You still want the drone to detonate the landmine. Just add blocks to make the landmine appear at random position and drone detonating the landmine irrespective of landmines position.');
    }
    
    if (e.type === 'delete' && numberArray.indexOf(e.blockId) <= 1 && initialblockArray.indexOf(e.blockId) !== -1) {
      initialLoadFlag = true;
      cb('Don’t update these inputs. You still want the drone to detonate the landmine. Just add blocks to make the landmine appear at random position and drone detonating the landmine irrespective of landmines position.');
    }

    if (e.type === 'move' && e.blockId !== 'move_by' && numberArray.indexOf(e.blockId) === -1 && initialblockArray.indexOf(e.blockId) !== -1) {
      initialLoadFlag = true;
      cb('Don’t delete or detach the given code. Just add blocks to make the landmine appear at random position and drone detonating the landmine irrespective of landmines position.');
    }
    
    if (e.type === 'move' && e.newParentId !== lastHideBlock && initialblockArray.indexOf(e.newParentId) !== -1 && wsp.getBlockById(e.blockId).type !== 'get_coordinates' && wsp.getBlockById(e.blockId).type !== 'random_number' && wsp.getBlockById(e.blockId).type !== 'arithmetic_operators' && numberArray.indexOf(e.blockId) < 1) {
      initialLoadFlag = true;
      cb('There is no need to add this block. Just add blocks to make the landmine appear at random position and drone detonating the landmine irrespective of landmines position.');
    }
  }
}
