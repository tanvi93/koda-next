import { Injectable } from '@angular/core';
import { blocksData } from './../../../data/coding';

declare var Blockly: any;
let initialLoadFlag = true;
let blockData: any;
let variableName: String;

@Injectable()
export class CreateAndUpdateScoreService {

  private blockList: any;
  private codes: Array<any>;
  private success: Boolean;
  private successObj: any;
  private changeBlockAdded: Boolean;
  private ifBlockAdded: Boolean;
  private touchBlockAdded: Boolean;
  private arrayOfIds: Array<any>;

  constructor() {
    this.changeBlockAdded = false;
    this.ifBlockAdded = false;
    this.touchBlockAdded = false;
    this.success = false;
    this.successObj = {};
    this.arrayOfIds = [];
   }

  validateCode(blockList, codes, sprites, spriteStatus, callback) {
    // this.blockList = blockList;
    // this.codes = codes;

  //   // check 0. More than one block on Code Zone?
  //   if (!(this.blockList.length === 1 || this.blockList[0].replace(/\s/g, '') === ('var' + variableName))) {
  //     return callback('You need only one block to update the ' + variableName + ' variable by 10. Remove the unnecessary blocks from Code Zone and try again.');
  //   }

  //  // check 1. Change variable block added to workspace?
  //   if (this.blockList[1] !== '\n\nchangeVar') {
  //     return callback('You need to add a block to the Code Zone to update the ' + variableName + ' variable by 10.');
  //   }

  //   blockData = this.codes[1].match(/\(([^)]+)\)/)[1];
  //   blockData = blockData.split(',');
  
  //   // check 2. Non-zero Input?
  //   if (Number(blockData[1]) === 0) {
  //     return callback('Hmmm… there seems to be no change in the value of ' + variableName + ' displayed on Stage. Recheck your input to the block.');
  //   }
    
  //   // check 3. Input = 10?
  //   if (Number(blockData[1]) !== 10) {
  //     return callback('Great, the score displayed on Stage changes on running the code but remember, it needs to change by 10 points. Recheck your input to the block.');
  //   } else {
  //     this.successObj['success'] = true;
  //     this.successObj['title'] = 'You’re amazing!';
  //     this.successObj['msg'] = 'You’ve successfully created and updated the ' + variableName + ' variable.';
  //     return callback(this.successObj);
  //   }  
  }
 

  workSpaceOnChange(e, cb, workSpace) {
    
    let char1;
    let char2
    const json = e.toJson();
    console.log(json);
    if (workSpace.variableMap_.variableMap_['']) {
      variableName = workSpace.variableMap_.variableMap_[''][0].name;
    }

    if (initialLoadFlag) {
      switch (e.type) {
        case 'move':
          console.log('move called');
          initialLoadFlag = false;
          // return;
          break;
        case 'delete':
          this.arrayOfIds = [];
          return;
        default:
          return;
      }
    }
    
    if (this.changeBlockAdded === false && e.type === 'move' && e.blockId !== 'change_var') {
      console.log('not change var block');
      initialLoadFlag = true;
      cb('You need to add a block to the Code Zone to update the ' + variableName + ' variable by 10.');
      return;
    }

    if (e.type === 'move' && e.blockId === 'change_var') {
      this.changeBlockAdded = true;
      const text = Blockly.Xml.workspaceToDom(workSpace);
      blocksData.mm4_1_c1.initialCode = Blockly.Xml.domToPrettyText(text);
      return;
    }

    if (e.type === 'delete' && e.blockId === 'change_var') {
      initialLoadFlag = true;
      cb('Don’t make any changes to your previous code. Just add a new block to specify the condition under which the score should be updated.');
    }

    if (this.ifBlockAdded === false && this.changeBlockAdded === true  && e.type === 'move' && e.blockId !== 'controls_if') {
      console.log('inside if block not present');
      initialLoadFlag = true;
      cb('Something seems wrong. Do you remember the block used to detect if the cap is within the Stage boundaries? Use the same block to detect if the fruit has been caught.');
    }

    if (this.changeBlockAdded === true && e.type === 'move' && e.blockId === 'controls_if') {
      this.ifBlockAdded = true;
      const text = Blockly.Xml.workspaceToDom(workSpace);
      blocksData.mm4_1_c1.initialCode = Blockly.Xml.domToPrettyText(text);
      return;
    }

    if (e.type === 'delete' && e.blockId === 'controls_if') {
      initialLoadFlag = true;
      cb('Don’t make any changes to your previous code.');
    }

    if (e.type === 'move' && e.blockId !== 'touch' && this.changeBlockAdded === true && this.ifBlockAdded === true && this.touchBlockAdded === false) {
      initialLoadFlag = true;
      cb('Look for a block which detects the fruit touching the cap. Add that block as an input to your IF block.');
    }

    if (e.type === 'move' && e.blockId === 'touch' && this.changeBlockAdded === true && this.ifBlockAdded === true && this.touchBlockAdded === false) {
      if (e.newParentId !== 'controls_if') {
        initialLoadFlag = true;
        cb('Look for a block which detects the fruit touching the cap. Add that block as an input to your IF block.');
      } else {
        this.touchBlockAdded = true;
        const text = Blockly.Xml.workspaceToDom(workSpace);
        blocksData.mm4_1_c1.initialCode = Blockly.Xml.domToPrettyText(text);  
      } 
    }  

    if (e.type === 'delete' && e.blockId === 'touch') {
      this.touchBlockAdded = false;
    }

    if (this.changeBlockAdded === true && this.ifBlockAdded === true && this.touchBlockAdded === true) {
      initialLoadFlag = true;
      if (e.type !== 'change' && e.blockId !== 'touch') {
        cb('Choose the correct characters from the dropdown. Remember you want to check if the fruit has been caught by the cap.');
      }
      if (e.type === 'change' && e.blockId === 'touch') {
        if (name === 'character1' && (e.newValue === '1' || e.newValue === '2')) {
          char1 = e.newValue;
          if ((char2 === '1' && char1 === '1') || (char2 === '2' && char1 === '2')) {
            cb('Choose the correct characters from the dropdown. Remember you want to check if the fruit has been caught by the cap.');
          }
        } else {
          cb('Choose the correct characters from the dropdown. Remember you want to check if the fruit has been caught by the cap.');
        }  

        if (name === 'character2' && (e.newValue === '1' || e.newValue === '2')) {
          char2 = e.newValue;
        if ((char2 === '1' && char1 === '1') || (char2 === '2' && char1 === '2')) {
          cb('Choose the correct characters from the dropdown. Remember you want to check if the fruit has been caught by the cap.');
        }
        } else {
          cb('Choose the correct characters from the dropdown. Remember you want to check if the fruit has been caught by the cap.');
        }
      }
    }  
  }
}
