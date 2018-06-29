import { Component, Input, OnInit, EventEmitter, Output, OnChanges } from '@angular/core';


@Component({
  selector: 'app-character-selection-section',
  templateUrl: './character-selection-section.component.html',
  styleUrls: ['./character-selection-section.component.scss']
})
export class CharacterSelectionSectionComponent implements OnInit, OnChanges {
  private imageObj = {
    capImage: {
      id: null,
      path: ''
    },
    monkeyImage: {
      id: null,
      path: ''
    },
    fruitImage: {
      id: null,
      path: ''
    },
    backgroundPath: {
      id: null,
      path: ''
    }
  };
  private characterBorder: boolean[][];
  private idString: string[][];
  private applyBorder: string;
  private loading: boolean;
  private currentItem: string;
  private errorFlagInputStatus: boolean;
  @Input() contentData;
  @Input() errorFlag;
  @Output() imageData = new EventEmitter<object>();
  @Output() errorFlagStatus = new EventEmitter<boolean>();
  constructor() {
    this.loading = true;
    this.characterBorder = [];
    this.idString = [];
  }

  ngOnInit() {
    let monkeyimageCount = 0;
    const onImageLoad = () => {
      ++monkeyimageCount;
      if (monkeyimageCount === 16) {
        this.loading = false;
      }
    }

    let monkeyimageLoad = Object.keys(this.contentData.characterList).map(key => {
      this.characterBorder[key] = [];
      this.idString[key] = [];
      this.contentData.characterList[key].list.forEach((element, index) => {
        this.characterBorder[key][index] = false;
        this.idString[key][index] = this.contentData.characterList[key].name + '-' + index;
        let image = new Image();
        image.onload = onImageLoad;
        image.src = element;
        return image;
      });
    });
    this.errorFlagInputStatus = this.errorFlag;
    this.applyBorder = 'transparent';
  }

  ngOnChanges() {
    this.errorFlagInputStatus = this.errorFlag;
  }

  updateEmitter() {
    this.imageData.emit(this.imageObj);
  }

  functionCalled(ev) {
    
    this.errorFlagInputStatus = false;
    this.errorFlagStatus.emit(this.errorFlagInputStatus);
    let x = 0;
    for (let i = 0; i < this.idString.length; i++) {
      for (let j = 0; j < this.idString.length; j++) {
        x = j;
        if (ev.target.attributes.id.nodeValue === this.idString[i][j]) {
          for (let k = 0; k < this.idString.length; k++) {
            if (x === k) {
              this.characterBorder[i][k] = true;
              switch (i) {
                case 0: {
                  this.imageObj.backgroundPath.path = ev.target.attributes.src.nodeValue;
                  this.imageObj.backgroundPath.id = ev.target.alt;
                  this.updateEmitter();
                }
                  break;
                case 1: {
                  this.imageObj.monkeyImage.path = ev.target.attributes.src.nodeValue;
                  this.imageObj.monkeyImage.id = ev.target.alt;
                  this.updateEmitter();
                }
                  break;
                case 2: {
                  this.imageObj.fruitImage.path = ev.target.attributes.src.nodeValue;
                  this.imageObj.fruitImage.id = ev.target.alt;
                  this.updateEmitter();
                }
                  break;
                case 3: {
                  this.imageObj.capImage.path = ev.target.attributes.src.nodeValue;
                  this.imageObj.capImage.id = ev.target.alt;
                  this.updateEmitter();
                }
                  break;
                default:
              }
            } else {
              this.characterBorder[i][k] = false;
            }
          }
        }
      }
    }
  }
}

