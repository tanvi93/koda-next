import { Injectable } from '@angular/core';
import { variableList } from './variable-block.service';

declare let Blockly: any;

@Injectable()
export class ChangeVarBlockService {

  constructor(ws = null) {
    const updateVariables = ws ? ws.getAllVariables() : [{ name: null }];
    Blockly.Blocks['change_var'] = {
      init: function () {
        this.appendValueInput("changevar")
          .setCheck("Number")
          .appendField("change")
          .appendField(new Blockly.FieldVariable(updateVariables[0].name), "nameOfVariable")
          .appendField(" by");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(0);
        this.setTooltip("");
        this.setHelpUrl("");
      }
    };

    Blockly.JavaScript['change_var'] = function (block) {
      const nameOfVariable = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('nameOfVariable'),
        Blockly.Variables.NAME_TYPE);
      const valueOfVariable = Blockly.JavaScript.valueToCode(block, 'changevar');
      let json = {
        method: 'changeVar',
        params: {
          nameOfVariable,
          valueOfVariable
        }
      }
      return `${JSON.stringify(json)};\n`;
    };
  }

  interpret = (interpreter, cb) => {
    const wrapper = function ({ nameOfVariable: name, valueOfVariable: value }) {
      if (!variableList[name]) {
        variableList[name] = { value: 0 };
      }
      variableList[name].value = parseFloat(variableList[name].value) + parseFloat(value);
      cb(variableList);
    };
    interpreter.setProperty('changeVar', wrapper);
  }

}


