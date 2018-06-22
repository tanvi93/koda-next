import { Injectable } from '@angular/core';
import { variableList } from './variable-block.service';

declare let Blockly: any;

@Injectable()
export class SetVarBlockService {

  constructor(ws = null) {
    const updateVariables = ws ? ws.getAllVariables() : [{ name: null }];
    Blockly.Blocks['set_var'] = {
      init: function () {
        this.appendValueInput("varValue")
          .setCheck("Number")
          .appendField("set")
          .appendField(new Blockly.FieldVariable(updateVariables[0].name), "nameOfVariable")
          .appendField("to");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(0);
        this.setTooltip("");
        this.setHelpUrl("");
      }
    };

    Blockly.JavaScript['set_var'] = function (block) {
      const nameOfVariable = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('nameOfVariable'),
        Blockly.Variables.NAME_TYPE);
      const valueOfVariable = Blockly.JavaScript.valueToCode(block, 'varValue');
      let json = {
        nameOfVariable,
        valueOfVariable
      }
      return `setVar('${nameOfVariable}', ${valueOfVariable});\n`;
    };
    
  }
  
  initInterpreter = (interpreter, scope, cb) => {
    const wrapper = function (name, value) {
      if (!variableList[name]) {
        variableList[name] = { value: 0 };
      }
      variableList[name].value = value;
      cb(variableList);
    };
    interpreter.setProperty(scope, 'setVar', interpreter.createNativeFunction(wrapper));
  }

}