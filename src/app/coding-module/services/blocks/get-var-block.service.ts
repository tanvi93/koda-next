import { Injectable } from '@angular/core';
import { variableList } from './variable-block.service';

declare let Blockly: any;

@Injectable()
export class GetVarBlockService {

  constructor(ws = null) {
    const updateVariables = ws ? ws.getAllVariables() : [{ name: null }];
    Blockly.Blocks['get_var'] = {
      init: function () {
        this.appendDummyInput()
          .appendField(new Blockly.FieldVariable(updateVariables[0].name), "nameOfVariable1");
        this.setOutput(true, null);
        this.setColour(0);
        this.setTooltip("");
        this.setHelpUrl("");
      }
    };

    Blockly.JavaScript['get_var'] = function (block) {
      const nameOfVariable = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('nameOfVariable1'),
        Blockly.Variables.NAME_TYPE);
      const json = {
        method: 'getValueOfVariable',
        type: 'input',
        params: {
          nameOfVariable
        }
      }
      return [JSON.stringify(json)];
    };
  }

  interpret = interpreter => {
    const wrapper = ({ nameOfVariable}) => {
      if (!variableList[nameOfVariable]) {
        variableList[nameOfVariable] = { value: 0 };
      }
      return variableList[nameOfVariable]['value'];
    };
    interpreter.setProperty('getValueOfVariable', wrapper, 'input');
  }

}