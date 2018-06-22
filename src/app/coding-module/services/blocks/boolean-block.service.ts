import { Injectable } from '@angular/core';

declare let Blockly: any;

@Injectable()
export class BooleanBlockService {
  public xml: String;

  constructor() {
    this.xml = `<block type="boolean_value"></block>`;

    Blockly.Blocks['boolean_value'] = {
      init: function () {
        this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown([
            ["true", '1'],
            ["false", '0']
          ]), "state");
        this.setOutput(true, "Boolean");
        this.setColour(190);
        this.setTooltip("");
        this.setHelpUrl("");
      }
    };

    Blockly.JavaScript['boolean_value'] = function (block) {
      var state = block.getFieldValue('state');
      return [state];
    };
  }

}
