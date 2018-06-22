import { Injectable } from '@angular/core';
import { SpriteService } from './../sprite.service';
import { NumberBlockService } from './number-block.service';
import { computeChildJson } from './utility-functions.service';

declare let Blockly: any;
declare let Interpreter: any;


@Injectable()
export class GoToCoordsService {
  private sp: SpriteService;
  private numberBlock: NumberBlockService;
  public xml: String;

  constructor(activity = null) {
    this.sp = new SpriteService();
    this.numberBlock = new NumberBlockService();
    this.xml = `<block type = "go_to" id = "go_to" >
                    <value name="input_x" >
                        ${this.numberBlock.xml}
                    </value>
                    <value name = "input_y" >
                        ${this.numberBlock.xml}
                    </value>
                </block>`;
    const sprites = this.sp.spriteDropdown(activity);
    Blockly.Blocks['go_to'] = {
      init: function () {
        this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown(sprites), 'sprite');
        this.appendValueInput('input_x')
          .setCheck('Number')
          .appendField(': go to x');
        this.appendDummyInput()
          .appendField('y');
        this.appendValueInput('input_y')
          .setCheck('Number');
        this.setInputsInline(true, 'new');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(300);
        this.setTooltip('');
        this.setHelpUrl('');
      }
    };

    Blockly.JavaScript['go_to'] = function (block) {
      const input_x = Blockly.JavaScript.valueToCode(block, 'input_x');
      const input_y = Blockly.JavaScript.valueToCode(block, 'input_y');
      let spriteIndex = block.getFieldValue('sprite');
      spriteIndex = spriteIndex.length === 0 ? -1 : spriteIndex;
      const childJson = computeChildJson(block.childBlocks_);
      const json = {
        childJson,
        x: input_x,
        y: input_y,
        spriteIndex
      }
      return `goTo('${JSON.stringify(json)}');\n`;
    };
  }

  initInterpreter = (interpreter, scope, cb) => {
    const wrapper = function (obj, callback) {
      let json = JSON.parse(obj);
      const executeFn = (axis) => {
        let intrp = new Interpreter('');
        intrp.stateStack[0].scope = scope;
        intrp.appendCode(json[axis ? 'y' : 'x']);
        intrp.run();
        const interval = setInterval(() => {
          if (intrp.value !== undefined) {
            json[axis ? 'y' : 'x'] = intrp.value;
            if (Number.isNaN(Number(json[axis ? 'x' : 'y']))) {
              clearInterval(interval);
              return executeFn(!axis);
            }
            clearInterval(interval);
            cb(json);
            callback();
          }
        }, 10);
      }
      if (Number.isNaN(Number(json.x))) {
        executeFn(0);
      } else if (Number.isNaN(Number(json.y))) {
        executeFn(1);
      } else {
        cb(json);
        callback(obj);
      }
    };
    interpreter.setProperty(scope, 'goTo', interpreter.createAsyncFunction(wrapper));
  }

}