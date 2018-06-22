import { Injectable } from '@angular/core';
import { SpriteService } from './../sprite.service';

declare let Blockly: any;
declare let Interpreter: any;

let code;

@Injectable()
export class TouchEventService {
  private sp: SpriteService;
  private activity: string;
  public xml: String;

  constructor(activity = null) {
    this.xml = `<block type="touch" id="touch"></block>`;
    this.sp = new SpriteService();
    this.activity = activity;
    const sprites = this.sp.spriteDropdown(activity);
    Blockly.Blocks['touch'] = {
      init: function () {
        this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown(sprites), "character1")
          .appendField("touches")
          .appendField(new Blockly.FieldDropdown(sprites), "character2");
        this.setOutput(true);
        this.setColour(190);
        this.setTooltip("");
        this.setHelpUrl("");
      }
    };

    Blockly.JavaScript['touch'] = (block) => {
      let sprite1Index = block.getFieldValue('character1');
      sprite1Index = sprite1Index.length === 0 ? 0 : sprite1Index;
      let sprite2Index = block.getFieldValue('character2');
      sprite2Index = sprite2Index.length === 0 ? 0 : sprite2Index;
      const json = {
        sprite1Index,
        sprite2Index
      }
      return [`hasCharTouched('${JSON.stringify(json)}')`]
    };
  }

  initInterpreter = (interpreter, scope, spriteData) => {
    Blockly.JavaScript.addReservedWords('hasCharTouched');
    const wrapper = (obj) => {
      obj = JSON.parse(obj);
      let sprite1 = spriteData[obj.sprite1Index].instance;
      let sprite2 = spriteData[obj.sprite2Index].instance;
      return sprite1.intersectsWithObject(sprite2, null, true);
    };
    interpreter.setProperty(scope, 'hasCharTouched', interpreter.createNativeFunction(wrapper));

  }

}