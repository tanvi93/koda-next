import { Injectable } from '@angular/core';

@Injectable()
export class KodaInterpreterService {
  private bundle;
  private isStopExecution: boolean;

  constructor() {
    this.bundle = {
      async: {},
      native: {},
      input: {}
    };
    this.isStopExecution = true;
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
    this.isStopExecution = false;
    const loop = (i) => {
      if (this.isStopExecution) return null;
      if (i === arr.length) return callback ? callback() : null;
      let v = null;
      try {
        v = JSON.parse(arr[i]);
      } catch (e) {
        eval(arr[i]);
        return callback ? callback() : null;
      }
      if (v.type && v.type === 'input') {
        return this.bundle.input[v.method](v.params);
      }
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

  stopExecution() {
    this.isStopExecution = true;
  }

}
