import { Injectable } from '@angular/core';
import { NumberBlockService } from './number-block.service';

declare let Blockly: any;

@Injectable()
export class RepeatPredefinedService {
  public xml: String;
  private numberBlock: NumberBlockService;

  constructor() {
    this.numberBlock = new NumberBlockService();
    this.xml = `<block type = "controls_repeat_ext" id="controls_repeat_ext" colour="70">
                    <value name="times" >
                      ${this.numberBlock.xml}
                    </value>
                </block>`;
    Blockly.Blocks['controls_repeat_ext'] = {
      init: function () {
        this.appendDummyInput()
          .appendField("repeat");
        this.appendValueInput('times')
        .setCheck('Number');
        this.appendDummyInput()
          .appendField('times');
        this.appendStatementInput("in_loop")
          .setCheck(null);
        this.setColour('127');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip("");
        this.setHelpUrl("");
      }
    };

    Blockly.JavaScript['controls_repeat_ext'] = (block) => {
      const times = Blockly.JavaScript.valueToCode(block, 'times');
      const code = Blockly.JavaScript.statementToCode(block, 'in_loop');
      const json = {
        method: 'repeat',
        params: {
          times,
          linesOfCode: btoa(code)
        }
      }
      return `${JSON.stringify(json)};\n`;
    }
  }

  interpret = (interpreter) => {
    const wrapper = (json, callback) => {
      if (isNaN(json.times)) {
        json.times = interpreter.executeCommands(json.times);
      }
      json.times = parseInt(json.times);
      const code = atob(json.linesOfCode);
      const repeat = (i) => {
        if (i === json.times) return callback();
        interpreter.executeCommands(code, () => { 
          repeat(++i);
        });
      }
      repeat(0);
    };
    interpreter.setProperty('repeat', wrapper, 'async');
  }
}
