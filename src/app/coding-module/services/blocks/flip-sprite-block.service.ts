import { Injectable } from '@angular/core';
import { SpriteService } from './../sprite.service';
import { NumberBlockService } from './number-block.service';

declare let Blockly: any;

@Injectable()
export class FlipSpriteBlockService {
  private sp: SpriteService;
  public xml; String;
  private numberBlock: NumberBlockService;

  constructor(activity = null) {
    this.sp = new SpriteService();
    this.numberBlock = new NumberBlockService();
    this.xml = `<block type="flip_sprite" id="flip_sprite"></block>`;
    const sprites = this.sp.spriteDropdown(activity);
    Blockly.Blocks['flip_sprite'] = {
      init: function () {
        this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown(sprites), 'sprite')
          .appendField(': flip it');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip('');
        this.setHelpUrl('');
      }
    };

    Blockly.JavaScript['flip_sprite'] = function (block) {
      let spriteIndex = block.getFieldValue('sprite');
      spriteIndex = spriteIndex.length === 0 ? -1 : spriteIndex;
      let json = {
        method: 'flip',
        params: {
          spriteIndex
        }
      }
      return `${JSON.stringify(json)};\n`;
    };
  }

  interpret = (interpreter, cb) => {
    const wrapper = function (obj) {
      cb(obj);
      return obj;
    };
    interpreter.setProperty('flip', wrapper);
  }
}