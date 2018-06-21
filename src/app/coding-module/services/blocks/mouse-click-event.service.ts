import { Injectable } from '@angular/core';
import { SpriteService } from './../sprite.service';

declare let Blockly: any;
declare let Interpreter: any;

let code, buttonData;

@Injectable()
export class MouseClickEventService {
  public xml: String;
  private scope;
  private code;
  private myInterpreter;

  constructor(pageId = null) {
    let self = this;
    this.myInterpreter = [];
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
      return `zoneClickEventBind("${btoa(code)}");\n`;
    };
  }

  mouseClickEvent = e => {
    this.myInterpreter.push(new Interpreter(''));
    let index = this.myInterpreter.length - 1;
    this.myInterpreter[index].stateStack[0].scope = this.scope;
    this.myInterpreter[index].appendCode(this.code);
    const runner = function () {
      if (this.myInterpreter[index]) {
        const hasMore = this.myInterpreter[index].step();
        if (hasMore) {
          setTimeout(runner, 0);
        }
      }
    };
    runner();
  }

  initInterpreter = (interpreter, scope) => {
    const wrapper = (cc) => {
      this.scope = scope;
      this.code = atob(cc);
      document.getElementById('game').addEventListener('click', this.mouseClickEvent);
    };
    interpreter.setProperty(scope, 'zoneClickEventBind', interpreter.createNativeFunction(wrapper));
  }

  unregister = () => {
    this.myInterpreter = [];
    document.getElementById('game').removeEventListener("click", this.mouseClickEvent);
  }

}