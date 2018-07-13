import { Injectable, OnInit } from '@angular/core';
import { selectActivityContent } from './../data/selectActivities'
@Injectable()
export class ActivityTrackerService implements OnInit{
  private localData;
  constructor() { }

  ngOnInit() {
      
  }
  
  setContent(activityType: string, index: number) {
    this.checkStorage(activityType);
    this.localData[index].status.complete.imageStatus = true;
    this.localData[index].status.unlock.imageStatus = !this.localData[index].status.complete.imageStatus;
    this.localData[index].status.lock.imageStatus = false;
    if (index < this.localData.length && !this.localData[index + 1].status.complete.imageStatus) {
      this.localData[index + 1].status.unlock.imageStatus = this.localData[index].status.complete.imageStatus;
      this.localData[index + 1].status.lock.imageStatus = !this.localData[index].status.complete.imageStatus;
    }
    localStorage.setItem(activityType, JSON.stringify(this.localData));
  }

  checkStorage(activityType) {
    if ((localStorage.getItem(activityType)) !== null) {
      this.localData = JSON.parse(localStorage.getItem(activityType));
    } else {
      localStorage.setItem(activityType, JSON.stringify(selectActivityContent[`${activityType}`].activities));
      this.localData = JSON.parse(localStorage.getItem(activityType));
    }
  }

}
