import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { SuccessModalComponent } from './../../../shared-module/success-modal/success-modal.component';
import { selectCharacterContent } from './../../../data/selectCharacterContent';
import { UtilitiesService } from './../../../shared-services/utilities.service';


@Component({
  selector: 'app-character-positioning',
  templateUrl: './character-positioning.component.html',
  styleUrls: ['./character-positioning.component.scss']
})
  
export class CharacterPositioningComponent implements OnInit {
  dialogRef: MatDialogRef<SuccessModalComponent>;
  @Input() contentData;
  @Input() checkListStatus;
  @Input() flagData;
  @Output() positionDetail = new EventEmitter<object>();
  @Output() taskFlag = new EventEmitter<boolean>();
  @Output() hideErrorMsg = new EventEmitter<boolean>();
  private backgroundImage: string;
  private backgroundHeight: number;
  private backgroundWidth: number;
  private incompleteTaskFlag: boolean;
  private positionCheck: object;
  private inputText = ['( 2, 0)', '( -6, 1)', '( 0, -17)'];
  private coord: boolean;
  private topShift: Array<String>;
  private leftShift: Array<String>;
  private inBounds = true;
  private position = [{ x: null, y: null }, { x: null, y: null }, { x: null, y: null }];
  private currentTopPos: number;
  private currentLeftPos: number;
  private totalXValue: number;
  private totalYValue: number;
  private offsetValue: any;

  constructor(public dialog: MatDialog, private utility: UtilitiesService) { 
    this.positionCheck = [
      {
        id: '1',
        name: 'monkey',
        top: 2,
        left: 0,
        handTop: {
          min: null,
          max: null
        },
        handLeft: {
          min: null,
          max: null
        }
      }, {
        id: '2',
        name: 'fruit',
        top: 1,
        left: -6
      }, {
        id: '3',
        name: 'cap',
        top: -17,
        left: 0
      }
    ];
    this.leftShift = ['0', '0', '0'];
    this.topShift = ['0', '0', '0'];
  }

  ngOnInit() {
    this.offsetValue = {
      monkeyOffset: {
        x: 2,
        y: 0
      },
      fruitOffset: {
        x: -6,
        y: 1
      },
      capOffset: {
        x: 0,
        y: -17
      }
    }
    this.totalXValue = 70;
    this.totalYValue = 42;
    const x: any = document.getElementsByClassName('background-position');
    setTimeout(() => {
      this.position[0].x = 0.45 * x[0].clientWidth;
      this.position[0].y = 0.35 * x[0].clientHeight
      this.position[1].x = 0.40 * x[0].clientWidth;
      this.position[1].y = 0.45 * x[0].clientHeight
      this.position[2].x = 0.45 * x[0].clientWidth;
      this.position[2].y = x[0].clientHeight - 0.15 * x[0].clientHeight;
      this.backgroundHeight = x[0].clientHeight;
      this.backgroundWidth = x[0].clientWidth;
    }, 0);
    const selectedIndexs = JSON.parse(localStorage.getItem('gameProgress')).preferenceMap;
    this.backgroundImage = selectCharacterContent.characterList[0].list[selectedIndexs.background];
    this.contentData.dragImageContent[0].imagePath = selectCharacterContent.characterList[1].list[selectedIndexs.monkey];
    this.contentData.dragImageContent[1].imagePath = selectCharacterContent.characterList[2].list[selectedIndexs.fruit];
    this.contentData.dragImageContent[2].imagePath = selectCharacterContent.characterList[3].list[selectedIndexs.cap];
    this.coord = true;
    this.contentData.dragImageContent[0].imageList.forEach(element => {
      if (element.path === selectCharacterContent.characterList[1].list[selectedIndexs.monkey]) {
        this.positionCheck[0].handLeft.min = element.hand.left.min;
        this.positionCheck[0].handLeft.max = element.hand.left.max;
        this.positionCheck[0].handTop.min = element.hand.top.min;
        this.positionCheck[0].handTop.max = element.hand.top.max;
      }

    });
    this.incompleteTaskFlag = true;
    this.positionDetail.emit(this.positionCheck);
  }


  onDragBegin(ev) {
    this.hideErrorMsg.emit(true);
  }

  
  onMoveEnd(ev) {
    this.currentLeftPos = Math.round(ev.x);
    this.currentTopPos = Math.round(ev.y);
  }

  onDragEnd(ev, index) {
    const currentData: any = document.getElementsByClassName(ev.id);
    let left: any = null;
    let top: any = null;
        setTimeout(() => {
          left = this.unitConversion(this.backgroundWidth, this.currentLeftPos, this.totalXValue, this.totalXValue/2, currentData[0].width / 2);
          top = this.unitConversion(this.backgroundHeight, this.currentTopPos, this.totalYValue, this.totalYValue/2, currentData[0].height / 2);
          
          this.positionCheck[index].left = left;
          this.positionCheck[index].top = top;
          this.topShift[index] = '0';
          this.leftShift[index] = '0';
          this.positionMarker(index,currentData[0],left, top);
          this.inputText[index] = '( ' + left + ', ' + top + ')';
        }, 10)
    setTimeout(() => {
      this.positionDetail.emit(this.positionCheck);
    }, 100)
  }

  unitConversion = (backgroundValue, currentValue, totalValue, normalizeValue, data) => {
    let x;
    if (totalValue === 70) {
      x = ((currentValue / backgroundValue) * totalValue) - normalizeValue + ((data * totalValue) / backgroundValue);
    } else if (totalValue === 42) {
      x = normalizeValue - ((currentValue / backgroundValue) * totalValue) - ((data * totalValue) / backgroundValue);
    }
    return Math.round(x);
  }

  positionMarker = (index, currentCharacter, left, top) => {
    switch (index) {
      case 0: {
        document.getElementById('input0').style.transform = 'translate('
          + this.currentLeftPos + 'px,' + (this.currentTopPos - (currentCharacter.height * 0.02)) + 'px)';
        this.offsetValue.monkeyOffset.x = left;
        this.offsetValue.monkeyOffset.y = top;
        break;
      }
      case 1: {
        document.getElementById('input1').style.transform = 'translate('
          + (this.currentLeftPos - (currentCharacter.width * 1.1)) + 'px,' + (this.currentTopPos + (currentCharacter.height)) + 'px)';
        this.offsetValue.fruitOffset.x = left;
        this.offsetValue.fruitOffset.y = top;
        break;
      } 
      case 2: {
        document.getElementById('input2').style.transform = 'translate('
          + (this.currentLeftPos - (currentCharacter.width * 0.2)) + 'px,' + (this.currentTopPos - currentCharacter.height) + 'px)';
        this.offsetValue.capOffset.x = left;
        this.offsetValue.capOffset.y = top;
        break;
      } 
      default: ;  
    }
  }

  checkList() {
    if (this.flagData.indexOf(false) === -1) {
      //store character offsets into backend
      const offsets = this.offsetValue;

      this.utility.updatePositions(offsets);

      this.coord = false;
      setTimeout(() => {
        this.showModalOnSuccess();
      }, 1000)
    } else {
      this.taskFlag.emit(this.incompleteTaskFlag);
    }
  }

  private showModalOnSuccess() {
    this.dialogRef = this.dialog.open(SuccessModalComponent, {
      hasBackdrop: true,
      disableClose: true,
      panelClass: 'app-full-bleed-dialog'
    });
    this.dialogRef.componentInstance.modalData = this.contentData;
  }
}
