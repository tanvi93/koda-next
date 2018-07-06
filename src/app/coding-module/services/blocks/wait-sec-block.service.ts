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
        method: 'wait',
        params: {
          wait_secs,
          blockIndex: this.blocks.length - 1
        }
      }
      return `${JSON.stringify(json)};\n`;
    }
  }

  interpret = interpreter => {
    const wrapper = (json, callback) => {
      if (this.blocks) {
        this.blocks[json.blockIndex].addSelect();
      } 
      const secs = Number(json.wait_secs);
      setTimeout(() => {
        if (this.blocks) {
          this.blocks[json.blockIndex].removeSelect();
        } 
        callback();
      }, secs * 1000);
    };
    interpreter.setProperty('wait', wrapper, 'async');
  }

}
