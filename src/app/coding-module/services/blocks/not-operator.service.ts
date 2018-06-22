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
      switch (input) {
        case "true":
          return [false];
        case "false":
          return [true];
        default:
          return [!input];
      }
    };

  }

}



