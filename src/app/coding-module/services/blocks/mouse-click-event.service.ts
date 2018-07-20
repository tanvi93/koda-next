import { Injectable } from '@angular/core';
import { SpriteService } from './../sprite.service';

declare let Blockly: any;


let code, buttonData;

@Injectable()
export class MouseClickEventService {
  public xml: String;
  private scope;
  private code;
  private interpreter;

  constructor(pageId = null) {
    let self = this;
    this.interpreter = [];
    this.xml = `<block type="mouse_click_event" id="mouse_click_event"></block>`;

    Blockly.Blocks['mouse_click_event'] = {
      init: function () {
        this.appendDummyInput()
          .appendField("When mouse clicked");
        this.appendStatementInput("mouse_clicked")
          .setCheck(null);
        this.setColour('#f69d16');
        this.setTooltip("");
        this.setHelpUrl("");
      }
    };

    Blockly.JavaScript['mouse_click_event'] = (block) => {
      block.startHat_ = true;
      code = Blockly.JavaScript.statementToCode(block, 'mouse_clicked');
      const json = {
        method: 'zoneClickEventBind',
        type: 'event',
        params: {
          linesOfCode: code
        }
      }
      return `${JSON.stringify(json)};\n`
    };
  }

  mouseClickEvent = e => {
    this.interpreter.executeCommands(this.code);
  }

  interpret = interpreter => {
    const wrapper = ({ linesOfCode }) => {
      if (!linesOfCode.length) return;
      this.interpreter = interpreter;
      this.code = linesOfCode;
      document.getElementById('game').addEventListener('click', this.mouseClickEvent);
    };
    interpreter.setProperty('zoneClickEventBind', wrapper);
  }

  unregister = () => {
    this.interpreter = null;
    if (document.getElementById('game')) {
      document.getElementById('game').removeEventListener("click", this.mouseClickEvent);
    }
  }

}