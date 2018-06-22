import { Injectable } from '@angular/core';

declare let Blockly: any;

@Injectable()
export class RepeatUntillBlockService {
  public xml: String;

  constructor() {
    this.xml = `<block type="controls_whileUntil" id="controls_whileUntil"></block>`;
  }
}