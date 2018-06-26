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

  private blocksList: Array<String>;

  constructor() {
    workspacePlayground = null;
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

  initCompiling = (interpreter, scope, sprites, buttons, coordinatesJson, feedbackCall, callback) => {
    this.say.initInterpreterSay(interpreter, scope, (text, spriteIndex, duration) => {
      callback({ name: 'say', data: { text, spriteIndex, duration } });
    });
    this.showCoordinates.initInterpreterShowCoords(interpreter, scope, (spriteIndex, duration) => {
      callback({ name: 'showCoordinates', data: { spriteIndex, duration } });
    });
    this.goTo.initInterpreter(interpreter, scope, obj => {
      callback({ name: 'goTo', data: obj });
    });
    this.moveBy.initInterpreter(interpreter, scope, coordinatesJson, obj => {
      callback({ name: 'moveBy', data: obj });
    });
    this.moveTo.initInterpreter(interpreter, scope, sprites, coordinatesJson, obj => {
      callback({ name: 'moveTo', data: obj });
    });
    this.moveWithSpeed.initInterpreter(interpreter, scope, coordinatesJson, obj => {
      callback({ name: 'moveWithSpeed', data: obj });
    });
    this.showHideChar.initInterpreter(interpreter, scope, obj => {
      callback({ name: 'show', data: obj });
    });
    this.showHideButton.initInterpreter(interpreter, scope, obj => {
      callback({ name: 'show', data: obj });
    });
    this.showHideAllChar.initInterpreter(interpreter, scope, obj => {
      callback({ name: 'allHideShow', data: obj });
    });
    this.showHideAllButtons.initInterpreter(interpreter, scope, obj => {
      callback({ name: 'allHideShowButtons', data: obj });
    });
    this.changeLook.initInterpreter(interpreter, scope, obj => {
      callback({ name: 'changeLook', data: obj });
    });
    this.changeBG.initInterpreter(interpreter, scope, obj => {
      callback({ name: 'changeBG', data: obj });
    });
    this.nextLook.initInterpreter(interpreter, scope, obj => {
      callback({ name: 'nextLook', data: obj });
    });
    this.changeButton.initInterpreter(interpreter, scope, obj => {
      callback({ name: 'changeButton', data: obj });
    });
    this.rotateSprite.initInterpreter(interpreter, scope, obj => {
      callback({ name: 'rotateSprite', data: obj });
    });
    this.flipSprite.initInterpreter(interpreter, scope, obj => {
      callback({ name: 'flipSprite', data: obj });
    });
    this.ifBlock.initInterpreter(interpreter, scope);
    this.ifElseBlock.initInterpreter(interpreter, scope);
    this.wait.initInterpreter(interpreter, scope);
    this.whenKeyPressed.initInterpreter(interpreter, scope, feedbackCall);
    this.whenCharacterClicked.initInterpreter(interpreter, scope, sprites);
    this.whenButtonClicked.initInterpreter(interpreter, scope, buttons);
    this.whenMouseClicked.initInterpreter(interpreter, scope);
    this.characterTouch.initInterpreter(interpreter, scope, sprites);
    this.coordinates.initInterpreter(interpreter, scope, sprites);
    this.randomNumber.initInterpreter(interpreter, scope);
    this.arithmeticOperator.initInterpreter(interpreter, scope);
    this.relationalOperator.initInterpreter(interpreter, scope);
    this.logicalOperator.initInterpreter(interpreter, scope);
    this.mouseCoordinates.initInterpreter(interpreter, scope, coordinatesJson);
    this.getVar.initInterpreter(interpreter, scope);

    this.setVar.initInterpreter(interpreter, scope, arr => {
      callback({ name: 'setVar', data: arr });
    });
    this.changeVar.initInterpreter(interpreter, scope, arr => {
      callback({ name: 'changeVar', data: arr });
    });

    if (this.hideShowVar) {
      this.hideShowVar.initInterpreter(interpreter, scope, obj => {
        callback({ name: 'hideShowVar', data: obj });
      });
    }
    let wrapper = (id) => {
      return interpreter.createPrimitive(this.highlightBlock(id));
    };
    interpreter.setProperty(scope, 'highlightBlock',
      interpreter.createNativeFunction(wrapper));
  }

  highlightBlock = (id) => {
    workspacePlayground.highlightBlock(id);
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
    const codes = rawCodes.split('\n\n');
    this.myInterpreter = {};

    const runner = (intrp, i) => {
      if (!this.myInterpreter) return;
      if (intrp) {
        const hasMore = intrp.step();
        if (hasMore) {
          // Execution is currently blocked by some async call.
          // Try again later.
          setTimeout(() => {
            runner(intrp, i);
          }, 0);
        } else if (i === (codes.length - 1)) {
          if (feedbackCall) feedbackCall(rawCodes, this.getXml(false), sprites);
        }
      }
    };

    codes.forEach((code, i) => {
      this.myInterpreter[i] = new Interpreter(code, (intrp, scope) => {
        this.initCompiling(intrp, scope, sprites, buttons, coordinatesJson, () => {
          if (feedbackCall) feedbackCall(rawCodes, this.getXml(false), sprites);
        },callback);
      });

      if (this.myInterpreter) {
        runner(this.myInterpreter[i], i);
      }  
    });

    if (feedbackCall && rawCodes.indexOf('while(true)') !== -1) {
      setTimeout(() => {
        feedbackCall(rawCodes, this.getXml(false), sprites);
        setTimeout(() => {
          this.stopExecution();
        }, 500);
      }, 1000 * 30);
    }
  }

  stopExecution = () => {
    this.myInterpreter = null;
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
