import { Injectable } from '@angular/core';
import { NumberBlockService } from './number-block.service';

declare let Blockly: any;

@Injectable()
export class RandomNumberBlockService {
  public xml: String;
  private numberBlock: NumberBlockService;

  constructor() {
    this.numberBlock = new NumberBlockService();
    this.xml = `<block type="random_number" id="random_number">
      <value name="from">
        ${this.numberBlock.xml}
      </value>
      <value name="to">
        ${this.numberBlock.xml}
      </value>
    </block>`;

    Blockly.Blocks['random_number'] = {
      init: function () {
        this.appendValueInput("from")
          .setCheck("Number")
          .appendField("random number from ");
        this.appendDummyInput();
        this.appendValueInput("to")
          .setCheck("Number")
          .appendField(" to ");
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        this.setColour(190);
        this.setTooltip('');
        this.setHelpUrl('');
      }
    };

    Blockly.JavaScript['random_number'] = function (block) {
      let from = Blockly.JavaScript.valueToCode(block, 'from');
      let to = Blockly.JavaScript.valueToCode(block, 'to');
      let json = {
        method: 'getRandomNumber',
        type: 'input',
        params: {
          from,
          to
        }
      }
      return [JSON.stringify(json)];
    }

  }

  interpret = interpreter => {
    const wrapper = function ({ from, to }) {
      if (isNaN(Number(from))) {
        from = interpreter.executeCommands(from);
      }
      if (isNaN(Number(to))) {
        to = interpreter.executeCommands(to);
      }
      from = parseInt(from);
      to = parseInt(to);
      const n = Math.floor(Math.random() * (to - from) + from);
      return n;
    };
    interpreter.setProperty('getRandomNumber', wrapper, 'input');
  }

}
