import { Injectable } from '@angular/core';
import { SpriteService } from './../sprite.service';

declare let Blockly: any;
declare let Interpreter: any;

// let buttonData;

@Injectable()
export class ButtonClickEventService {
  private sp: SpriteService;
  private scope;
  private code;
  private instance;
  private myInterpreter;
  public xml: String;

  constructor(pageId = null) {
    this.myInterpreter = [];
    let self = this;
    this.xml = `<block type="button_click_event" id="button_click_event"></block>`;
    this.sp = new SpriteService();
    const buttons = this.sp.buttonDropdown(pageId);
    // buttonData = this.sp.getAllButtons(pageId);
    Blockly.Blocks['button_click_event'] = {
      init: function () {
        this.appendDummyInput()
          .appendField("When")
          .appendField(new Blockly.FieldDropdown(buttons), "button")
          .appendField("clicked");
        this.appendStatementInput("button_clicked")
          .setCheck(null);
        this.setColour('#f69d16');
        this.setTooltip("");
        this.setHelpUrl("");
      }
    };

    Blockly.JavaScript['button_click_event'] = (block) => {
      block.startHat_ = true;
      let buttonIndex = block.getFieldValue('button');
      buttonIndex = buttonIndex.length === 0 ? 0 : buttonIndex;
      let codeTmp = Blockly.JavaScript.statementToCode(block, 'button_clicked');
      return `buttonClickEventBind('${buttonIndex}', "${btoa(codeTmp)}");\n`;
    };
  }

  mouseClickEvent = (code, e) => {
    this.myInterpreter.push(new Interpreter(''));
    let index = this.myInterpreter.length - 1;
    this.myInterpreter[index].stateStack[0].scope = this.scope;
    this.myInterpreter[index].appendCode(code);
    const runner = () => {
      if (this.myInterpreter && this.myInterpreter[index]) {
        const hasMore = this.myInterpreter[index].step();
        if (hasMore) {
          setTimeout(runner, 0);
        }
      }
    };
    runner();
  }

  initInterpreter = (interpreter, scope, buttonData) => {
    const wrapper = (buttonIndex, tmp) => {
      this.scope = scope;
      let code = atob(tmp);
      this.instance = buttonData[buttonIndex].instance;
      this.instance.on('mousedown', this.mouseClickEvent.bind(this, code));
    };
    interpreter.setProperty(scope, 'buttonClickEventBind', interpreter.createNativeFunction(wrapper));

  }

  unregister = () => {
    this.myInterpreter = [];
    if (this.instance) {
      this.instance.off('mousedown', this.mouseClickEvent);
    }  
  }

}
