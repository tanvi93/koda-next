import { Injectable } from '@angular/core';
import { blocksData } from './../../data/coding';
import { ThrowFruitsForeverService } from './feedback/throw-fruits-forever.service';

@Injectable()
export class CompilerService {
  private mm2_6_c2: ThrowFruitsForeverService;

  constructor() {
    this.mm2_6_c2 = new ThrowFruitsForeverService();
  }

  compileCode(code, workspacePlayground, pageId, callback) {
    if (!code.length) {
      return callback(blocksData[pageId].noBlockOnWorkspace);
    }
    if (workspacePlayground.topBlocks_.length > 1 && !blocksData[pageId].isParallel) {
      return callback('You seem to have disconnected blocks lying on your Code Zone. Connect the blocks that are required. Delete the rest.');
    }
    if (code.indexOf('spriteIndex":"-1"') !== -1 || code.indexOf("buttonClickEventBind('-1'") !== -1 || code.indexOf("charClickEventBind('-1'") !== -1 || code.indexOf("keydownEventBind('-1'") !== -1) {
      return callback('Make sure that you have chosen an option for all the dropdowns in your code.');
    }
    if (this[`${pageId}`]) {
      let list = code.split(';\n');
      list.splice(list.length - 1, 1);
      let blockList = list.map(v => {
        return v.split('(')[0];
      });
      this[`${pageId}`].compileCode(blockList, list, workspacePlayground, pageId, callback);
    } else {
      return callback(null);
    }
  }

}
