import { Injectable } from '@angular/core';
import { SpriteService } from './../sprite.service';
import { computeChildJson } from './utility-functions.service';

declare let Blockly: any;
declare let Interpreter: any;

@Injectable()
export class MoveWithSpeedService {
  private sp: SpriteService;
  public xml; String;

  constructor(activity = null) {
    this.xml = `<block type = "move_with_speed" id = "move_with_speed" >
                    <value name="steps">
                        <shadow type="number"> </shadow>
                    </value>
                    <value name="speed">
                        <shadow type="number"> </shadow>
                    </value>
                </block> `;
    this.sp = new SpriteService();
    const sprites = this.sp.spriteDropdown(activity);
    Blockly.Blocks['move_with_speed'] = {
      init: function () {
        this.appendDummyInput();
        this.appendValueInput('steps')
          .setCheck(['Number'])
          .appendField(new Blockly.FieldDropdown(sprites), 'sprite')
          .appendField(': move ')
          .appendField(new Blockly.FieldDropdown([
            ['left', 'L'],
            ['right', 'R'],
            ['up', 'U'],
            ['down', 'D']
          ]), 'direction')
          .appendField(' by ');
        this.appendDummyInput()
          .appendField('steps');
        this.appendValueInput('speed');
        this.appendDummyInput()
          .appendField('speed');
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(300);
        this.setTooltip('');
        this.setHelpUrl('');
      }
    };

    Blockly.JavaScript['move_with_speed'] = function (block) {
      const direction = block.getFieldValue('direction');
      let steps = Blockly.JavaScript.valueToCode(block, 'steps');
      let spriteIndex = block.getFieldValue('sprite');
      spriteIndex = spriteIndex.length === 0 ? -1 : spriteIndex;
      let speed = Blockly.JavaScript.valueToCode(block, 'speed');      
      const childJson = computeChildJson(block.childBlocks_);
      let json = {
        childJson,
        spriteIndex,
        direction,
        speed,
        hasAnimation: true,
        x: 0,
        y: 0,
        inputBlock: null
      }
      if (!Number.isNaN(Number(steps))) {
        steps = Math.abs(steps);
        switch (direction) {
          case 'L':
            json.x = -steps;
            break;
          case 'R':
            json.x = steps;
            break;
          case 'U':
            json.y = -steps;
            break;
          case 'D':
            json.y = steps;
            break;
          default:
            json.x = steps;
            break;
        }
      } else {
        json.inputBlock = {
          axis: 'x',
          isAdd: true,
          steps: steps
        }
        switch (direction) {
          case 'L':
            json.inputBlock.axis = 'x';
            json.inputBlock.isAdd = false;
            break;
          case 'R':
            json.inputBlock.axis = 'x';
            break;
          case 'U':
            json.inputBlock.axis = 'y';
            json.inputBlock.isAdd = false;
            break;
          case 'D':
            json.inputBlock.axis = 'y';
            break;
          default:
            json.inputBlock.axis = 'x';
            break;
        }
      }
      return `moveWithSpeed('${JSON.stringify(json)}');\n`;
    };
  }

  initInterpreter = (interpreter, scope, coordinatesJson, cb) => {
    const wrapper = function (obj, callback) {
      let json = JSON.parse(obj);
      const change = json.x ? 'x' : 'y';
      let animationTime = json[change] * coordinatesJson[`${change}AxisUnit`] * 3 / json.speed;
      const executeFn = (axis) => {
        let intrp = new Interpreter('');
        intrp.stateStack[0].scope = scope;
        intrp.appendCode(json.inputBlock.steps);
        intrp.run();
        const interval = setInterval(() => {
          if (intrp.value !== undefined) {
            json[json.inputBlock.axis] = json.inputBlock.isAdd ? Math.abs(intrp.value) : -1 * Math.abs(intrp.value);
            cb(json);
            setTimeout(() => {
              callback(json);
            }, animationTime);
            clearInterval(interval);
          }
        }, 10);
      }
      if (json.inputBlock) {
        executeFn(json.inputBlock.axis);
      } else {
        cb(json);
        setTimeout(() => {
          callback(json);
        }, animationTime);
      }
    };
    interpreter.setProperty(scope, 'moveWithSpeed', interpreter.createAsyncFunction(wrapper));
  }

}