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
      return [`getValueOfVariable('${nameOfVariable}')`];
    };
  }

  initInterpreter = (interpreter, scope) => {
    const wrapper = function (name) {
      if (!variableList[name]) {
        variableList[name] = { value: 0 };
      }
      return variableList[name].value;
    };
    interpreter.setProperty(scope, 'getValueOfVariable', interpreter.createNativeFunction(wrapper));
  }

}