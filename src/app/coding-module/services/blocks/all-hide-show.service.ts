import { Injectable } from '@angular/core';

declare let Blockly: any;

@Injectable()
export class AllHideShowService {
  public xml; String;

  constructor() {
    this.xml = `<block type="show_hide_all" ></block>`;

    Blockly.Blocks['show_hide_all'] = {
      init: function () {
        this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown([["show", '1'], ["hide", '0']]), "visibility_status")
          .appendField("all characters");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip('');
        this.setHelpUrl('');
      }
    }

    Blockly.JavaScript['show_hide_all'] = function (block) {
      const visibility = Number(block.getFieldValue('visibility_status'));
      const json = {
        method: 'visiblityToggleForAll',
        params: {
          visibility
        }
      }
      return `${JSON.stringify(json)};\n`;
    }
  }

  interpret = (interpreter, cb) => {
    const wrapper = function (obj) {
      cb(obj);
    };
    interpreter.setProperty('visiblityToggleForAll', wrapper);
  }

}

