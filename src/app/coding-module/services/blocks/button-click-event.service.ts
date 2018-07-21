import { Injectable } from '@angular/core';
import { SpriteService } from './../sprite.service';

declare let Blockly: any;

// let buttonData;

@Injectable()
export class ButtonClickEventService {
  private sp: SpriteService;
  private keyCodePair;
  private keyButtonIdPair;
  private instanceList;
  private myInterpreter;
  private feedback;
  public xml: String;

  constructor(pageId = null) {
    this.myInterpreter = [];
    this.instanceList = [];
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
    // console.log(this.keyCodePair[e.target.cacheKey]);
    // if (!this.keyCodePair[e.target.cacheKey].length) {
    //   return this.feedback('', this.keyButtonIdPair[e.target.cacheKey]);
    // }
    this.myInterpreter.executeCommands(this.keyCodePair[e.target.cacheKey], () => {
      this.feedback(this.keyCodePair[e.target.cacheKey].split(';\n'), this.keyButtonIdPair[e.target.cacheKey]);
    });
  }

  interpret = (interpreter, buttonData, feedback) => {
    const wrapper = ({ buttonIndex, linesOfCode }) => {
      if (!linesOfCode.length) return;
      this.myInterpreter = interpreter;
      const instance = buttonData[buttonIndex].instance;
      this.instanceList.push(instance);
      this.keyButtonIdPair = { ...this.keyButtonIdPair, [`${instance.cacheKey}`]: buttonData[buttonIndex].id };
      this.keyCodePair = { ...this.keyCodePair, [`${instance.cacheKey}`]: atob(linesOfCode) };
      this.feedback = feedback;
      instance.on('mousedown', this.mouseClickEvent);
    };
    interpreter.setProperty('buttonClickEventBind', wrapper);
  }

  unregister = () => {
    for (let i = 0; i < this.instanceList.length; i++) {
      this.instanceList[i].off('mousedown', this.mouseClickEvent);
    }  
  }

}
