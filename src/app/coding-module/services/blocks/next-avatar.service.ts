import { Injectable } from '@angular/core';
import { SpriteService } from './../sprite.service';

declare let Blockly: any;

@Injectable()
export class NextAvatarService {
  private sp: SpriteService;
  private costume: Array<any>;
  private spriteIndex: any;
  public xml; String;

  constructor(activity = null) {
    this.xml = `<block type="next_look" id="next_look"> </block>`;

    this.sp = new SpriteService();
    const sprites = this.sp.spriteDropdown(activity);
    // classInstance = this;
    this.spriteIndex = 0;

    Blockly.Blocks['next_look'] = {
      init: function () {
        this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown(sprites), "sprite")
          .appendField(": change to next look");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
      }
    };

    Blockly.JavaScript['next_look'] = function (block) {
      let spriteIndex = block.getFieldValue('sprite');
      spriteIndex = spriteIndex.length === 0 ? -1 : spriteIndex;

      const json = {
        spriteIndex: spriteIndex + ''
      }
      return `nextAvatar('${JSON.stringify(json)}');\n`;
    }
  }

  initInterpreter = (interpreter, scope, cb) => {
    const wrapper = function (obj) {
      cb(JSON.parse(obj));
    };
    interpreter.setProperty(scope, 'nextAvatar', interpreter.createNativeFunction(wrapper));
  }

}
