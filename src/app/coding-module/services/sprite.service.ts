import { Injectable } from '@angular/core';
import { blocksData } from './../../data/coding';
import { sprites } from './../../data/sprites';

@Injectable()
export class SpriteService {

  private spriteArr;
  private bgArr;
  private buttonArr;

  constructor() { 
    this.spriteArr = {};
    this.bgArr = {};
    this.buttonArr = {};
  }

  getAllSprites = (activityName = 'monkey_menace') => {
    if (this.spriteArr[activityName]) {
      return this.spriteArr[activityName];
    }
    this.spriteArr[activityName] = [];
    sprites.forEach(v => {
      // let gameData = JSON.parse(localStorage.getItem('gameProgress'));
      // if (gameData.preferenceMap[`${v.name}OffsetX`]) {
      //   v.initialOffset = {
      //     x: parseInt(gameData.preferenceMap[`${v.name}OffsetX`]),
      //     y: parseInt(gameData.preferenceMap[`${v.name}OffsetY`])
      //   };
      // }  
      if (v.activityName === activityName) {
        if (v.types) {
          let index = 1;//gameData.preferenceMap[v.name];
          const type = v.types[index];
          delete v.types;
          Object.keys(type).forEach(key => {
            v[key] = type[key];
          });
          this.spriteArr[activityName].push(v);
        } else {
          this.spriteArr[activityName].push(v);
        }
      }
    });
    return this.spriteArr[activityName];
  }

  getAllBGs = (pageId) => {
    if (!pageId) return [];
    this.bgArr[pageId] = blocksData[pageId].backgrounds;
    return this.bgArr[pageId];
  }

  getAllButtons = (pageId) => {
    if (!pageId) return [];
    this.buttonArr[pageId] = blocksData[pageId].buttons;
    return this.buttonArr[pageId];
  }

  spriteDropdown = (activity) => {
    let arr = this.spriteArr[activity] ? this.spriteArr[activity] : this.getAllSprites(activity);
    let finalArr = arr.map((v, i) => {
      return [v.name, i + ''];
    });
    return [['Choose a character...', '-1'], ...finalArr]; 
  }

  bgDropdown = (pageId) => {
    let arr = this.bgArr[pageId] ? this.bgArr[pageId] : this.getAllBGs(pageId);
    let finalArr = arr.map((v, i) => {
      return [v.name, i + ''];
    });
    return [['Choose', '-1'], ...finalArr]; 
  }

  buttonDropdown = (pageId) => {
    let arr = this.buttonArr[pageId] ? this.buttonArr[pageId] : this.getAllButtons(pageId);
    let finalArr = arr.map((v, i) => {
      return [v.name, i + ''];
    });
    return [['Choose a button...', '-1'], ...finalArr]; 
  }

  setSpriteOffsets = (activityName, data, index) => {
    let arr = this.spriteArr[activityName];
    if (!arr[index].currentOffset) {
      arr[index].currentOffset = { ...arr[index].initialOffset };
    }
    if (data.hasOwnProperty('left')) {
      arr[index].currentOffset.x += parseInt(data.left ? data.left : 0);
      arr[index].currentOffset.y -= parseInt(data.top ? data.top : 0);
    } else {
      arr[index].currentOffset = data;
    }
    return { ...arr[index].currentOffset };
  }

}
