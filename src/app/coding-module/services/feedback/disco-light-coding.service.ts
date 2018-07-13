import { Injectable } from '@angular/core';
import { assetsLink } from './../../../shared-services/config';
import { ActivityTrackerService } from './../../../shared-services/activity-tracker.service';
let initialLoadFlag = true;
let initialblockArray: string[] = [];
let waitCount = 0;
let repeatForeverCount = 0;
let repeatNTimesCount = 0;
let changeLookCount = 0;
let extraBlockCount = 0;

@Injectable()
export class DiscoLightCodingService {
  private tracker: ActivityTrackerService;
  private blockList: any;
  private codes: Array<any>;
  private success: Boolean;
  private successObj: any;

  constructor() {
    this.success = false;
    this.successObj = {};
    this.tracker = new ActivityTrackerService();
  }

  validateCode(blockList, codes, sprites, spriteStatus, callback) {

    setTimeout(() => {
      this.blockList = blockList;
      const look1 = assetsLink + 'activities/disco_lights/disco_light_pink.png';
      const look2 = assetsLink + 'activities/disco_lights/disco_light_blue.png';
      const look3 = assetsLink + 'activities/disco_lights/disco_light_yellow.png';
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
      
      let x = atob(JSON.parse(codes).params.linesOfCode);
      let y = x.split(';');
      
      if ( changeLookCount === 4 && repeatForeverCount === 1
        && repeatNTimesCount === 2 && repeatPatternCount === 10 && extraBlockCount === 0 ) {
        if (waitCount === 4 || (waitCount === 5 && y[1].indexOf('wait') !== -1) ) {
          
          this.success = true;
          this.successObj['success'] = this.success;
          this.successObj['title'] = 'Awesome!';
          this.successObj['msg'] = 'My son is going to love it!';
          this.successObj['mascotImage'] = assetsLink + 'activities/disco_lights/mascot_head.png';
          this.successObj['backgroundColor'] = 'rgb(255, 230, 85)';
          this.tracker.setContent('loops', 1);
          return callback(this.successObj);
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
    extraBlockCount = 0;
    
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
        default: {
            if (element.type !== 'random_number' && element.type !== 'arithmetic_operators' && element.type !== 'show_coords' && element.type !== 'number') {
              console.log(element.type, extraBlockCount);
              ++extraBlockCount;
            }
          }
        };
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

