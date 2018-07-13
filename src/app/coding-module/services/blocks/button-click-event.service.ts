import { Injectable } from '@angular/core';
import { SpriteService } from './../sprite.service';

declare let Blockly: any;

// let buttonData;

@Injectable()
export class ButtonClickEventService {
  private sp: SpriteService;
  private keyCodePair;
  private keyButtonIdPair;
  private instance;
  private myInterpreter;
  private feedback;
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
      const code = Blockly.JavaScript.statementToCode(block, 'button_clicked');
      const json = {
        method: 'buttonClickEventBind',
        type: 'event',
        params: {
          buttonIndex,
          linesOfCode: btoa(code)
        }
      }
      return `${JSON.stringify(json)};\n`;
    };
  }

  mouseClickEvent = e => {
    this.myInterpreter.executeCommands(this.keyCodePair[e.target.cacheKey], () => {
      this.feedback(this.keyCodePair[e.target.cacheKey].split(';\n'), this.keyButtonIdPair[e.target.cacheKey]);
    });
  }

  interpret = (interpreter, buttonData, feedback) => {
    const wrapper = ({ buttonIndex, linesOfCode }) => {
      this.myInterpreter = interpreter;
      this.instance = buttonData[buttonIndex].instance;
      this.keyButtonIdPair = { ...this.keyButtonIdPair, [`${this.instance.cacheKey}`]: buttonData[buttonIndex].id };
      this.keyCodePair = { ...this.keyCodePair, [`${this.instance.cacheKey}`]: atob(linesOfCode) };
      this.feedback = feedback;
      this.instance.on('mousedown', this.mouseClickEvent);
    };
    interpreter.setProperty('buttonClickEventBind', wrapper);
  }

  unregister = () => {
    if (this.instance) {
      this.instance.off('mousedown', this.mouseClickEvent);
    }  
  }

}
