import { Injectable } from '@angular/core';
import { SpriteService } from './../sprite.service';

declare let Blockly: any;


@Injectable()
export class ShowCoordsService {
  private sp: SpriteService;
  public xml; String;
  private blocks;

constructor(activity = null) {
  this.blocks = [];
    this.xml = `<block type="show_coords" id="showCoords"> </block>`;
    this.sp = new SpriteService();
    const sprites = this.sp.spriteDropdown(activity);
    Blockly.Blocks['show_coords'] = {
      init: function () {
        this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown(sprites), 'sprite')
          .appendField(': show coordinates');
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip('');
        this.setHelpUrl('');
      }
    };

  Blockly.JavaScript['show_coords'] = (block) => {
      this.blocks.push(block);
      let spriteIndex = block.getFieldValue('sprite');
      spriteIndex = spriteIndex.length === 0 ? -1 : spriteIndex;
    let json = {
      method: 'showCoo',
      params: {
        spriteIndex,
        blockIndex: this.blocks.length - 1
      }
    }
      return `${JSON.stringify(json)};\n`;
    };
  }

  interpret = (interpreter, cb) => {
    const wrapper = (json, callback) => {
      if (this.blocks) {
        this.blocks[json.blockIndex].addSelect();
      } 
      cb({ spriteIndex: json.spriteIndex, duration: 2000 });
      setTimeout(() => {
        if (this.blocks) {
          this.blocks[json.blockIndex].removeSelect();
        } 
        callback();
      }, 2000);
    };
    interpreter.setProperty('showCoo', wrapper, 'async');
  }

}
