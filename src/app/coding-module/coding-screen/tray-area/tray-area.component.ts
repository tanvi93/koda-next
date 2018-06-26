import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-tray-area',
  templateUrl: './tray-area.component.html',
  styleUrls: ['./tray-area.component.scss']
})
export class TrayAreaComponent implements OnInit {

  @Input() characters;
  @Output() showCharactersOnStage = new EventEmitter()

  private successModalAppeartime;
  private currentItem: number;
  private currentItem2: number;
  private thumSrc: string[][];
  private iconImages;
  private characterName: string[];
  private addIconClicked: boolean[];
  private initialPosition: any;
  private finalPosition: any;
  private thumbHighlight: any;
  private characterVisibility: boolean[];
  private addCharacterIcon: boolean;
  private addLookIcon: boolean;
  private characterTitle: string[];

  constructor() {
    this.successModalAppeartime = 500;
    this.addCharacterIcon = false;
    this.addLookIcon = false;
    this.addIconClicked = [false, false, false];
  }

  ngOnInit() {
    this.characterTitle = ['Backgrounds', 'Characters', 'Buttons'];
    this.initialPosition = { x: null, y: null };
    this.finalPosition = { x: null, y: null };
    this.characterVisibility = [];
    this.characterName = [];
    this.thumSrc = [[], [], []];
    this.iconImages = ['./assets/icons/algorithm_open.svg', './assets/icons/preview_open.svg', './assets/icons/hint_open.svg', './assets/icons/checklist_open.svg'];
  }

  //This will open/close Tray Attribute
  openMenu = (ev, currentImg, trayImage, i) => {
    this.addIconClicked[i] = false;
    let initialCoordFlag = false;
    let finalCoordFlag = false;
    
    currentImg.forEach((element, index) => {
      if (ev.target.id === element.name) {
        this.currentItem = index;
        if (element.initialOffset !== undefined) {
          this.initialPosition.x = element.initialOffset.x;
          this.initialPosition.y = element.initialOffset.y;
          initialCoordFlag = true;
        }
        if (element.currentOffset !== undefined) {
          this.finalPosition.x = element.currentOffset.x;
          this.finalPosition.y = element.currentOffset.y;
          finalCoordFlag = true;
        }
        this.thumSrc[i] = element.looks;
        this.characterName[i] = element.name;
        this.characterVisibility[i] = element.initialVisibility;
      }
    });
    this.currentItem2 = 0;
    currentImg.addClass = true;
  }

  openMenuIcon = (ev, currentImg, trayImage, i) => {
    this.addIconClicked[i] = true;
    currentImg.forEach((element, index) => {
      if (ev.target.id === element.name) {
        this.thumSrc[i] = element.looks;
        this.characterName[i] = element.name;
        this.currentItem = index;
      }
    });
    currentImg.addClass = true;
  }

  closeMenu = (ev, currentImg, i) => {
    currentImg.forEach(element => {
      // to reset the look in character tray icon
      setTimeout(() => {
        element.currentLookIdx = element.initialLookIdx;
      }, 100);
    });
    currentImg.addClass = false;
  }

  // try's Active border
  isActive = (ev, index, currentImg, parentTrayNum) => {
    this.addIconClicked[parentTrayNum] = false;
    this.currentItem = index;
    this.currentItem2 = 0;
  }
  // try's thumb Active border
  thumbActive = (ev, index, i) => {
    this.currentItem2 = index;
  }

  // item got clicked 
  lookImageClicked = (ev, currentImg, trayImage, index, i) => {
    trayImage[i].forEach(element => {
      if (element.name === this.characterName[i]) {
        element.currentLookIdx = index;
      }
    });
  }

  // character icon clicked
  characIcon = (ev, currentImg, trayImage, index, i) => {
    this.characterName[i] =  currentImg[index].name;
    this.thumSrc[i] = currentImg[index].looks;
    this.characterVisibility[i] = currentImg[index].initialVisibility;
    if (currentImg[index].initialOffset !== undefined) {
      this.initialPosition.x = currentImg[index].initialOffset.x;
      this.initialPosition.y = currentImg[index].initialOffset.y;
      this.finalPosition.x = currentImg[index].currentOffset.x;
      this.finalPosition.y = currentImg[index].currentOffset.y;
    }
  }

  showToggle(i) {
    console.log(i);
    this.characterVisibility[i] = !this.characterVisibility[i];
    let json: any = {
      visibility: this.characterVisibility[i]
    }
    if (i === 1) {
      json.spriteIndex = this.currentItem;
    }
    if (i === 2) {
      json.buttonIndex = this.currentItem;
    }
    this.showCharactersOnStage.emit(json);
  }
}

