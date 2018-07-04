import { Injectable } from '@angular/core';
import { SpriteService } from './../sprite.service';

declare let Blockly: any;

let classInstance: any;

@Injectable()
export class ChangeLookBlockService {
  private sp: SpriteService;
  private costume: Array<any>;
  private spriteIndex: any;
  public xml; String;

  constructor(activity = null) {
    this.xml = `<block id="change_look" type = "change_look"> </block>`;
    let myBlock = {};

    this.sp = new SpriteService();
    const sprites = this.sp.spriteDropdown(activity);
    classInstance = this;
    this.spriteIndex = 0;
    let avatarsJson = {};

    let getAvatars = (self) => {
      const sprite = this.sp.getAllSprites(activity)[this.spriteIndex];
      const avatars = sprite.looks;
      const aspectRatio = sprite.aspect_ratio;
      if (!self) {
        self = 'change_look';
      }
      let jsonArray = avatars.map((v, i) => {
        return [{
          src: v,
          width: 50,
          height: 50 / aspectRatio,
          alt: i
        }, i + ''];
      });
      jsonArray = [['', '-1'], ...jsonArray];
      avatarsJson[self] = jsonArray;
      return avatarsJson[self];
    }

    Blockly.Blocks['change_look'] = {
      init: function () {
        this.appendDummyInput('look_dummy_input')
          .appendField(new Blockly.FieldDropdown(sprites), "sprite")
          .appendField(": change look to ")
          .appendField(new Blockly.FieldDropdown(getAvatars(this.id)), "avatar");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip('');
        this.setHelpUrl('');
        myBlock[this.id] = this;
      },

      onchange: function (event) {
        if (event.blockId && myBlock[event.blockId] && event.name === 'sprite') {
          classInstance.spriteIndex = event.newValue;
          myBlock[event.blockId].getInput('look_dummy_input').removeField('avatar');
          myBlock[event.blockId].getInput('look_dummy_input').appendField(new Blockly.FieldDropdown(getAvatars(event.blockId)), "avatar");
        }
      }
    };

    Blockly.JavaScript['change_look'] = function (block) {
      let spriteIndex = block.getFieldValue('sprite');
      spriteIndex = spriteIndex.length === 0 ? -1 : spriteIndex;
      const avatar = block.getFieldValue('avatar');
      const params = {
        spriteIndex,
        avatarIndex: avatar
      }
      const json = {
        method: 'changeAvatar',
        params: JSON.stringify(params)
      }
      return `${JSON.stringify(json)};\n`;
    }
  }

  interpret = (interpreter, cb) => {
    const wrapper = function (obj) {
      cb(JSON.parse(obj));
    };
    interpreter.setProperty('changeAvatar', wrapper);
  }
}
