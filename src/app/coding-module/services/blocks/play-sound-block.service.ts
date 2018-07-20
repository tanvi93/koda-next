import { Injectable } from '@angular/core';
import { SpriteService } from './../sprite.service';

declare let Blockly: any;

@Injectable()
export class PlaySoundBlockService {
  private sp: SpriteService;
  public xml; String;

  constructor(pageId = null) {
    this.sp = new SpriteService();
    const sounds = this.sp.soundDropdown(pageId);
    this.xml = `<block type="play_sound" id="play_sound"></block>`;
    Blockly.Blocks['play_sound'] = {
      init: function () {
        this.appendDummyInput()
          .appendField("play sound")
          .appendField(new Blockly.FieldDropdown(sounds), "track_name");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#7196F8');
        this.setTooltip("");
        this.setHelpUrl("");
      }
    };

    Blockly.JavaScript['play_sound'] = function (block) {
      let soundindex = block.getFieldValue('track_name');
      soundindex = soundindex.length === 0 ? 0 : soundindex;
      const json = {
        method: 'playSound',
        params: {
          soundindex
        }
      }
      return `${JSON.stringify(json)};\n`;
    };
  }

  interpret = (interpreter, cb) => {
    const wrapper = function (obj) {
      cb(obj);
    };
    interpreter.setProperty('playSound', wrapper);
  }

}
