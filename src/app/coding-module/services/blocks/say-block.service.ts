import { Injectable } from '@angular/core';
import { SpriteService } from './../sprite.service';

declare let Blockly: any;
declare function escape(s: string): string;
declare function unescape(s: string): string;

@Injectable()
export class SayBlockService {
  private sp: SpriteService;
  private blocks;
  public xml; String;

  constructor(activity = null) {
    this.blocks = [];
    this.xml = `<block type="say" id="say"></block>`;
    this.sp = new SpriteService();
    const sprites = this.sp.spriteDropdown(activity);
    Blockly.Blocks['say'] = {
      init: function () {
        this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown(sprites), 'sprite')
          .appendField(': say')
          .appendField(new Blockly.FieldTextInput(''), 'message');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip('');
        this.setHelpUrl('');
      }
    };

    Blockly.JavaScript['say'] = block => {
      this.blocks.push(block);
      let spriteIndex = block.getFieldValue('sprite');
      spriteIndex = spriteIndex.length === 0 ? -1 : spriteIndex;
      let textName = String(block.getFieldValue('message'));
      textName = escape(textName);
      const params = {
        textName,
        spriteIndex,
        blockIndex: this.blocks.length-1
      }
      const json = {
        method: 'say',
        params
      }
      return `${JSON.stringify(json)};\n`;
    };
  }

  interpret = (interpreter, cb) => {
    const wrapper = (obj, callback) => { 
      if (this.blocks) {
        this.blocks[obj.blockIndex].addSelect();
      } 
      obj.textName = obj.textName ? obj.textName : '';
      obj.textName = unescape(obj.textName);
      cb({ text: obj.textName, spriteIndex: obj.spriteIndex, duration: 2000 });
      setTimeout(() => {
        if (this.blocks) {
          this.blocks[obj.blockIndex].removeSelect();
        }  
        callback(obj.textName);
      }, 2000);
    };
    interpreter.setProperty('say', wrapper, 'async');
  }
}
