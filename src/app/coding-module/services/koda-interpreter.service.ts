import { Injectable } from '@angular/core';

@Injectable()
export class KodaInterpreterService {
  private bundle;

  constructor() {
    this.bundle = {};
  }

  setProperty(methodName, methodRef, methodType) {
    if (!methodType) methodType = 'native';
    if (!this.bundle[methodType]) {
      this.bundle[methodType] = {};
    }
    this.bundle[methodType][methodName] = methodRef;
  }

  executeCommands

}
