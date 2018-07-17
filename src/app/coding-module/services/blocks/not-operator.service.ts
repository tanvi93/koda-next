import { Injectable } from '@angular/core';

declare let Blockly: any;

@Injectable()
export class NotOperatorService {
  public xml: String;

  constructor() {
    this.xml = `<block type="not_operator" id="not_operator"></block>`;

    Blockly.Blocks['not_operator'] = {
      init: function () {
        this.appendValueInput("input")
          .setCheck("Boolean")
          .appendField("NOT");
        this.setInputsInline(true);
        this.setOutput(true, "Boolean");
        this.setColour(190);
        this.setTooltip("");
        this.setHelpUrl("");
      }
    };

    Blockly.JavaScript['not_operator'] = function (block) {
      const input = Blockly.JavaScript.valueToCode(block, 'input');
      const json = {
        method: 'notOperator',
        type: 'input',
        params: {
          condition: input
        }
      }
      return [JSON.stringify(json)];
    }
  }

  interpret = interpreter => {
    const wrapper = function ({ condition }) {
      condition = interpreter.executeCommands(condition);
      return !condition;
    };
    interpreter.setProperty('notOperator', wrapper, 'input');
  }

}



