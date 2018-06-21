import { Injectable } from '@angular/core';
import { SpriteService } from './../sprite.service';

declare let Blockly: any;


@Injectable()
export class ShowCoordsService {
  private sp: SpriteService;
  public xml; String;

  constructor(activity = null) {
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

    Blockly.JavaScript['show_coords'] = function (block) {
      let spriteIndex = block.getFieldValue('sprite');
      spriteIndex = spriteIndex.length === 0 ? -1 : spriteIndex;
      let json = {
        spriteIndex
      }
      return `showCoo('${JSON.stringify(json)}');\n`;
      // return `showCoo(${spriteIndex});\n`;
    };
  }

  initInterpreterShowCoords = (interpreter, scope, cb) => {
    // Ensure function name does not conflict with variable names.
    Blockly.JavaScript.addReservedWords('showCoo');
    const wrapper = function (json, callback) {
      json = JSON.parse(json);
      cb(json.spriteIndex, 2000);
      setTimeout(() => {
        callback(json.spriteIndex);
      }, 2000);
    };
    interpreter.setProperty(scope, 'showCoo', interpreter.createAsyncFunction(wrapper));
  }

}
