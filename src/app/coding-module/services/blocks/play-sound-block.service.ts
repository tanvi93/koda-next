import { Injectable } from '@angular/core';

declare let Blockly: any;

@Injectable()
export class PlaySoundBlockService {

  public xml; String;

  constructor() {
    this.xml = `<block type="play_sound" id="play_sound"></block>`;
    Blockly.Blocks['play_sound'] = {
      init: function () {
        this.appendDummyInput()
          .appendField("play sound")
          .appendField(new Blockly.FieldDropdown([['Choose sound', '1']]), "track_name");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#7196F8');
        this.setTooltip("");
        this.setHelpUrl("");
      }
    };

    Blockly.JavaScript['play_sound'] = function (block) {
    };
  }

}
