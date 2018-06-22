import { Injectable } from '@angular/core';

declare let Blockly: any;

@Injectable()
export class RepeatForeverService {
  public xml: String;

  constructor() {
    this.xml = `<block type="controls_repeat_forever"></block>`;

    Blockly.Blocks['controls_repeat_forever'] = {
      init: function () {
        this.appendDummyInput()
          .appendField("repeat forever");
        this.appendStatementInput("in_forever_loop")
          .setCheck(null);
        this.setColour('127');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip("");
        this.setHelpUrl("");
      }
    };

    Blockly.JavaScript['controls_repeat_forever'] = (block) => {
      const code = Blockly.JavaScript.statementToCode(block, 'in_forever_loop');
      const loop = `while(true) {${code}};\n`
      return loop;

    }
  }
}