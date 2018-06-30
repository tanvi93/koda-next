import { Injectable } from '@angular/core';

declare let Blockly: any;

@Injectable()
export class WaitSecBlockService {
  public xml: String;
  private blocks;

  constructor() {
    this.blocks = [];
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

    Blockly.JavaScript['wait'] = (block) => {
      this.blocks.push(block);
      const wait_secs = block.getFieldValue('wait_time');
      let json = {
        wait_secs,
        blockIndex: this.blocks.length - 1
      }
      return `wait('${JSON.stringify(json)}');\n`;
      // return `wait(${wait_secs})\n`;
    }
  }

  initInterpreter = (interpreter, scope) => {
    // Ensure function name does not conflict with variable names.
    Blockly.JavaScript.addReservedWords('wait');
    const wrapper = (secs, callback) => {
      let json = JSON.parse(secs);
      if (this.blocks) {
        this.blocks[json.blockIndex].addSelect();
      } 
      secs = Number(json.wait_secs);
      setTimeout(() => {
        if (this.blocks) {
          this.blocks[json.blockIndex].removeSelect();
        } 
        callback();
      }, secs * 1000);
    };
    interpreter.setProperty(scope, 'wait', interpreter.createAsyncFunction(wrapper));
  }

}
