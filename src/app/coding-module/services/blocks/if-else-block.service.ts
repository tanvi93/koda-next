import { Injectable } from '@angular/core';

declare let Blockly: any;
declare let Interpreter: any;

@Injectable()
export class IfElseBlockService {
  public xml: String;

  constructor() {
    this.xml = `<block type="controls_if_else" id="controls_if_else"></block>`;

    Blockly.Blocks['controls_if_else'] = {
      init: function () {
        this.appendDummyInput()
          .appendField("if");
        this.appendValueInput('condition')
          .setCheck(null);
        this.appendStatementInput("in_if")
          .setCheck(null);
        this.appendDummyInput()
          .appendField("else");
        this.appendStatementInput("in_else")
          .setCheck(null);
        this.setInputsInline(true, 'new');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('210');
        this.setTooltip("");
        this.setHelpUrl("");
      }
    };

    Blockly.JavaScript['controls_if_else'] = (block) => {
      let condition = Blockly.JavaScript.valueToCode(block, 'condition');
      const ifCode = Blockly.JavaScript.statementToCode(block, 'in_if');
      const elseCode = Blockly.JavaScript.statementToCode(block, 'in_else');
      const json = {
        method: 'kodaIfElse',
        params: {
          condition,
          ifCode,
          elseCode
        }
      }
      return `${JSON.stringify(json)};\n`;
    }
  }

  interpret = interpreter => {
    const wrapper = function ({ condition, ifCode, elseCode }, callback) {
      condition = interpreter.executeCommands(condition);
      if (condition) {
        interpreter.executeCommands(ifCode, () => {
          callback();
        });
      } else {
        interpreter.executeCommands(elseCode, () => {
          callback();
        });
      }
    };
    interpreter.setProperty('kodaIfElse', wrapper, 'async');
  }
}