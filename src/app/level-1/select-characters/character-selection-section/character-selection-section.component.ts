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
  private idString: Array<object>;
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
      this.contentData.characterList[key].list.forEach((element, index) => {
        let image = new Image();
        image.onload = onImageLoad;
        image.src = element;
        return image;
      });
    });
    this.errorFlagInputStatus = this.errorFlag;
    this.applyBorder = 'transparent';
    this.idString = [
      ['Background-0', 'Background-1', 'Background-2', 'Background-3'],
      ['Monkey-0', 'Monkey-1', 'Monkey-2', 'Monkey-3'],
      ['Fruit-0', 'Fruit-1', 'Fruit-2', 'Fruit-3'],
      ['Cap-0', 'Cap-1', 'Cap-2', 'Cap-3']
    ];
    
    // this.characterBorder = [
    //   [false, false, false, false],
    //   [false, false, false, false],
    //   [false, false, false, false],
    //   [false, false, false, false]
    // ];
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
              // this.characterBorder[i][k] = true;
              switch (i) {
                case 0: {
                  this.imageObj.backgroundPath.path = ev.target.attributes.src.nodeValue;
                  this.imageObj.backgroundPath.id = ev.target.alt;
                  this.currentItem = '' +i + x;
                  console.log(this.currentItem);
                  
                  this.updateEmitter();
                }
                  break;
                case 1: {
                  this.imageObj.monkeyImage.path = ev.target.attributes.src.nodeValue;
                  this.imageObj.monkeyImage.id = ev.target.alt;
                  this.currentItem = '' + i + x;
                  console.log(this.currentItem);
                  this.updateEmitter();
                }
                  break;
                case 2: {
                  this.imageObj.fruitImage.path = ev.target.attributes.src.nodeValue;
                  this.imageObj.fruitImage.id = ev.target.alt;
                  this.currentItem = '' + i + x;;
                  console.log(this.currentItem);
                  this.updateEmitter();
                }
                  break;
                case 3: {
                  this.imageObj.capImage.path = ev.target.attributes.src.nodeValue;
                  this.imageObj.capImage.id = ev.target.alt;
                  this.currentItem = '' + i + x;
                  console.log(this.currentItem);
                  this.updateEmitter();
                }
                  break;
                default:
              }
            } else {
              // this.characterBorder[i][k] = false;
            }
          }
        }
      }
    }
  }
}

