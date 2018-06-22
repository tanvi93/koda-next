import { Injectable } from '@angular/core';

@Injectable()
export class VenusFlytrapService {
  private blockList: any;
  private codes: Array<any>;
  private blockObj: any;
  private success: Boolean;
  private successObj: any;
  private localData: any;
  constructor() {
    this.success = false;
    this.successObj = {};
    this.blockObj = {};
    this.localData = JSON.parse(localStorage.getItem('sequencing'));
  }

  validateCode(blockList, codes, sprites, spriteStatus, callback) {
    setTimeout(() => {
     
      this.blockList = blockList;
      this.codes = codes;
      let motionBlock = 0;
      let nonMotionPresent = false;
    
      for (let i = 0; i < this.codes.length; i++) {
        this.blockObj[i] = JSON.parse(this.codes[i].match(/'(.*?)'/)[1]);
      }
       loop1 : for (let i = 0; i < this.blockList.length; i++) {

        if ((this.blockList[i] === 'goTo' || this.blockList[i] === 'moveTo' || this.blockList[i] === 'moveBy') && nonMotionPresent === false) {
          if (Number(this.blockObj[i].spriteIndex) !== 1) {
            break;
          }
          motionBlock++;
        }

        if (this.blockList[i] !== 'goTo' && this.blockList[i] !== 'moveTo' && this.blockList[i] !== 'moveBy' && this.blockList[i] !== 'wait') {
          nonMotionPresent = true;

          if (this.blockList[i] === 'changeAvatar' || this.blockList[i] === 'visiblityToggle') {

             for (let j = i - 1; j >= 0; j--) {
              if ((this.blockList[j] === 'goTo' || this.blockList[j] === 'moveTo' || this.blockList[j] === 'moveBy')) {
                if ((spriteStatus[motionBlock - 1].currentPosition.x >= -10 && spriteStatus[motionBlock - 1].currentPosition.x <= -5) && (spriteStatus[motionBlock - 1].currentPosition.y >= -6 && spriteStatus[motionBlock - 1].currentPosition.y <= -4)) {
                  if (this.blockList[i] === 'changeAvatar' && this.blockList[i + 1] === 'visiblityToggle') {
                    if ((Number(this.blockObj[i].spriteIndex) === 0) && (this.blockObj[i].avatarIndex === '1') && (Number(this.blockObj[i + 1].spriteIndex) === 1) && (Number(this.blockObj[i + 1].visibility) === 0)) {
                      this.finalCheck(i, blockList, callback);
                    }
                  } else if (this.blockList[i] === 'visiblityToggle' && this.blockList[i + 1] === 'changeAvatar') {
                    if ((Number(this.blockObj[i + 1].spriteIndex) === 0) && (this.blockObj[i + 1].avatarIndex === '1') && (Number(this.blockObj[i].spriteIndex) === 1) && (this.blockObj[i].visibility === 0)) {
                      this.finalCheck(i, blockList, callback);
                    } 
                  } else {
                    break loop1;
                  }
                }
                break;
              }
            }
          } else {
            break;
          }
        }
      }
    }, 100);
  }

  finalCheck(i, blockList, callback) {
    for (let k = i + 2; k < blockList.length; ) {
       if (this.blockList[k] === 'say' && Number(this.blockObj[k].spriteIndex) === 0 && this.blockObj[k].textName.toLowerCase().indexOf('burp') >= 0) {
          if (k === blockList.length - 1) {
            this.success = true;
            this.successObj['success'] = this.success;
            this.successObj['title'] = 'Thank you!';
            this.successObj['msg'] = 'That animation looks great.';
            this.successObj['mascotImage'] = 'assets/images/activities/venus_flytrap/mascot_head.png';
            this.successObj['backgroundColor'] = 'rgb(255, 230, 85)';
            this.localData[1].status.complete.imageStatus = true;
            this.localData[1].status.unlock.imageStatus = !this.localData[1].status.complete.imageStatus;
            this.localData[2].status.lock.imageStatus = !this.localData[1].status.complete.imageStatus;
            this.localData[2].status.unlock.imageStatus = this.localData[1].status.complete.imageStatus;
            localStorage.setItem('sequencing', JSON.stringify(this.localData));
            return callback(this.successObj);
          } else {
            return;
          } 
       } else if (this.blockList[k] === 'wait') {
         k++;
       } else {
         return; 
      }
    }
  }
}
