import { Injectable, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from './../map';
import { ApiService } from './api.service';

@Injectable()
export class UtilitiesService {
  private pointsEarned: any;
  private currentPageDetails: any;

  private scorerer;

  constructor(private router: Router, private api: ApiService) {
    let min = 25;
    this.pointsEarned = {
      min,
      game_quiz: min * 2,
      game_coding: min * 4,
      activity: min * 2,
      activity_coding: min * 3,
      challenge: 3 * min,
      challenge_coding: min * 4
    };
    this.currentPageDetails = null;
  }

  getCurrentPageDetails = (currentPath) => {
    let path: string = null;
    let page: any = null;
    let isCode: Boolean = false;
    let pageType: string;
    this.currentPageDetails = null;
    for (let i = 0; i < map.length; i++) {
      for (let j = 0; j < map[i].modules.length; j++) {
        for (let k = 0; k < map[i].modules[j].resources.length; k++) {
          // console.log(currentPath,' === ',map[i].modules[j].resources[k].path);
          if (currentPath === map[i].modules[j].resources[k].path) {
            // console.log('------------------------------------------');
            this.currentPageDetails = map[i].modules[j].resources[k];
            this.currentPageDetails.currentLevel = i;
            this.currentPageDetails.currentModule = j;
            this.currentPageDetails.currentResource = k;
            pageType = map[i].modules[j].resources[k].type;
            if (pageType === 'badge') {
              let obj = map[i].modules[j].resources[k];
              if (obj.nextPage) {
                this.currentPageDetails.nextPath = obj.nextPage;
                this.currentPageDetails.atLevel = i + 1;
                this.currentPageDetails.atModule = 0;
                this.currentPageDetails.atResource = 0;
                return;
              }
            }
            if (k === map[i].modules[j].resources.length - 1) {
              if (j === map[i].modules.length - 1) {
                if (i < map.length - 1) {
                  page = map[i + 1].modules[0].resources[0];
                  this.currentPageDetails.nextPath = page.path;
                  this.currentPageDetails.atLevel = i + 1;
                  this.currentPageDetails.atModule = 0;
                  this.currentPageDetails.atResource = 0;
                  return;
                }
              }
              page = map[i].modules[j + 1].resources[0];
              this.currentPageDetails.nextPath = page.path;
              this.currentPageDetails.atLevel = i;
              this.currentPageDetails.atModule = j + 1;
              this.currentPageDetails.atResource = 0;
              return;
            }
            page = map[i].modules[j].resources[k + 1] ? map[i].modules[j].resources[k + 1] : null;
            if (page) {
              this.currentPageDetails.nextPath = page.path;
              this.currentPageDetails.atLevel = i;
              this.currentPageDetails.atModule = j;
              this.currentPageDetails.atResource = k + 1;
            } else {
              this.currentPageDetails.path = null;
            }
            return;
          }
        }
      }
    }
  }

  nextPage = (currentPath, badgeData = null) => {
    let path: string = null;
    let page: any = null;
    let isCode: Boolean = false;
    let pageType: string;
    if (!this.currentPageDetails) {
      this.getCurrentPageDetails(currentPath);
    }
    const { currentLevel, currentModule, currentResource, atLevel, atModule, atResource } = this.currentPageDetails;
    this.updateProgress(atLevel, atModule, atResource, this.currentPageDetails.type, badgeData);
    map[currentLevel].modules[currentModule].resources[currentResource].status = 'done';
    this.router.navigate([`/${this.currentPageDetails.nextPath}`]);
    this.currentPageDetails = null;
  }

  updateProgress = (atLevel, atModule, atResource, pageType, badgeData) => {
    let userProgressBody: any = {
      pointsEarned: 0
    }
    let gameProgressBody: any = {
      pointsEarned: 0
    }
    let localUserData = JSON.parse(localStorage.getItem('userProgress'));
    let localGameData = JSON.parse(localStorage.getItem('gameProgress'));
    userProgressBody = localUserData ? localUserData : userProgressBody;
    gameProgressBody = localGameData ? localGameData : gameProgressBody;
    if (!this.currentPageDetails.status || !this.checkThePageVisited(this.currentPageDetails)) {
      userProgressBody.pointsEarned += this.pointsEarned[pageType] ? this.pointsEarned[pageType] : 0;
      gameProgressBody.pointsEarned += this.pointsEarned[pageType] ? this.pointsEarned[pageType] : 0;
      gameProgressBody.atLevel = atLevel;
      gameProgressBody.atModule = atModule;
      gameProgressBody.atResource = atResource;
    
      if (pageType === 'coding') {
        gameProgressBody.lastCodingPageXml = localStorage.getItem('lastCodeXml');
      }
      if (pageType === 'badge') {
        userProgressBody.badgesEarned += 1;
        userProgressBody.modulesCompleted += 1;
        userProgressBody.titleEarned = badgeData.badge;
        userProgressBody.activitiesCompleted += badgeData.type === 'activity' ? badgeData.no_of_activities : 0;
        userProgressBody.challengesCompleted += badgeData.type === 'challenge' ? 1 : 0;
        gameProgressBody.badgesEarned += 1;
        gameProgressBody.modulesCompleted += 1;
        gameProgressBody.activitiesCompleted += badgeData.type === 'activity' ? badgeData.no_of_activities : 0;
        gameProgressBody.challengesCompleted += badgeData.type === 'challenge' ? 1 : 0;
      }
      localStorage.setItem('userProgress', JSON.stringify(userProgressBody));
      localStorage.setItem('gameProgress', JSON.stringify(gameProgressBody));
    }
    // this.api.postUserProgress(userProgressBody);
    // this.api.postGameProgress(gameProgressBody);
  }

  updateLooks = obj => {
    let gameProgressBody = {
      preferenceMap: {}
    }
    let localGameData = JSON.parse(localStorage.getItem('gameProgress'));
    gameProgressBody = localGameData ? localGameData : gameProgressBody;
    gameProgressBody.preferenceMap = {
      monkey: obj.monkeyIndex,
      fruit: obj.fruitIndex,
      cap: obj.capIndex,
      background: obj.background
    }
    // this.api.postGameProgress(gameProgressBody);
    localStorage.setItem('gameProgress', JSON.stringify(gameProgressBody));
  }

  updatePositions = obj => {
    let gameProgressBody = {
      preferenceMap: {}
    }
    let localGameData = JSON.parse(localStorage.getItem('gameProgress'));
    gameProgressBody = localGameData ? localGameData : gameProgressBody;
    gameProgressBody.preferenceMap = {
      ...gameProgressBody.preferenceMap,
      monkeyOffsetX: obj.monkeyOffset.x,
      monkeyOffsetY: obj.monkeyOffset.y,
      fruitOffsetX: obj.fruitOffset.x,
      fruitOffsetY: obj.fruitOffset.y,
      capOffsetX: obj.capOffset.x,
      capOffsetY: obj.capOffset.y,
    }
    // this.api.postGameProgress(gameProgressBody);
    localStorage.setItem('gameProgress', JSON.stringify(gameProgressBody));
  }

  updateAvatar = (obj) => {
    let userProgressBody: any = JSON.parse(localStorage.getItem('userProgress'));
    userProgressBody = userProgressBody ? { ...userProgressBody, ...obj } : obj;
    localStorage.setItem('userProgress', JSON.stringify(userProgressBody));
  }

  deductPointsForHint = () => {
    if (this.currentPageDetails.status === 'done' || this.checkThePageVisited(this.currentPageDetails)) return;
    let localUserData = JSON.parse(localStorage.getItem('userProgress'));
    let localGameData = JSON.parse(localStorage.getItem('gameProgress'));
    let userProgressBody = localUserData ? localUserData : {};
    let gameProgressBody = localGameData ? localGameData : {};
    userProgressBody.pointsEarned -= this.pointsEarned.min;
    gameProgressBody.pointsEarned -= this.pointsEarned.min;
    localStorage.setItem('userProgress', JSON.stringify(userProgressBody));
    localStorage.setItem('gameProgress', JSON.stringify(gameProgressBody));
    if (this.scorerer) {
      this.scorerer();
    }
  }

  getPointsForPage = (currentPath) => {
    this.getCurrentPageDetails(currentPath);
    if (this.currentPageDetails.status === 'done' || this.checkThePageVisited(this.currentPageDetails)) return;
    return this.pointsEarned[this.currentPageDetails.type];
  }

  scoreChangeCallback(callback) {
    this.scorerer = callback
  }

  checkThePageVisited(currentPageDetails) {
    let localGameData = JSON.parse(localStorage.getItem('gameProgress'));
    const { atLevel, atModule, atResource } = localGameData;
    const { currentLevel, currentModule, currentResource } = currentPageDetails;
    if (currentLevel < atLevel) return true;
    if (currentLevel === atLevel && currentModule < atModule) return true;
    if (currentLevel === atLevel && currentModule === atModule && currentResource < atResource) return true;
    return false;
  }

}
