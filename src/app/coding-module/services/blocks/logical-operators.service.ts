import { Injectable } from '@angular/core';
import { NumberBlockService } from './number-block.service';

declare let Blockly: any;

@Injectable()
export class LogicalOperatorsService {
  public xml: String;
  private numberBlock: NumberBlockService;

  constructor() {
    this.numberBlock = new NumberBlockService();
    this.xml = `<block type="logical_operators" id="logical_operators"></block>`;

    Blockly.Blocks['logical_operators'] = {
      init: function () {
        this.appendDummyInput();
        this.appendValueInput("input1")
        this.appendDummyInput()
        this.appendValueInput("input2")
          .appendField(new Blockly.FieldDropdown([
            ["AND", "0"],
            ["OR", "1"]
          ]), "operator")
        this.setInputsInline(true);
        this.setOutput(true, "Boolean");
        this.setColour(190);
        this.setTooltip("");
        this.setHelpUrl("");
      }
    };

    Blockly.JavaScript['logical_operators'] = function (block) {
      const operator = block.getFieldValue('operator');
      const input1 = Blockly.JavaScript.valueToCode(block, 'input1');
      const input2 = Blockly.JavaScript.valueToCode(block, 'input2');
      let json = {
        method: 'getLogicalResult',
        type: 'input',
        params: {
          input1,
          input2,
          operator
        }
      }
      return [JSON.stringify(json)];
    };

  }

  interpret = interpreter => {
    let operatorArr = ['and', 'or'];
    const wrapper = function ({ input1, input2, operator }) {
      if (isNaN(Number(input1))) {
        input1 = interpreter.executeCommands(input1);
      }
      if (isNaN(Number(input2))) {
        input2 = interpreter.executeCommands(input2);
      }
      switch (operatorArr[operator]) {
        case "and":
          return input1 && input2;
        case "or":
          return input1 || input2;
      }
    };
    interpreter.setProperty('getLogicalResult', wrapper, 'input');
  }

}
