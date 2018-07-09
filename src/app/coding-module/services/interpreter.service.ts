import { Injectable } from '@angular/core';
import { SayBlockService } from './blocks/say-block.service';
import { ShowCoordsService } from './blocks/show-coords.service';
import { GoToCoordsService } from './blocks/go-to-coords.service';
import { MoveByBlockService } from './blocks/move-by-block.service';
import { MoveToBlockService } from './blocks/move-to-block.service';
import { ChangeLookBlockService } from './blocks/change-look-block.service';
import { ChangeXyByService } from './blocks/change-xy-by.service';
import { SpriteXyService } from './blocks/sprite-xy.service';
import { VariableBlockService } from './blocks/variable-block.service';
import { SpriteHideShowService } from './blocks/sprite-hide-show.service';
import { AllHideShowService } from './blocks/all-hide-show.service';
import { NextAvatarService } from './blocks/next-avatar.service';
import { ChangeBackgroundService } from './blocks/change-background.service';
import { WaitSecBlockService } from './blocks/wait-sec-block.service';
import { RandomNumberBlockService } from './blocks/random-number-block.service';
import { ArithmeticOperatorsService } from './blocks/arithmetic-operators.service';
import { RepeatPredefinedService } from './blocks/repeat-predefined.service';
import { LogicalOperatorsService } from './blocks/logical-operators.service';
import { BooleanBlockService } from './blocks/boolean-block.service';
import { NotOperatorService } from './blocks/not-operator.service';
import { RelationalOperatorsService } from './blocks/relational-operators.service';
import { KeypressEventService } from './blocks/keypress-event.service';
import { GetVarBlockService } from './blocks/get-var-block.service';
import { SetVarBlockService } from './blocks/set-var-block.service';
import { HideShowVarBlockService } from './blocks/hide-show-var-block.service';
import { ChangeVarBlockService } from './blocks/change-var-block.service';
import { HideShowButtonService } from './blocks/hide-show-button.service';
import { ChangeLookButtonService } from './blocks/change-look-button.service';
import { CharacterClickEventService } from './blocks/character-click-event.service';
import { ButtonClickEventService } from './blocks/button-click-event.service';
import { RepeatForeverService } from './blocks/repeat-forever.service';
import { MouseClickEventService } from './blocks/mouse-click-event.service';
import { IfBlockService } from './blocks/if-block.service';
import { IfElseBlockService } from './blocks/if-else-block.service';
import { TouchEventService } from './blocks/touch-event.service';
import { RepeatUntillBlockService } from './blocks/repeat-untill-block.service';
import { MouseCoordinatesBlockService } from './blocks/mouse-coordinates-block.service';
import { PlaySoundBlockService } from './blocks/play-sound-block.service';
import { RotateSpriteBlockService } from './blocks/rotate-sprite-block.service';
import { FlipSpriteBlockService } from './blocks/flip-sprite-block.service';
import { MoveWithSpeedService } from './blocks/move-with-speed.service';
import { ShowHideAllButtonsService } from './blocks/show-hide-all-buttons.service';
  
import { WorkspaceOnChangeService } from './workspace-on-change.service';
import { CompilerService } from './compiler.service';
import { KodaInterpreterService } from './koda-interpreter.service';

declare var Blockly: any;
declare let Interpreter: any;


@Injectable()
export class InterpreterService {
  private xml: any;
  private myInterpreter: any;

  private say: any;
  private showCoordinates: any;
  private goTo: GoToCoordsService;
  private changeLook: any;
  private nextLook: any;
  private changeXyBy: any;
  private coordinates: SpriteXyService;
  private changeBG: any;
  private variableBlocks: any;
  private showHideChar: any;
  private showHideAllChar: any;
  private moveBy: any;
  private moveTo: any;
  private wait: any;
  private variableXml: any;
  private randomNumber: any;
  private arithmeticOperator: any;
  private repeat: any;
  private logicalOperator: LogicalOperatorsService;
  private trueFalse: BooleanBlockService;
  private notOperator: NotOperatorService;
  private relationalOperator: RelationalOperatorsService;
  private whenKeyPressed: KeypressEventService;
  private whenCharacterClicked: CharacterClickEventService;
  private getVar: GetVarBlockService;
  private setVar: SetVarBlockService;
  private hideShowVar: HideShowVarBlockService;
  private changeVar: ChangeVarBlockService;
  private showHideButton: HideShowButtonService;
  private changeButton: ChangeLookButtonService;
  private whenButtonClicked: ButtonClickEventService;
  private repeatForever: RepeatForeverService;
  private repeatUntil: RepeatUntillBlockService;
  private whenMouseClicked: MouseClickEventService;
  private ifBlock: IfBlockService;
  private ifElseBlock: IfElseBlockService;
  private characterTouch: TouchEventService;
  private createVariable: any;
  private mouseCoordinates: MouseCoordinatesBlockService;
  private playSound: PlaySoundBlockService;
  private rotateSprite: RotateSpriteBlockService;
  private flipSprite: FlipSpriteBlockService;
  private moveWithSpeed: MoveWithSpeedService;
  private showHideAllButtons: ShowHideAllButtonsService;
  private rawCodes: String;
  private wsOnChange: any;
  private compiler: CompilerService;
  private kodaInterpreter: KodaInterpreterService;

  private blocksList: Array<String>;

  constructor() {
    workspacePlayground = null;
    this.kodaInterpreter = new KodaInterpreterService();
    this.createBlockInstances();
    this.createVariable = {
      xml: `<button text="Create variable" callbackKey="open"> </button>`
    }
    this.getVar = new GetVarBlockService();
    this.setVar = new SetVarBlockService();
    this.changeVar = new ChangeVarBlockService();
    this.hideShowVar = new HideShowVarBlockService();
    this.compiler = new CompilerService();
    this.rawCodes = null;
    this.myInterpreter = null;
  }

  createBlockInstances(activityname = null, pageId = null) {
    this.say = new SayBlockService(activityname);
    this.showCoordinates = new ShowCoordsService(activityname);
    this.goTo = new GoToCoordsService(activityname);
    this.changeLook = new ChangeLookBlockService(activityname);
    this.nextLook = new NextAvatarService(activityname);
    this.changeXyBy = new ChangeXyByService(activityname);
    this.coordinates = new SpriteXyService(activityname);
    this.changeBG = new ChangeBackgroundService(pageId);
    this.variableBlocks = new VariableBlockService(pageId);
    this.showHideChar = new SpriteHideShowService(activityname);
    this.showHideAllChar = new AllHideShowService();
    this.moveBy = new MoveByBlockService(activityname);
    this.moveTo = new MoveToBlockService(activityname);
    this.wait = new WaitSecBlockService();
    this.randomNumber = new RandomNumberBlockService();
    this.arithmeticOperator = new ArithmeticOperatorsService();
    this.repeat = new RepeatPredefinedService();
    this.repeatForever = new RepeatForeverService();
    this.repeatUntil = new RepeatUntillBlockService();
    this.logicalOperator = new LogicalOperatorsService();
    this.trueFalse = new BooleanBlockService();
    this.relationalOperator = new RelationalOperatorsService();
    this.notOperator = new NotOperatorService();
    this.whenKeyPressed = new KeypressEventService();
    this.whenCharacterClicked = new CharacterClickEventService(activityname);
    this.showHideButton = new HideShowButtonService(pageId);
    this.changeButton = new ChangeLookButtonService(pageId);
    this.whenButtonClicked = new ButtonClickEventService(pageId);
    this.repeatForever = new RepeatForeverService();
    this.whenMouseClicked = new MouseClickEventService();
    this.ifBlock = new IfBlockService();
    this.ifElseBlock = new IfElseBlockService();
    this.characterTouch = new TouchEventService(activityname);
    this.wsOnChange = new WorkspaceOnChangeService(pageId);
    this.mouseCoordinates = new MouseCoordinatesBlockService();
    this.playSound = new PlaySoundBlockService();
    this.rotateSprite = new RotateSpriteBlockService(activityname);
    this.flipSprite = new FlipSpriteBlockService(activityname);
    this.moveWithSpeed = new MoveWithSpeedService(activityname);
    this.showHideAllButtons = new ShowHideAllButtonsService();
  }

  getToolbox = (data = null) => {
    if (data.categories.length === 1) {
      this.xml = data.categories[0].block_list.map(v => {
        return this[`${v}`].xml;
      });
      this.xml = this.xml.toString().replace(/,/g, '');
    } else {
      this.xml = data.categories.map(v => {
        let blocksXML = v.block_list.map(u => {
          return this[u].xml;
        });
        blocksXML = blocksXML.toString().replace(/,/g, '');
        return `<category name="${v.name}" colour="${v.colour}">
              ${blocksXML}          
            </category>`;
      });
    } 
    return (
      `<xml id="toolbox" style="position: absolute;">
              ${this.xml}
        </xml>`);
  }

  getInitialXMLToWorkspace(activity_name, initialCode = null) {    
    Blockly.getMainWorkspace().clear();
    let xml = localStorage.getItem('lastCodeXml');
    if (activity_name !== 'monkey_menace' || !xml || xml.length < 20) {
      xml = initialCode;
    }
    const dom = Blockly.Xml.textToDom(xml);
    Blockly.Xml.domToWorkspace(dom, workspacePlayground);
  }

  init = (blocksData, pageId, feedbackCallback, callback) => {
    this.createBlockInstances(blocksData.activity_name, pageId);
    try { Blockly.getMainWorkspace().clear(); } catch(e) {}
    workspacePlayground = Blockly.inject('blocklyDiv',
      {
        toolbox: this.getToolbox(blocksData), trashcan: true, 
        zoom: {
            controls: true,
            wheel: false,
            startScale: 1,
            maxScale: 2,
            minScale: 0.3,
            scaleSpeed: 1.2
          },
        grid:
          {
            spacing: 20,
            length: 3,
            colour: '#ccc',
            snap: true
          },
        disable: true,
        collapse: true
      }
    );
    if (blocksData.initialCode && blocksData.initialCode.length > 20) {
      this.getInitialXMLToWorkspace(blocksData.activity_name, blocksData.initialCode);
    }  
    
    this.wsOnChange.callback = feedbackCallback;
    this.wsOnChange.workSpace = workspacePlayground;
    workspacePlayground.addChangeListener(this.wsOnChange.init);

    workspacePlayground.registerButtonCallback('open', () => {
      this.variableBlocks.showPrompt(workspacePlayground, xml => {
        this.variableXml = xml;
        this.createVariable.xml = `<button text="Create variable" callbackKey="open"> </button>${this.variableXml}`;
        this.getVar = new GetVarBlockService(workspacePlayground);
        this.setVar = new SetVarBlockService(workspacePlayground);
        this.changeVar = new ChangeVarBlockService(workspacePlayground);
        this.hideShowVar = new HideShowVarBlockService();
        workspacePlayground.updateToolbox(this.getToolbox(blocksData));
        this.variableBlocks.setCallbackToCanvas(callback);
        callback(true);
      });
    });
  }

  interpretBlocks = (sprites, buttons, coordinatesJson, callback, feedbackCall) => {
    this.say.interpret(this.kodaInterpreter, obj => {
      callback({ name: 'say', data: obj });
    });
    this.showCoordinates.interpret(this.kodaInterpreter, obj => {
      callback({ name: 'showCoordinates', data: obj });
    });
    this.goTo.interpret(this.kodaInterpreter, obj => {
      callback({ name: 'goTo', data: obj });
    });
    this.moveBy.interpret(this.kodaInterpreter, coordinatesJson, obj => {
      callback({ name: 'moveBy', data: obj });
    });
    this.moveTo.interpret(this.kodaInterpreter, sprites, coordinatesJson, obj => {
      callback({ name: 'moveTo', data: obj });
    });
    this.moveWithSpeed.interpret(this.kodaInterpreter, coordinatesJson, obj => {
      callback({ name: 'moveWithSpeed', data: obj });
    });
    this.changeLook.interpret(this.kodaInterpreter, obj => {
      callback({ name: 'changeLook', data: obj });
    });
    this.changeBG.interpret(this.kodaInterpreter, obj => {
      callback({ name: 'changeBG', data: obj });
    });
    this.nextLook.interpret(this.kodaInterpreter, obj => {
      callback({ name: 'nextLook', data: obj });
    });
    this.changeButton.interpret(this.kodaInterpreter, obj => {
      callback({ name: 'changeButton', data: obj });
    });
    this.showHideChar.interpret(this.kodaInterpreter, obj => {
      callback({ name: 'show', data: obj });
    });
    this.showHideAllChar.interpret(this.kodaInterpreter, obj => {
      callback({ name: 'allHideShow', data: obj });
    });
    this.showHideButton.interpret(this.kodaInterpreter, obj => {
      callback({ name: 'show', data: obj });
    });
    this.showHideAllButtons.interpret(this.kodaInterpreter, obj => {
      callback({ name: 'allHideShowButtons', data: obj });
    });
    this.changeVar.interpret(this.kodaInterpreter, arr => {
      callback({ name: 'changeVar', data: arr });
    });
    this.flipSprite.interpret(this.kodaInterpreter, obj => {
      callback({ name: 'flipSprite', data: obj });
    });
    this.rotateSprite.interpret(this.kodaInterpreter, obj => {
      callback({ name: 'rotateSprite', data: obj });
    });

    this.wait.interpret(this.kodaInterpreter);

    this.coordinates.interpret(this.kodaInterpreter, sprites);
    this.characterTouch.interpret(this.kodaInterpreter, sprites);
    this.arithmeticOperator.interpret(this.kodaInterpreter);
    this.randomNumber.interpret(this.kodaInterpreter);
    this.relationalOperator.interpret(this.kodaInterpreter);
    this.trueFalse.interpret(this.kodaInterpreter);
    this.logicalOperator.interpret(this.kodaInterpreter);
    this.notOperator.interpret(this.kodaInterpreter);
    this.mouseCoordinates.interpret(this.kodaInterpreter, coordinatesJson);

    this.repeat.interpret(this.kodaInterpreter);
    this.repeatForever.interpret(this.kodaInterpreter);
    this.ifBlock.interpret(this.kodaInterpreter);
    this.ifElseBlock.interpret(this.kodaInterpreter);

    this.whenKeyPressed.interpret(this.kodaInterpreter, feedbackCall);
    this.whenMouseClicked.interpret(this.kodaInterpreter);
    this.whenCharacterClicked.interpret(this.kodaInterpreter, sprites);
    this.whenButtonClicked.interpret(this.kodaInterpreter, buttons);

    this.getVar.interpret(this.kodaInterpreter);
    this.setVar.interpret(this.kodaInterpreter, arr => {
      callback({ name: 'setVar', data: arr });
    });
    if (this.hideShowVar) {
      this.hideShowVar.interpret(this.kodaInterpreter, obj => {
        callback({ name: 'hideShowVar', data: obj });
      });
    }
  }

  compileCode = (pageId, callback) => {
    // Blockly.JavaScript.STATEMENT_PREFIX = 'highlightBlock(%1);\n';
    // Blockly.JavaScript.addReservedWords('highlightBlock');
    let rawCodes = Blockly.JavaScript.workspaceToCode(workspacePlayground);
    this.compiler.compileCode(rawCodes, workspacePlayground, pageId, err => {
      callback(err, rawCodes);
    });
  }

  runCode = (rawCodes, sprites, buttons, coordinatesJson, feedbackCall, callback) => {
    // console.log(performance.now());
    const codes = rawCodes.split(';\n\n');
    const list = rawCodes.split(';\n');
    this.interpretBlocks(sprites, buttons, coordinatesJson, callback, () => {
      if (feedbackCall) feedbackCall(list, this.getXml(false), sprites);
    });
    codes.forEach(code => {
      this.kodaInterpreter.executeCommands(code, () => {
        if (feedbackCall) feedbackCall(list, this.getXml(false), sprites);
      });
    });

    // const runner = (intrp, i) => {
    //   if (!this.myInterpreter) return;
    //   if (intrp) {
    //     const hasMore = intrp.step();
    //     if (hasMore) {
    //       // Execution is currently blocked by some async call.
    //       // Try again later.
    //       setTimeout(() => {
    //         runner(intrp, i);
    //       }, 0);
    //     } else if (i === (codes.length - 1)) {
    //       if (feedbackCall) feedbackCall(rawCodes, this.getXml(false), sprites);
    //     }
    //   }
    // };

    // codes.forEach((code, i) => {
    //   this.myInterpreter[i] = new Interpreter(code, (intrp, scope) => {
    //     this.initCompiling(intrp, scope, sprites, buttons, coordinatesJson, () => {
    //       if (feedbackCall) feedbackCall(rawCodes, this.getXml(false), sprites);
    //     }, callback);
    //   });

    //   if (this.myInterpreter) {
    //     runner(this.myInterpreter[i], i);
    //   }  
    // });

    // if (feedbackCall && rawCodes.indexOf('while(true)') !== -1) {
    //   setTimeout(() => {
    //     feedbackCall(rawCodes, this.getXml(false), sprites);
    //     setTimeout(() => {
    //       this.stopExecution();
    //     }, 500);
    //   }, 1000 * 30);
    // }
  }

  compileRawCode(cb) {
    const getX = () => {
      return 1;
    }
    const changeLook = (params, callback) => {
      callback(params);
    };
    const goTo = (params, cb1, callback) => {

      cb({ name: 'goTo', data: params });
      setTimeout(() => {
        cb1();
      }, 20);
    }
    const say = (params, cb1, callback) => {
      callback(params);
      setTimeout(() => {
        cb1();
      }, 2000);
    }

    return {
      async: {
        goTo: goTo,//function (params, callback) {
        //   goTo(params, callback, (obj) => {
        //     console.log(obj);
        //     cb({ name: 'goTo', data: obj });
        //   })
        // },
        say: function (params, callback) {
          say(params, callback, (obj) => {
            console.log(obj);
            cb({ name: 'say', data: obj });
          })
        }
      },
      native: {
        changeLook: function (params) {
          changeLook(params, (obj) => {
            console.log('changeLook', obj);
            cb({ name: 'changeLook', data: obj });
          })
        },
        getX: getX
      }
    }
  }

  tmpRunCode(cb) {
    const arr = ["goTo", 'changeLook'];
    const arr1 = ["say"];
    const compiler = this.compileRawCode(cb);
    const params = [{
      x: compiler.native.getX(), y: -10, spriteIndex: 0
    }, { spriteIndex: 0, avatarIndex: 1 }];
    const loop = (i) => {
      if (i === arr.length) return;
      const v = arr[i];
      console.log(v);
      if (compiler.async.hasOwnProperty(v)) {
        compiler.async[v](params[i], () => {
          loop(++i);
        });
      } else {
        compiler.native[v](params[i]);
        loop(++i);
      }
    }
    const loop1 = (i) => {
      if (i === arr1.length) return;
      const v = arr1[i];
      console.log(v);
      if (compiler.async.hasOwnProperty(v)) {
        compiler.async[v](() => {
          loop1(++i);
        });
      } else {
        compiler.native[v]();
        loop1(++i);
      }
    }
    loop(0);
    // loop1(0);
  }

  stopExecution = () => {
    this.kodaInterpreter.stopExecution();
    this.whenKeyPressed.unregister();
    this.whenCharacterClicked.unregister();
    this.whenButtonClicked.unregister();
    this.whenMouseClicked.unregister();
  }

  getXml = (bool = true) => {
    const xml = Blockly.Xml.workspaceToDom(workspacePlayground);
    if (bool) {
      console.log(Blockly.Xml.domToPrettyText(xml));
    } else {
      return Blockly.Xml.domToPrettyText(xml);
    }
  }

}

export let workspacePlayground;
