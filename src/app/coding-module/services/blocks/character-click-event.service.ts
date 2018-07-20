import { Injectable } from '@angular/core';
import { SpriteService } from './../sprite.service';

declare let Blockly: any;


let code, spriteData;

@Injectable()
export class CharacterClickEventService {
  private sp: SpriteService;
  private keyCodePair;
  private keySpritePair;
  private feedback;
  private code;
  private instanceList;
  private myInterpreter;
  public xml: String;

  constructor(activity = null) {
    let myBlock = {};
    let self = this;
    this.myInterpreter = [];
    this.instanceList = [];
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
      const json = {
        method: 'charClickEventBind',
        type: 'event',
        params: {
          spriteIndex,
          linesOfCode: btoa(code)
        }
      }
      return `${JSON.stringify(json)};\n`;
    };
  }

  mouseClickEvent = e => {
    // if (!this.keyCodePair[e.target.cacheKey].length) {
    //   return this.feedback('', this.keySpritePair[e.target.cacheKey]);
    // }
    this.myInterpreter.executeCommands(this.keyCodePair[e.target.cacheKey], () => {
      this.feedback(this.keyCodePair[e.target.cacheKey].split(';\n'), this.keySpritePair[e.target.cacheKey]);
    });
  }

  interpret = (interpreter, sprites, feedback) => {
    const wrapper = ({ spriteIndex, linesOfCode }) => {
      if (!linesOfCode.length) return;
      this.myInterpreter = interpreter;
      this.feedback = feedback;
      const instance = sprites[spriteIndex].instance;
      this.instanceList.push(instance);
      this.keySpritePair = { ...this.keySpritePair, [`${instance.cacheKey}`]: sprites[spriteIndex].eventId };
      this.keyCodePair = { ...this.keyCodePair, [`${instance.cacheKey}`]: atob(linesOfCode) };
      instance.on('mousedown', this.mouseClickEvent);
    };
    interpreter.setProperty('charClickEventBind', wrapper);
  }

  unregister = () => {
    this.myInterpreter = null;
    for (let i = 0; i < this.instanceList.length; i++) {
      this.instanceList[i].off('mousedown', this.mouseClickEvent);
    }  
  }

}
