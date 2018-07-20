import { Injectable } from '@angular/core';

declare let Blockly: any;


let thread;

@Injectable()
export class KeypressEventService {
  public xml: String;
  private keyCodePair;
  private keyNamePair;
  private scope;
  private lock;
  private feedback;
  private interpreter;

  constructor() {
    let myBlock = {};
    let self = this;
    this.interpreter = null;
    this.xml = `<block type="when_key_pressed" id="when_key_pressed"></block>`;
    Blockly.Blocks['when_key_pressed'] = {
      init: function () {
        this.appendDummyInput()
          .appendField("when")
          .appendField(new Blockly.FieldDropdown([
            ["Choose a key...", "-1"],
            ["space_bar", "32"],
            ["up_arrow", "38"],
            ["down_arrow", "40"],
            ["left_arrow", "37"],
            ["right_arrow", "39"]
          ]), "keys")
          .appendField("pressed");
        this.appendStatementInput("when_key_pressed")
          .setCheck(null);
        this.setColour('#f69d16');
        this.setTooltip('YoYo!!');
        this.setHelpUrl('');
        myBlock[this.id] = this;
      },

      onchange: function (event) {
        if (event.blockId && myBlock[event.blockId] && event.name === 'keys') {
          if (self.keyCodePair && self.keyCodePair[event.oldValue]) {
            delete self.keyCodePair[event.oldValue];
          }
          window.removeEventListener("keydown", self.keydownEvent);    
        }
      }
    };

    Blockly.JavaScript['when_key_pressed'] = function (block) {
      block.startHat = true;
      const dropdown_keys = Number(block.getFieldValue('keys'));
      let code = Blockly.JavaScript.statementToCode(block, 'when_key_pressed');
      const json = {
        method: 'keydownEventBind',
        type: 'event',
        params: {
          dropdown_keys,
          linesOfCode: btoa(code)
        }
      }
      return `${JSON.stringify(json)};\n`;
    };
  }

  keydownEvent = event => {
    if (this.keyCodePair[event.which] && !this.lock) {
      this.lock = true;
      this.interpreter.executeCommands(this.keyCodePair[event.which], () => {
        this.lock = false;
        this.feedback(this.keyCodePair[event.which].split(';\n'), `${this.keyNamePair[event.which]}_keypress`);
      });
    }
  }

  interpret = (interpreter, feedback) => {
    this.keyNamePair = {
      32: 'space_bar',
      38: 'up_arrow',
      40: 'down_arrow',
      37: 'left_arrow',
      39: 'right_arrow',
    }
    const wrapper = ({ dropdown_keys, linesOfCode }) => {
      if (!linesOfCode.length) return;
      this.lock = false;
      this.keyCodePair = { ...this.keyCodePair, [`${dropdown_keys}`]: atob(linesOfCode) };
      this.feedback = feedback;
      this.interpreter = interpreter;
      window.addEventListener("keydown", this.keydownEvent);
    };
    interpreter.setProperty('keydownEventBind', wrapper);
  }

  unregister = () => {
    this.interpreter = null;
    window.removeEventListener("keydown", this.keydownEvent);
  }

}



