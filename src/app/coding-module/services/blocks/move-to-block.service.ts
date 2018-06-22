import { Injectable } from '@angular/core';
import { SpriteService } from './../sprite.service';
import { NumberBlockService } from './number-block.service';

declare let Blockly: any;
declare let Interpreter: any;

let spriteData;

@Injectable()
export class MoveToBlockService {
  private sp: SpriteService;
  public xml: String;
  private numberBlock: NumberBlockService;

  constructor(activity = null) {
    this.sp = new SpriteService();
    spriteData = this.sp.getAllSprites(activity);
    this.numberBlock = new NumberBlockService();

    this.xml = `<block type="move_to" id="move_to">
        <value name="input_x">
           ${this.numberBlock.xml}
        </value>
        <value name="input_y">
           ${this.numberBlock.xml}
        </value>
      </block>`;

    const sprites = this.sp.spriteDropdown(activity);
    Blockly.Blocks['move_to'] = {
      init: function () {
        this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown(sprites), 'sprite')
        this.appendValueInput('input_x')
          .setCheck('Number')
          .appendField(': move to x');
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

    Blockly.JavaScript['move_to'] = function (block) {
      const input_x = Blockly.JavaScript.valueToCode(block, 'input_x');
      const input_y = Blockly.JavaScript.valueToCode(block, 'input_y');
      let spriteIndex = block.getFieldValue('sprite');
      spriteIndex = spriteIndex.length === 0 ? -1 : spriteIndex;
      const json = {
        hasAnimation: true,
        x: input_x,
        y: input_y,
        spriteIndex
      }
      return `moveTo('${JSON.stringify(json)}');\n`;
    };
  }

  initInterpreter = (interpreter, scope, sprites, coordinatesJson, cb) => {
    // Ensure function name does not conflict with variable names.
    const wrapper = (obj, callback) => {
      let json = JSON.parse(obj);
      const currentPosition = sprites[json.spriteIndex].currentOffset ? sprites[json.spriteIndex].currentOffset : sprites[json.spriteIndex].initialOffset;
      let animationTime = 500;
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
            animationTime = Math.max(Math.abs(currentPosition.x - json.x) * coordinatesJson.xAxisUnit, Math.abs(currentPosition.y - json.y) * coordinatesJson.yAxisUnit) * 3;
            cb(json);
            setTimeout(() => {
              callback(json);
            }, animationTime);
          }
        }, 10);
      }
      if (Number.isNaN(Number(json.x))) {
        executeFn(0);
      } else if (Number.isNaN(Number(json.y))) {
        executeFn(1);
      } else {
        cb(json);
        animationTime = Math.max(Math.abs(currentPosition.x - json.x) * coordinatesJson.xAxisUnit, Math.abs(currentPosition.y - json.y) * coordinatesJson.yAxisUnit) * 3;
        setTimeout(() => {
          callback(json);
        }, animationTime);
      }  
    };
    interpreter.setProperty(scope, 'moveTo', interpreter.createAsyncFunction(wrapper));
  }
}
