import { Injectable } from '@angular/core';

declare let Blockly: any;
declare let Interpreter: any;

let thread;

@Injectable()
export class KeypressEventService {
  public xml: String;
  private keyCodePair;
  private scope;
  private lock;
  private feedback;
  private myInterpreter;

  constructor() {
    let myBlock = {};
    let self = this;
    this.myInterpreter = [];
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
      return `keydownEventBind('${dropdown_keys}', "${btoa(code)}");\n`
    };
  }

  keydownEvent = event => {
    if (this.keyCodePair[event.which] && !this.lock) {
      this.lock = true;
      this.myInterpreter.push(new Interpreter(''));
      let index = this.myInterpreter.length - 1;
      this.myInterpreter[index].stateStack[0].scope = this.scope;
      this.myInterpreter[index].appendCode(this.keyCodePair[event.which]);
      const runner = () => {
        if (this.myInterpreter[index]) {
          const hasMore = this.myInterpreter[index].step();
          if (hasMore) {
            // Execution is currently blocked by some async call.
            // Try again later.
            setTimeout(runner, 0);
          } else {
            this.lock = false;
            this.feedback();
          }
        }
      };
      runner();
    }
  }

  initInterpreter = (interpreter, scope, feedback) => {
    const wrapper = (dropdown_keys, code) => {
      this.lock = false;
      this.keyCodePair = { ...this.keyCodePair, [`${dropdown_keys}`]: atob(code) };
      this.scope = scope;
      this.feedback = feedback;
      window.addEventListener("keydown", this.keydownEvent);
    };
    interpreter.setProperty(scope, 'keydownEventBind', interpreter.createNativeFunction(wrapper));

  }

  unregister = () => {
    this.myInterpreter = [];
    window.removeEventListener("keydown", this.keydownEvent);
  }

}



