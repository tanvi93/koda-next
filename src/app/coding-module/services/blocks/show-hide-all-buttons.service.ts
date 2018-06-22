import { Injectable } from '@angular/core';

declare let Blockly: any;

@Injectable()
export class ShowHideAllButtonsService {
  public xml; String;

  constructor() {
    this.xml = `<block type="show_hide_all_buttons" ></block>`;

    Blockly.Blocks['show_hide_all_buttons'] = {
      init: function () {
        this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown([["show", '1'], ["hide", '0']]), "visibility_status")
          .appendField("all buttons");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip('');
        this.setHelpUrl('');
      }
    }

    Blockly.JavaScript['show_hide_all_buttons'] = function (block) {
      const visibility = Number(block.getFieldValue('visibility_status'));
      const json = {
        visibility,
        allButtons: true
      }
      return `visiblityToggleForAllButtons('${JSON.stringify(json)}');\n`;
    }
  }

  initInterpreter = (interpreter, scope, cb) => {
    const wrapper = function (obj) {
      cb(JSON.parse(obj));
    };
    interpreter.setProperty(scope, 'visiblityToggleForAllButtons', interpreter.createNativeFunction(wrapper));
  }

}