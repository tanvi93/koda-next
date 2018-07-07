import { Injectable } from '@angular/core';
import { SpriteService } from './../sprite.service';

declare let Blockly: any;

@Injectable()
export class ChangeBackgroundService {
  public xml: String;
  private sp: SpriteService;

  constructor(pageId = null) {
    this.sp = new SpriteService();
    this.xml = `<block type="change_background" > </block>`;

    let getBGs = () => {
      const avatars = this.sp.getAllBGs(pageId);
      let jsonArray = avatars.map((v, i) => {
        return [{
          src: v.src,
          width: 100,
          height: 60,
          alt: i
        }, i + ''];
      });
      jsonArray = [['', '-1'], ...jsonArray];
      return jsonArray;
    }

    Blockly.Blocks['change_background'] = {
      init: function () {
        this.appendDummyInput()
          .appendField("change background to ")
          .appendField(new Blockly.FieldDropdown(getBGs()), "background");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip('');
        this.setHelpUrl('');
      }
    };

    Blockly.JavaScript['change_background'] = function (block) {
      let backgroundIndex = block.getFieldValue('background');
      let json = {
        method: 'changeBG',
        params: {
          backgroundIndex
        }
      }
      return `${JSON.stringify(json)};\n`;
    }
  }

  interpret = (interpreter, cb) => {
    const wrapper = function (obj) {
      cb(obj);
    };
    interpreter.setProperty('changeBG', wrapper);
  }
}
