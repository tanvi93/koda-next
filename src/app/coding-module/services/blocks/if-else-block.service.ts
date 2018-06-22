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
      return `kodaIfElse(${condition}, "${btoa(ifCode)}", "${btoa(elseCode)}");\n`;
    }
  }

  initInterpreter = (interpreter, scope) => {
    const wrapper = function (condition, ifCode, elseCode, callback) {
      const executeFn = code => {
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
          } else {
            callback();
          }
        };
        runner();
      }
      if (condition) {
        executeFn(ifCode);
      } else {
        executeFn(elseCode);
      }
    };
    interpreter.setProperty(scope, 'kodaIfElse', interpreter.createAsyncFunction(wrapper));
  }
}