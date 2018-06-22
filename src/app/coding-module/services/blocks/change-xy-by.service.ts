import { Injectable } from '@angular/core';
import { SpriteService } from './../sprite.service';

declare let Blockly: any;

@Injectable()
export class ChangeXyByService {
  private sp: SpriteService;
  public xml; String;

  constructor(activity = null) {
    this.xml = `<block type="change_xy_by" id="change_xy_by">
                  <value name="steps">
                    <shadow type="number"></shadow>
                  </value>
                </block>`;

    this.sp = new SpriteService();
    const sprites = this.sp.spriteDropdown(activity);

    Blockly.Blocks['change_xy_by'] = {
      init: function () {
        this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown(sprites), "sprite")
          .appendField(": change");
        this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown([
            ["x", "x"],
            ["y", "y"]
          ]), "axis")
          .appendField("by");
        this.appendValueInput("steps")
          .setCheck("Number");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(300);
        this.setTooltip("");
        this.setHelpUrl("");
      }
    };

    Blockly.JavaScript['change_xy_by'] = function (block) {
      const axis = block.getFieldValue('axis');
      const steps = Number(Blockly.JavaScript.valueToCode(block, 'steps')) * 10;
      let spriteIndex = block.getFieldValue('sprite');
      spriteIndex = spriteIndex.length === 0 ? -1 : spriteIndex;
      let json = {
        spriteIndex,
        hasAnimation: true,
        x: axis === 'x' ? steps : 0,
        y: axis === 'y' ? steps : 0
      }
      return `moveTo('${JSON.stringify(json)}');\n`;
    }
  }

}
