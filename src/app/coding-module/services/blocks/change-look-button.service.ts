import { Injectable } from '@angular/core';
import { SpriteService } from './../sprite.service';

declare let Blockly: any;

let classInstance: any;

@Injectable()
export class ChangeLookButtonService {
  private sp: SpriteService;
  private costume: Array<any>;
  private buttonIndex: any;
  public xml; String;

  constructor(pageId = null) {
    this.xml = `<block id="change_look_button" type = "change_look_button" > </block>`;

    this.sp = new SpriteService();
    const buttons = this.sp.buttonDropdown(pageId);
    classInstance = this;
    this.buttonIndex = 0;

    let getAvatars = () => {
      const avatars = this.sp.getAllButtons(pageId)[this.buttonIndex].looks;
      let jsonArray = avatars.map((v, i) => {
        return [{
          src: v,
          width: 100,
          height: 50,
          alt: i
        }, i + ''];
      });
      jsonArray = [['', '-1'], ...jsonArray];
      return jsonArray;
    }

    Blockly.Blocks['change_look_button'] = {
      init: function () {
        this.appendDummyInput('look_dummy_input')
          .appendField(new Blockly.FieldDropdown(buttons), "button")
          .appendField(": change look to ")
          .appendField(new Blockly.FieldDropdown(getAvatars), "avatar");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip('');
        this.setHelpUrl('');
      },

      onchange: function (event) {
        if (event.blockId === 'change_look_button' && event.name === 'button') {
          classInstance.buttonIndex = event.newValue;
          this.getInput('look_dummy_input').removeField('avatar');
          this.getInput('look_dummy_input').appendField(new Blockly.FieldDropdown(getAvatars), "avatar");
        }
      }
    };

    Blockly.JavaScript['change_look_button'] = function (block) {
      let buttonIndex = block.getFieldValue('button');
      buttonIndex = buttonIndex.length === 0 ? 0 : buttonIndex;
      const avatar = block.getFieldValue('avatar');
      const json = {
        buttonIndex,
        avatarIndex: avatar
      }
      return `changeButtonAvatar('${JSON.stringify(json)}');\n`;
    }
  }

  initInterpreter = (interpreter, scope, cb) => {
    const wrapper = function (obj) {
      cb(JSON.parse(obj));
    };
    interpreter.setProperty(scope, 'changeButtonAvatar', interpreter.createNativeFunction(wrapper));
  }
}


