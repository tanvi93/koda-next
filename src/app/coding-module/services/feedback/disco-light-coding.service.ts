import { Injectable } from '@angular/core';

let initialLoadFlag = true;
let initialblockArray: string[] = [];
let waitCount = 0;
let repeatForeverCount = 0;
let repeatNTimesCount = 0;
let changeLookCount = 0;

@Injectable()
export class DiscoLightCodingService {

  private blockList: any;
  private codes: Array<any>;
  private success: Boolean;
  private successObj: any;
  private localData: any;

  constructor() {
    this.success = false;
    this.successObj = {};
    this.localData = JSON.parse(localStorage.getItem('loops'));
  }

  validateCode(blockList, codes, sprites, spriteStatus, callback) {

    setTimeout(() => {
      this.blockList = blockList;
      const look1 = './assets/images/activities/disco_lights/disco_light_pink.png';
      const look2 = './assets/images/activities/disco_lights/disco_light_blue.png';
      const look3 = './assets/images/activities/disco_lights/disco_light_yellow.png';
      const patternArray = [];
      const correctPattern = [look1, look2, look1, look2, look1, look2, look1, look3, look1, look3];
      let repeatPatternCount = 0;
      
      
      spriteStatus.forEach(element => {
        patternArray.push(element.previousLook);
      });
     
      correctPattern.forEach((element, index) => {
        if (element === patternArray[index]) {
          ++repeatPatternCount;
        }
      });
       

      if ( changeLookCount === 4 && repeatForeverCount === 1
        && repeatNTimesCount === 2) {
        if (blockList.length === 12 && waitCount === 5 && blockList[4].indexOf('changeAvatar') !== -1 && blockList[5].indexOf('wait') !== -1 && blockList[8].indexOf('wait') !== -1) {
          if (repeatPatternCount === 10) {
            this.success = true;
            this.successObj['success'] = this.success;
            this.successObj['title'] = 'Awesome!';
            this.successObj['msg'] = 'My son is going to love it!';
            return callback(this.successObj);
          }
        } else if (blockList.length === 11 && waitCount === 4) {
          if (repeatPatternCount === 10) {
            this.success = true;
            this.successObj['success'] = this.success;
            this.successObj['title'] = 'Awesome!';
            this.successObj['msg'] = 'My son is going to love it!';
            this.successObj['mascotImage'] = 'assets/images/activities/disco_lights/mascot_head.png';
            this.successObj['backgroundColor'] = 'rgb(255, 230, 85)';
            this.localData[1].status.complete.imageStatus = true;
            this.localData[1].status.unlock.imageStatus = !this.localData[1].status.complete.imageStatus;
            this.localData[2].status.lock.imageStatus = !this.localData[1].status.complete.imageStatus;
            this.localData[2].status.unlock.imageStatus = this.localData[1].status.complete.imageStatus;
            localStorage.setItem('loops', JSON.stringify(this.localData));
            return callback(this.successObj);
          }
        }
      }
    }, 500);
  }

  workSpaceOnChange(e, cb, wsp) {
    const tempBlock = wsp.getAllBlocks();
    waitCount = 0;
    repeatForeverCount = 0;
    repeatNTimesCount = 0;
    changeLookCount = 0;
    
    tempBlock.forEach((element, index) => {
      switch (element.type) {
        case 'wait': {
          if (element.parentBlock_ !== null && Number(element.getFieldValue('wait_time')) > 0 && Number(element.getFieldValue('wait_time')) <= 2  && element.parentBlock_.type !== 'wait') {
            ++waitCount;
          }
          break;
        }
        case 'controls_repeat_forever': {
          ++repeatForeverCount;
          break;
        }
        case 'controls_repeat_ext': {
          ++repeatNTimesCount;
          break;
        }
        case 'change_look': {
          if (element.parentBlock_ !== null && element.parentBlock_.type !== 'change_look') {
            ++changeLookCount;  
          }
          break;
        } 
        default: ;
      }
    });
    
    if (e.type === 'create' && (e.blockId === 'repeat_n_times')) {
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

    if (e.type === 'delete' && initialblockArray.indexOf(e.blockId) !== -1) {
      initialLoadFlag = true;
      cb('Don’t delete the given code. Update it and add blocks that make the same disco lights as the electrician saw in the party. Note the disco lights switches between blue and pink thrice, yellow and pink twice and this sequence repeats forever.');
    }
    
  }
}

