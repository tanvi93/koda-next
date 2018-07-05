import { Injectable } from '@angular/core';

@Injectable()
export class KodaInterpreterService {
  private bundle;

  constructor() {
    this.bundle = {
      async: {},
      native: {},
      input: {}
    };
  }

  setProperty(methodName, methodRef, methodType) {
    if (!methodType) methodType = 'native';
    if (!this.bundle[methodType]) {
      console.log("ERROR: invalid method type. Valid types are: 'native', 'async', 'input'");
      return;
    }
    this.bundle[methodType][methodName] = methodRef;
  }

  executeCommands(codes, callback = null) {
    const arr = codes.split(';\n');
    if (arr[arr.length - 1] === "") arr.splice(arr.length - 1);
    const loop = (i) => {
      if (i === arr.length) return callback ? callback() : null;
      // console.log(arr.length, i);
      const v = JSON.parse(arr[i]);
      // console.log(performance.now());
      if (v.type && v.type === 'input') {
        return this.bundle.input[v.method](v.params);
      }
      // const params = v.params ? JSON.parse(v.params) : {};
      // console.log(v.method, this.bundle);
      if (this.bundle.async.hasOwnProperty(v.method)) {
        this.bundle.async[v.method](v.params, () => {
          loop(++i);
        });
      } else {
        this.bundle.native[v.method](v.params);
        loop(++i);
      }
    }
    return loop(0);
  }

}
