import { Injectable } from '@angular/core';
import { SpriteService } from './../sprite.service';

declare let Blockly: any;

@Injectable()
export class HideShowButtonService {
  private sp: SpriteService;
  public xml; String;

  constructor(pageId) {
    this.xml = `<block type="show_hide_button" ></block>`;

    this.sp = new SpriteService();
    let buttons: Array<any> = this.sp.buttonDropdown(pageId);

    Blockly.Blocks['show_hide_button'] = {
      init: function () {
        this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown(buttons), 'button')
          .appendField(':')
          .appendField(new Blockly.FieldDropdown([["show", '1'], ["hide", '0']]), "visibility_status");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip('');
        this.setHelpUrl('');
      }
    }

    Blockly.JavaScript['show_hide_button'] = function (block) {
      const visibility = Number(block.getFieldValue('visibility_status'));
      let buttonIndex = block.getFieldValue('button');
      buttonIndex = buttonIndex.length === 0 ? 0 : buttonIndex;
      const json = {
        method: 'buttonVisiblityToggle',
        params: {
          buttonIndex,
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
    interpreter.setProperty('buttonVisiblityToggle', wrapper);
  }

}




