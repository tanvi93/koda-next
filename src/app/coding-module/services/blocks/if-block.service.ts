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
      return `kodaIf(${condition}, "${btoa(code)}");\n`;
    }
  }

  initInterpreter = (interpreter, scope) => {
    const wrapper = function (condition, code, callback) {
      if (condition) {
        let intrp = new Interpreter('');
        intrp.stateStack[0].scope = scope;
        intrp.appendCode(atob(code));
        const runner = function () {
          if (intrp) {
            const hasMore = intrp.step();
            if (hasMore) {
              // Execution is currently blocked by some async call.
              // Try again later.
              setTimeout(runner, 0);
            } else {
              callback();
            }
          }
        };
        runner();
      } else {
        callback();
      }
    };
    interpreter.setProperty(scope, 'kodaIf', interpreter.createAsyncFunction(wrapper));
  }
}
