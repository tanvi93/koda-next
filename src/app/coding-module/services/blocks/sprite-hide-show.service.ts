import { Injectable } from '@angular/core';
import { SpriteService } from './../sprite.service';

declare let Blockly: any;

@Injectable()
export class SpriteHideShowService {
  private sp: SpriteService;
  public xml; String;

  constructor(activity = null) {
    this.xml = `<block type="show_hide" ></block>`;

    this.sp = new SpriteService();
    const sprites = this.sp.spriteDropdown(activity);

    Blockly.Blocks['show_hide'] = {
      init: function () {
        this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown(sprites), 'sprite')
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

    Blockly.JavaScript['show_hide'] = function (block) {
      const visibility = Number(block.getFieldValue('visibility_status'));
      let spriteIndex = block.getFieldValue('sprite');
      spriteIndex = spriteIndex.length === 0 ? -1 : spriteIndex;
      const json = {
        method: 'visiblityToggle',
        params: {
          spriteIndex,
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
    interpreter.setProperty('visiblityToggle', wrapper);
  }

}
