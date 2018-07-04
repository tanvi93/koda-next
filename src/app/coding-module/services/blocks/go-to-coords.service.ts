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
  private blocks;

  constructor(activity = null) {
    this.blocks = [];
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

    Blockly.JavaScript['go_to'] = (block) => {
      this.blocks.push(block);
      const input_x = Blockly.JavaScript.valueToCode(block, 'input_x');
      const input_y = Blockly.JavaScript.valueToCode(block, 'input_y');
      let spriteIndex = block.getFieldValue('sprite');
      spriteIndex = spriteIndex.length === 0 ? -1 : spriteIndex;
      const childJson = computeChildJson(block.childBlocks_);
      const params = {
        childJson,
        x: input_x,
        y: input_y,
        spriteIndex,
        blockIndex: this.blocks.length - 1
      }
      const json = {
        method: 'goTo',
        params
      }
      return `${JSON.stringify(json)};\n`;
    };
  }

  interpret = (interpreter, cb) => {
    const wrapper = (json, callback) => {
      if (this.blocks) {
        this.blocks[json.blockIndex].addSelect();
      } 
      const executeFn = (axis) => {
        json[axis ? 'y' : 'x'] = interpreter.executeCommands(json[axis ? 'y' : 'x']);
        if (Number.isNaN(Number(json[axis ? 'x' : 'y']))) {
          return executeFn(!axis);
        }
        cb(json);
        setTimeout(() => {
          if (this.blocks) {
            this.blocks[json.blockIndex].removeSelect();
          }
          callback();
        }, 1);
      }
      if (Number.isNaN(Number(json.x))) {
        executeFn(0);
      } else if (Number.isNaN(Number(json.y))) {
        executeFn(1);
      } else {
        cb(json);
        setTimeout(() => {
          if (this.blocks) {
            this.blocks[json.blockIndex].removeSelect();
          }
          callback();
        }, 5);
      }
    };
    interpreter.setProperty('goTo', wrapper, 'async');
  }

}