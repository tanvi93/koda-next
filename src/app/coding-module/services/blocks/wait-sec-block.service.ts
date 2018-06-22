import { Injectable } from '@angular/core';

declare let Blockly: any;

@Injectable()
export class WaitSecBlockService {
  public xml: String;

  constructor() {
    this.xml = `<block type="wait" id="wait" ></block>`;

    Blockly.Blocks['wait'] = {
      init: function () {
        this.appendDummyInput()
          .appendField("wait")
          .appendField(new Blockly.FieldNumber(0), "wait_time")
          .appendField("sec");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(30);
        this.setTooltip('');
        this.setHelpUrl('');
      }
    };

    Blockly.JavaScript['wait'] = function (block) {
      const wait_secs = block.getFieldValue('wait_time');
      let json = {
        wait_secs
      }
      return `wait('${JSON.stringify(json)}');\n`;
      // return `wait(${wait_secs})\n`;
    }
  }

  initInterpreter = (interpreter, scope) => {
    // Ensure function name does not conflict with variable names.
    Blockly.JavaScript.addReservedWords('wait');
    const wrapper = function (secs, callback) {
      secs = JSON.parse(secs);
      secs = Number(secs.wait_secs);
      setTimeout(() => {
        callback();
      }, secs * 1000);
    };
    interpreter.setProperty(scope, 'wait', interpreter.createAsyncFunction(wrapper));
  }

}
