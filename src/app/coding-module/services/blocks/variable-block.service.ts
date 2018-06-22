import { Injectable } from '@angular/core';
import { variable } from '@angular/compiler/src/output/output_ast';
import { NumberBlockService } from './number-block.service';
import { blocksData } from './../../../data/coding';

declare let Blockly: any;


@Injectable()
export class VariableBlockService {
  // private variableList: any;
  private onlyOnceAddBlocks: Boolean = true;
  public callbackToCanvas;
  private numberBlock: NumberBlockService;
  private predecidedVariableList;

  constructor(pageId = null) { 
    variableList = {};
    this.callbackToCanvas = null;
    const self = this;
    this.numberBlock = new NumberBlockService();
    if (pageId) {
      this.predecidedVariableList = blocksData[pageId].variables ? blocksData[pageId].variables : [];
    }
  }

  callCallback = () => {
    this.callbackToCanvas(true);
  }

  showPrompt = (ws, callback) => {
    Blockly.Variables.createVariableButtonHandler(ws, variable => {
      let flag = false;
      if (variable != null) {
        variable = variable.toLowerCase();
        variable = variable.trim();
        variable = variable.replace(/\s/g, '_');
        this.predecidedVariableList.forEach(v => {
          if (variable !== v.name) {
            let map = ws.getVariableMap();
            let tmp = ws.getVariable(variable);
            map.deleteVariable(tmp);
            alert(v.msg);
            flag = true;
            return;
          }
        });
        if (flag) return;
        if (!variableList[variable]) {
          let variableValue: any;
          variableValue = prompt(`Please enter the value of ${variable}`);
          variableValue = Number(variableValue);
          this.predecidedVariableList.forEach(v => {
            if (variable === v.name) {
              if (variableValue != v.value) {
                alert(v.msg);
                flag = true;
                return;
              }
            }
          });
          if (flag) return;
          variableList[variable] = { value: '' };
          variableList[variable] = {
            value: variableValue,
            initValue: variableValue,
            isHidden: false
          }
          callback(this.addBlocks());
        } else {
          console.log('already present');
          return false;
        }
      }
    });
  }

  addBlocks = () => {
    this.onlyOnceAddBlocks = false;
    var toolBoxid = "toolbox";
    var block_categoryName = "Variables";
    return (
      `<block type="get_var"></block>
      <block type="set_var" id="set_var">
        <value name="varValue" >
          ${this.numberBlock.xml}
        </value>
      </block>
      <block type="change_var" id="change_var">
        <value name="changevar" >
          ${this.numberBlock.xml}
        </value>
      </block>
      <block type="show_hide_var" id="show_hide_var"></block>`);
  }

  setCallbackToCanvas = callback => {
    this.callbackToCanvas = callback;
    Blockly.Variables.renameVariable = (workspace, oldVariable) => {
      let newVariable = prompt("Please enter variable new name");
      const value = variableList[oldVariable.name];
      delete variableList[oldVariable.name];
      variableList = {
        ...variableList, [newVariable]: value
      };
      workspace.renameVariableById(oldVariable.id_, newVariable);
      this.callCallback();
    }
  }

}

export let variableList = {}
