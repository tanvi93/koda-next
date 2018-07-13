import { Injectable } from '@angular/core';

@Injectable()
export class EclipseService {
  private codes: Array<any>;
  private isSolarCorrect: boolean;
  private isLunarCorrect: boolean;

  constructor() { }

  validateCode(blockList, codes, sprites, spriteStatus, callback) {
    this.codes = codes;
    this.isSolarCorrect = false;
    this.isLunarCorrect = false;
    return callback('Click on Buttons!');
  }

  checkForSuccess() {
    if (this.isLunarCorrect && this.isSolarCorrect) {
      const successObj = {
        success: true,
        title: 'Kudos!',
        msg: 'You successfully used code blocks to move the monkey.'
      }
      return successObj;
    }
  }

  on_solar_eclipse_button(codes, sprites, spriteStatus, callback) {
    let coords: any = { };
    sprites.forEach(v => {
      const name = v.name.toLowerCase();
      if (v.currentOffset) {
        coords[name] = v.currentOffset;
      }
    });

    if (coords.earth.y !== 0 || coords.earth.x !== 10) {
      return callback('Earth should be in its right position')
    }

    //key is x coordinate and value is array of y coordinates
    const acceptableCoords = {
      '-8': [-3],
      '-7': [-3, -2],
      '-6': [-1],
      '-5': [0],
      '-4': [1],
      '-3': [1],
      '-2': [2]
    }
    if (!acceptableCoords.hasOwnProperty(`${coords.moon.x}`) || acceptableCoords[`${coords.moon.x}`].indexOf(coords.moon.y) === -1) {
      return callback('Moon should be on its orbit and in middle of Sun and Earth');
    } else {
      this.isSolarCorrect = true;
      const obj = this.checkForSuccess();
      if (obj) {
        return callback(obj);
      }
    }
  }

  on_lunar_eclipse_button(codes, sprites, spriteStatus, callback) {
    let coords: any = {};
    sprites.forEach(v => {
      const name = v.name.toLowerCase();
      if (v.currentOffset) {
        coords[name] = v.currentOffset;
      }
    });

    if (coords.earth.y !== 0 || coords.earth.x !== 10) {
      return callback('Earth should be in its right position')
    }
    
    //key is x coordinate and value is array of y coordinates
    const acceptableCoords = {
      19: [-2],
      20: [-2],
      21: [-1],
      22: [-1],
      23: [0],
      24: [0],
      25: [1],
      26: [2],
      27: [3, 4],
      28: [5]
    }
    if (!acceptableCoords.hasOwnProperty(`${coords.moon.x}`) || acceptableCoords[`${coords.moon.x}`].indexOf(coords.moon.y) === -1) {
      return callback('Moon should be on its orbit and in middle of Sun and Earth');
    } else {
      this.isLunarCorrect = true;
      const obj = this.checkForSuccess();
      if (obj) {
        return callback(obj);
      }
    }
  }

}
