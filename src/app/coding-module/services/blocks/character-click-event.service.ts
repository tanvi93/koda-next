import { Injectable } from '@angular/core';
import { SpriteService } from './../sprite.service';

declare let Blockly: any;
declare let Interpreter: any;

let code, spriteData;

@Injectable()
export class CharacterClickEventService {
  private sp: SpriteService;
  private keyCodePair;
  private scope;
  private code;
  private instance;
  private myInterpreter;
  public xml: String;

  constructor(activity = null) {
    let myBlock = {};
    let self = this;
    this.myInterpreter = [];
    this.xml = `<block type="click_event" id="click_event"></block>`;
    this.sp = new SpriteService();
    spriteData = this.sp.getAllSprites(activity);
    const sprites = this.sp.spriteDropdown(activity);
    Blockly.Blocks['click_event'] = {
      init: function () {
        this.appendDummyInput()
          .appendField("When")
          .appendField(new Blockly.FieldDropdown(sprites), "sprite")
          .appendField("clicked");
        this.appendStatementInput("sprite_clicked")
          .setCheck(null);
        this.setColour('#f69d16');
        this.setTooltip("");
        this.setHelpUrl("");
        myBlock[this.id] = this;
      }
    };

    Blockly.JavaScript['click_event'] = (block) => {
      block.startHat_ = true;
      let spriteIndex = block.getFieldValue('sprite');
      spriteIndex = spriteIndex.length === 0 ? -1 : spriteIndex;
      code = Blockly.JavaScript.statementToCode(block, 'sprite_clicked');
      return `charClickEventBind('${spriteIndex}', "${btoa(code)}");\n`;
    };
  }

  mouseClickEvent = e => {
    this.myInterpreter.push(new Interpreter(''));
    let index = this.myInterpreter.length - 1;
    this.myInterpreter[index].stateStack[0].scope = this.scope;
    this.myInterpreter[index].appendCode(this.keyCodePair[e.target.cacheKey]);
    const runner = () => {
      if (this.myInterpreter[index]) {
        const hasMore = this.myInterpreter[index].step();
        if (hasMore) {
          setTimeout(runner, 0);
        }
      }
    };
    runner();
  }

  initInterpreter = (interpreter, scope, sprites) => {
    const wrapper = (spriteIndex, tmp) => {
      this.scope = scope;
      this.instance = sprites[spriteIndex].instance;
      this.keyCodePair = { ...this.keyCodePair, [`${this.instance.cacheKey}`]: atob(tmp) };
      this.instance.on('mousedown', this.mouseClickEvent);
    };
    interpreter.setProperty(scope, 'charClickEventBind', interpreter.createNativeFunction(wrapper));

  }

  unregister = () => {
    this.myInterpreter = [];
    if (this.instance) {
      this.instance.off('mousedown', this.mouseClickEvent);
    }  
  }

}
