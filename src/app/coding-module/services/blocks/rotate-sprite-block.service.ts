import { Injectable } from '@angular/core';
import { SpriteService } from './../sprite.service';
import { NumberBlockService } from './number-block.service';

declare let Blockly: any;

@Injectable()
export class RotateSpriteBlockService {
  private sp: SpriteService;
  public xml; String;
  private numberBlock: NumberBlockService;

  constructor(activity = null) {
    this.sp = new SpriteService();
    this.numberBlock = new NumberBlockService();
    this.xml = `<block type="rotate" id="rotate">
      <value name="degree" >
          ${this.numberBlock.xml}
      </value>
    </block>`;
    const sprites = this.sp.spriteDropdown(activity);
    Blockly.Blocks['rotate'] = {
      init: function () {
        this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown(sprites), 'sprite')
          .appendField(': rotate')
        this.appendValueInput('degree')
          .setCheck('Number')
          .appendField('degrees');
        this.setInputsInline(true, 'new');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip('');
        this.setHelpUrl('');
      }
    };

    Blockly.JavaScript['rotate'] = function (block) {
      let spriteIndex = block.getFieldValue('sprite');
      spriteIndex = spriteIndex.length === 0 ? -1 : spriteIndex;
      const degree = Blockly.JavaScript.valueToCode(block, 'degree');
      let json = {
        method: 'rotate',
        params: {
          degree,
          spriteIndex
        }
      }
      return `${JSON.stringify(json)};\n`;
    };
  }

  interpret = (interpreter, cb) => {
    const wrapper = function (obj) {
      obj.degree = obj.degree ? obj.degree : '0';
      cb(obj);
    };
    interpreter.setProperty('rotate', wrapper);
  }
}