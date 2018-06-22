import { Injectable } from '@angular/core';
import { NumberBlockService } from './number-block.service';

declare let Blockly: any;

@Injectable()
export class RepeatPredefinedService {
  public xml: String;
  private numberBlock: NumberBlockService;

  constructor() {
    this.numberBlock = new NumberBlockService();
    this.xml = `<block type = "controls_repeat_ext" id="controls_repeat_ext" colour="70">
                    <value name="TIMES" >
                      ${this.numberBlock.xml}
                    </value>
                </block>`;
    
  }
}
