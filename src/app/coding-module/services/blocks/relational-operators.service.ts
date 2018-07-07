import { Injectable } from '@angular/core';
import { NumberBlockService } from './number-block.service';

declare let Blockly: any;

@Injectable()
export class RelationalOperatorsService {
  public xml: String;

  private numberBlock: NumberBlockService;

  constructor() {
    this.numberBlock = new NumberBlockService();
    this.xml = `<block type="relational_operators" id="relational_operators">
    <value name="input1">
        ${this.numberBlock.xml}
      </value>
      <value name="input2">
        ${this.numberBlock.xml}
      </value></block>`;

    Blockly.Blocks['relational_operators'] = {
      init: function () {
        this.appendDummyInput();
        this.appendValueInput("input1")
          .setCheck("Number");
        this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown([
            ["=", "0"],
            ["\u2260", "1"],
            ["<", "2"],
            ["\u2264", "3"],
            [">", "4"],
            ["\u2265", "5"]
          ]), "operator");
        this.appendValueInput("input2")
          .setCheck("Number");
        this.setInputsInline(true);
        this.setOutput(true);
        this.setColour(190);
        this.setTooltip("");
        this.setHelpUrl("");
      }
    };

    Blockly.JavaScript['relational_operators'] = function (block) {
      const operator = block.getFieldValue('operator');
      const input1 = Blockly.JavaScript.valueToCode(block, 'input1');
      const input2 = Blockly.JavaScript.valueToCode(block, 'input2');
      let json = {
        method: 'getRelationalResult',
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
    let operatorArr = ['eq', 'neq', 'lt', 'lte', 'gt', 'gte'];
    const wrapper = function ({ input1, input2, operator }) {
      if (isNaN(Number(input1))) {
        input1 = interpreter.executeCommands(input1);
      }
      if (isNaN(Number(input2))) {
        input2 = interpreter.executeCommands(input2);
      }
      input1 = parseFloat(input1);
      input2 = parseFloat(input2);
      switch (operatorArr[operator]) {
        case "eq":
          return input1 === input2;
        case "neq":
          return input1 !== input2;
        case "lt":
          return input1 < input2;
        case "lte":
          return input1 <= input2;
        case "gt":
          return input1 > input2;
        case "gte":
          return input1 >= input2;
      }
    };
    interpreter.setProperty('getRelationalResult', wrapper, 'input');
  }

}