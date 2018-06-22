import { Injectable } from '@angular/core';
import { variableList } from './variable-block.service';

declare let Blockly: any;

@Injectable()
export class HideShowVarBlockService {

  constructor() {
    let variablesCreated = Object.keys(variableList).map((v, i) => [v, v]);
    Blockly.Blocks['show_hide_var'] = {
      init: function () {
        this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown([
            ["show", "show"],
            ["hide", "hide"]
          ]), "visibility")
          .appendField("variable")
          .appendField(new Blockly.FieldDropdown(variablesCreated), "variable");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(0);
        this.setTooltip('');
        this.setHelpUrl('');
      }
    };

    Blockly.JavaScript['show_hide_var'] = function (block) {
      const selectedVariable = block.getFieldValue('variable');
      const visibility = block.getFieldValue('visibility');      
      return `variableDisplayToggle('${selectedVariable}', '${visibility}');\n`;
    };
  }

  initInterpreter = (interpreter, scope, cb) => {
    const wrapper = function (variable, visibility) {
      variableList[variable].isHidden = visibility === "hide" ? true : false;
      cb(null);
    };
    interpreter.setProperty(scope, 'variableDisplayToggle', interpreter.createNativeFunction(wrapper));
  }

}



