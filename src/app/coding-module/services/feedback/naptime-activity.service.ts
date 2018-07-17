import { Injectable } from '@angular/core';
import { assetsLink } from './../../../shared-services/config';
import { ActivityTrackerService } from './../../../shared-services/activity-tracker.service'; 

let initialLoadFlag = true;
let initialblockArray: string[] = [];
let repeatNTimesCount = 0;
let changeLookCount = 0;
let extraCount = 0;
let goToCount = 0;
let moveCount = 0;
let numberArray = [];


@Injectable()
export class NaptimeActivityService {
  private tracker: ActivityTrackerService;
  private success: Boolean;
  private successObj: any;
  
  constructor() {
    this.success = false;
    this.successObj = {};
    this.tracker = new ActivityTrackerService();
  }
  
  validateCode(blockList, codes, sprites, spriteStatus, callback) {
    
    
    setTimeout(() => {
      
      let spriteStatusValue = [];
      let oreoLookPosition = 0;
      let graceLookPosition = 0;
      let roxyLookPosition = 0;
      
      spriteStatus.forEach((element, index) => {
        spriteStatusValue.push(Object.values(element)[0]);
      });

      
      oreoLookPosition = spriteStatusValue.indexOf(sprites[2].looks[0]);
      graceLookPosition = spriteStatusValue.indexOf(sprites[0].looks[0]);
      roxyLookPosition = spriteStatusValue.indexOf(sprites[1].looks[0]);

      if (spriteStatus.length === 20 && changeLookCount === 3 && repeatNTimesCount === 3 && goToCount === 3 && moveCount === 6 && extraCount === 0) {
        
        if (sprites[0].currentLookIdx == 1 && sprites[1].currentLookIdx == 1 && sprites[2].currentLookIdx == 1) {
          // oreo goto correct condition
          if (spriteStatus[oreoLookPosition - 7].currentPosition.x <= -27 && spriteStatus[oreoLookPosition - 7].currentPosition.x >= -30 && (spriteStatus[oreoLookPosition - 7].currentPosition.y >= 18 && spriteStatus[oreoLookPosition - 7].currentPosition.y <= 21)) {
            
            // grace goto correct condition
            if (spriteStatus[graceLookPosition - 5].currentPosition.x <= -2 && spriteStatus[graceLookPosition - 5].currentPosition.x >= -6 && (spriteStatus[graceLookPosition - 5].currentPosition.y >= 19 && spriteStatus[graceLookPosition - 5].currentPosition.y <= 22)) {
              
              // roxy goto correct condition
              if (spriteStatus[roxyLookPosition - 5].currentPosition.x >= 19 && spriteStatus[roxyLookPosition - 5].currentPosition.x <= 22 && (spriteStatus[roxyLookPosition - 5].currentPosition.y >= 19 && spriteStatus[roxyLookPosition - 5].currentPosition.y <= 21)) {
              
                
                // oreo move block condition constant x position
                if (spriteStatus[oreoLookPosition - 7].currentPosition.x === spriteStatus[oreoLookPosition - 1].currentPosition.x && spriteStatus[oreoLookPosition - 5].currentPosition.x === spriteStatus[oreoLookPosition - 2].currentPosition.x) {
                
                  
                  
                  // grace move block condition constant x position
                  if (spriteStatus[graceLookPosition - 5].currentPosition.x === spriteStatus[graceLookPosition - 1].currentPosition.x && spriteStatus[graceLookPosition - 5].currentPosition.x === spriteStatus[graceLookPosition - 2].currentPosition.x) {
                   
                    
                    // roxy move block condition constant x position
                    if (spriteStatus[roxyLookPosition - 5].currentPosition.x === spriteStatus[roxyLookPosition - 1].currentPosition.x && spriteStatus[roxyLookPosition - 5].currentPosition.x === spriteStatus[roxyLookPosition - 2].currentPosition.x) {
                      
                      let xmin = 0;
                      let xmax = 0;
                      switch (spriteStatus[oreoLookPosition - 7].currentPosition.y) {
                        case 18: {
                          xmin = 1;
                          xmax = 2;
                          break;
                        }
                        case 19: {
                          xmin = 2;
                          xmax = 3;
                          break;
                        }
                        
                        case 20: {
                          xmin = 2;
                          xmax = 4;
                          break;
                        }
                        
                        case 21: {
                          xmin = 3;
                          xmax = 4;
                          break;
                        }
                        
                        default: ;
                      }
                      // oreo move block condition condition for y position
                      if (spriteStatus[oreoLookPosition - 7].currentPosition.y === spriteStatus[oreoLookPosition - 1].currentPosition.y && spriteStatus[oreoLookPosition - 7].currentPosition.y - spriteStatus[oreoLookPosition - 2].currentPosition.y >= xmin && spriteStatus[oreoLookPosition - 7].currentPosition.y - spriteStatus[oreoLookPosition - 2].currentPosition.y <= xmax) {
                        
                        switch (spriteStatus[graceLookPosition - 5].currentPosition.y) {
                          case 19: {
                            xmin = 2;
                            xmax = 3;
                            break;
                          }
                          case 20: {
                            xmin = 2;
                            xmax = 3;
                            break;
                          }

                          case 21: {
                            xmin = 3;
                            xmax = 4;
                            break;
                          }

                          case 22: {
                            xmin = 4;
                            xmax = 5;
                            break;
                          }

                          default: ;
                        }
                        
                        // grace move block condition condition for y position
                        if (spriteStatus[graceLookPosition - 5].currentPosition.y === spriteStatus[graceLookPosition - 1].currentPosition.y && spriteStatus[graceLookPosition - 5].currentPosition.y - spriteStatus[graceLookPosition - 2].currentPosition.y >= xmin && spriteStatus[graceLookPosition - 5].currentPosition.y - spriteStatus[graceLookPosition - 2].currentPosition.y <= xmax) {
                          

                          switch (spriteStatus[graceLookPosition - 5].currentPosition.y) {
                            case 19: {
                              xmin = 2;
                              xmax = 3;
                              break;
                            }
                            case 20: {
                              xmin = 2;
                              xmax = 3;
                              break;
                            }

                            case 21: {
                              xmin = 3;
                              xmax = 4;
                              break;
                            }

                            default: ;
                          }
                          // roxy move block condition for y position
                          if (spriteStatus[roxyLookPosition - 5].currentPosition.y === spriteStatus[roxyLookPosition - 1].currentPosition.y && spriteStatus[roxyLookPosition - 5].currentPosition.y - spriteStatus[roxyLookPosition - 2].currentPosition.y >= xmin && spriteStatus[roxyLookPosition - 5].currentPosition.y - spriteStatus[roxyLookPosition - 2].currentPosition.y <= xmax) {
                            
                            if (sprites[0].initialOffset.x === sprites[0].currentOffset.x && sprites[1].initialOffset.x === sprites[1].currentOffset.x && sprites[2].initialOffset.x === sprites[2].currentOffset.x && sprites[0].initialOffset.y === sprites[0].currentOffset.y && sprites[1].initialOffset.y === sprites[1].currentOffset.y && sprites[2].initialOffset.y === sprites[2].currentOffset.y) {
                              this.success = true;
                              this.successObj['success'] = this.success;
                              this.successObj['title'] = 'Great!';
                              this.successObj['msg'] = 'All my pets are asleep now.';
                              this.successObj['mascotImage'] = assetsLink + 'activities/naptime/mascot_head.png';
                              this.successObj['backgroundColor'] = 'rgb(255, 230, 85)';
                              this.tracker.setContent('loops', 2);
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
      }

    }, 500);
  }

  workSpaceOnChange(e, cb, wsp) {
    let tempBlock = wsp.getAllBlocks();
    repeatNTimesCount = 0;
    changeLookCount = 0;
    extraCount = 0;
    goToCount = 0;
    moveCount = 0;
      tempBlock.forEach((element, index) => {
        switch (element.type) {
          case 'controls_repeat_ext': {
            ++repeatNTimesCount;
            break;
          }
          case 'change_look': {
              ++changeLookCount;
            break;
          }
          case 'next_look': {
              ++changeLookCount;
            break;
          }
          case 'go_to': {
              ++goToCount;
            break;
          }
          case 'move_by': {
              ++moveCount;
            break;
          }
          case 'move_to': {
              ++moveCount;
            break;
          }
          case 'wait': {
            if (element.parentBlock_ !== null &&(element.parentBlock_.type === 'controls_repeat_ext' || element.parentBlock_.type === 'move_to' || element.parentBlock_.type === 'move_by')) {
              ++extraCount;
            }
            break;
          }
          default: ;
        }
      });

    
    if (e.type === 'create' && (e.blockId === 'go_to')) {
      initialblockArray = e.ids;
      tempBlock.forEach(element => {
        if (element.type === 'number') {
          numberArray.push(element.id);
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

    if (e.type === 'delete' && initialblockArray.indexOf(e.blockId) !== -1 && numberArray.indexOf(e.blockId) === -1) {
      initialLoadFlag = true;
      cb('No need to delete the code. Add the required blocks to make all the three pets sleep.');
    }

    if(e.type === 'change' && (e.name === 'sprite' || e.name === 'direction') && initialblockArray.indexOf(e.blockId) !== -1) {
      initialLoadFlag = true;
      cb('Don’t make any changes to the selected character. To pat the pet the hand should be above the pet and should move up and down to make the pet sleep.');
    }
  }
}

