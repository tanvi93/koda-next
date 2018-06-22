import { Injectable } from '@angular/core';

declare let Blockly: any;

@Injectable()
export class NumberBlockService {
  public xml; String;

  constructor() {
    this.xml = `<shadow type="number"> </shadow>`;
    Blockly.Blocks['number'] = {
      init: function () {
        this.appendDummyInput()
          .appendField(new Blockly.FieldNumber(0), 'n');
        this.setInputsInline(false);
        this.setOutput(true, 'Number');
        this.setColour(200);
        this.setTooltip('');
        this.setHelpUrl('');
      }
    };

    Blockly.JavaScript['number'] = function (block) {
      var n = Number(block.getFieldValue('n'));
      return [n, Blockly.JavaScript.ORDER_NONE];
    };
  }

}
