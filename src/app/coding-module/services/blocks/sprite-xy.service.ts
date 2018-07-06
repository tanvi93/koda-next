import { Injectable } from '@angular/core';
import { SpriteService } from './../sprite.service';

declare let Blockly: any;
let gActivity: String;

@Injectable()
export class SpriteXyService {
  private sp: SpriteService;
  public xml; String;

  constructor(activity = null) {
    this.xml = `<block type="get_coordinates" id="get_coordinates"></block>`;

    this.sp = new SpriteService();
    const sprites = this.sp.spriteDropdown(activity);
    gActivity = activity;

    Blockly.Blocks['get_coordinates'] = {
      init: function () {
        this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown(sprites), "sprite")
          .appendField(":")
          .appendField(new Blockly.FieldDropdown([
            ["x", "0"],
            ["y", "1"]
          ]), "axis");
        this.setInputsInline(false);
        this.setOutput(true);
        this.setColour("0");
        this.setTooltip('');
        this.setHelpUrl('');
      }
    };

    Blockly.JavaScript['get_coordinates'] = function (block) {
      let sprite = block.getFieldValue('sprite');
      sprite = sprite.length === 0 ? 0 : sprite;
      const axis = Number(block.getFieldValue('axis'));
      let json = {
        method: 'getCoordinate',
        type: 'input',
        params: {
          spriteIndex: sprite,
          axis
        }
      }
      return [JSON.stringify(json)];
    };
  }

  interpret = (interpreter, spritesList) => {
    const wrapper = function (obj) {
      let { spriteIndex, axis } = obj;
      axis = axis ? 'y' : 'x';
      const n = spritesList[spriteIndex].currentOffset ? spritesList[spriteIndex].currentOffset[axis] : spritesList[spriteIndex].initialOffset[axis];
      return n;
    };
    interpreter.setProperty('getCoordinate', wrapper, 'input');
  }

}
