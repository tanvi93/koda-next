import { Injectable } from '@angular/core';

declare let Blockly: any;

@Injectable()
export class MouseCoordinatesBlockService {
  private axis = 0;
  private coordiante = {};
  private stageDetails;
  public xml: String;

  constructor() {
    let self = this;
    this.xml = '<block type="mouse_coordinates" id="mouse_coordinates"></block>';
    Blockly.Blocks['mouse_coordinates'] = {
      init: function () {
        this.appendDummyInput()
          .appendField("mouse :")
          .appendField(new Blockly.FieldDropdown([
            ["x", "0"],
            ["y", "1"]
          ]), "axis");
        this.setInputsInline(true);
        this.setOutput(true);
        this.setColour(0);
        this.setTooltip("");
        this.setHelpUrl("");
      }
    };

    Blockly.JavaScript['mouse_coordinates'] = function (block) {
      const axis = block.getFieldValue('axis');
      const json = {
        method: 'getMouseCoordinate',
        type: 'input',
        params: {
          axis
        }
      }
      return [JSON.stringify(json)];
    }
  }

  mouseEvent = event => {
    this.coordiante = {
      0: event.offsetX,
      1: event.offsetY
    }
  }

  interpret = (interpreter, coordinatesJson) => {
    this.coordiante = { 0: 0, 1: 0 };
    let div: any = document.getElementById('game');
    div.addEventListener('mousemove', this.mouseEvent);
    const wrapper = ({ axis }) => {
      div.addEventListener('mousemove', this.mouseEvent);
      setTimeout(() => {
        div.removeEventListener('mousemove', this.mouseEvent);
      }, 10);
      if (axis === '1') {
        return Math.round((coordinatesJson['totalY'] / 2) - (this.coordiante['1'] / coordinatesJson.yAxisUnit));
      } else {
        return Math.round((this.coordiante['0'] / coordinatesJson.xAxisUnit) - (coordinatesJson['totalX'] / 2));
      }
    };
    interpreter.setProperty('getMouseCoordinate', wrapper, 'input');

  }

}