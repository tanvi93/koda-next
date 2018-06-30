import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-character-selection-section',
  templateUrl: './character-selection-section.component.html',
  styleUrls: ['./character-selection-section.component.scss']
})
  
    /**
   * @name CharacterSelectionSectionComponent<app-select-characters>
   * @description This component will deal selecting character from the list which will be use for future game making.
   * @param imageData its output variable which will hold the data related to what user want to see on the display screen and this all data is provided to parent so that it can share this data to his sibiling .
   * @param contentData its holds entire detail of the page which is accepted from its parent component.
   * @constructor intiate checkData variable
   */

  /**
   * @method functionCalled
   * @memberOf CharacterSelectionSectionComponent
   * @param event This Event object contains data of the character which user want to see in display seciton.
   * @param childIndex this index decide which subchild is selected from the group.
   * @param parentIndex this index decide which child is selected from the group.
   * @description this method get triggered whenever user choose character from the option provided which later emits data so that parent can pass this info to his other child .
   */

export class CharacterSelectionSectionComponent implements OnInit {
 
  @Input() contentData;
  @Output() imageData = new EventEmitter<object>();
 
  private imageObj = {
    backgroundPath: {
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
    capImage: {
      id: null,
      path: ''
    }
  };
  private characterBorder: boolean[][];
  private loading: boolean;

  constructor() {
    this.loading = true;
    this.characterBorder = [];
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
      this.contentData.characterList[key].list.forEach((element, index) => {
        this.characterBorder[key][index] = false;
        let image = new Image();
        image.onload = onImageLoad;
        image.src = element;
        return image;
      });
    });
  }

  functionCalled(ev, childIndex, parentIndex) {
    this.characterBorder.forEach((element, index) => {
      if (childIndex === index) {
        this.characterBorder[parentIndex][index] = true;
        Object.values(this.imageObj)[parentIndex].path = ev.target.attributes.src.nodeValue;
        Object.values(this.imageObj)[parentIndex].id = ev.target.alt;
        this.imageData.emit(this.imageObj);
      } else {
        this.characterBorder[parentIndex][index] = false;
      }
    });
  }
}

