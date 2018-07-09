import { Injectable } from '@angular/core';

declare let Blockly: any;
declare let Interpreter: any;

@Injectable()
export class IfBlockService {
  public xml: String;

  constructor() {
    this.xml = `<block type="controls_if" id="controls_if"></block>`;

    Blockly.Blocks['controls_if'] = {
      init: function () {
        this.appendDummyInput()
          .appendField("if");
        this.appendValueInput('condition')
          .setCheck(null);
        this.appendStatementInput("in_if")
          .setCheck(null);
        this.setInputsInline(true, 'new');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('210');
        this.setTooltip("");
        this.setHelpUrl("");
      }
    };
  
    Blockly.JavaScript['controls_if'] = (block) => {
      let condition = Blockly.JavaScript.valueToCode(block, 'condition');
      let code = Blockly.JavaScript.statementToCode(block, 'in_if');
      const json = {
        method: 'kodaIf',
        params: {
          condition,
          linesOfCode: btoa(code)
        }
      }
      return `${JSON.stringify(json)};\n`;
    }
  }

  interpret = interpreter => {
    const wrapper = function ({ condition, linesOfCode }, callback) {
      condition = interpreter.executeCommands(condition);
      if (condition) {
        interpreter.executeCommands(atob(linesOfCode), () => {
          callback();
        });
      } else {
        callback();
      }
    };
    interpreter.setProperty('kodaIf', wrapper, 'async');
  }
}
