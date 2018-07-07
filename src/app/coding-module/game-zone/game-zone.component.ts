import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpriteService } from './../services/sprite.service';
import { InterpreterService } from './../services/interpreter.service';
import { FeedbackService } from './../services/feedback/feedback.service';
import { blocksData } from './../../data/coding';
import { GameStageService } from './../services/game-stage.service';
import { AudioService } from './../../shared-services/audio.service';

@Component({
  selector: 'app-game-zone',
  templateUrl: './game-zone.component.html',
  styleUrls: ['./game-zone.component.scss'],
  providers: [GameStageService, FeedbackService]
})
  
  /**
   * @name GameZoneComponent<app-game-zone>
   * @description This is game zone component for coding screens,
   * It will have the game canvas and a control bar.
   * Game canvas is where user can play the game.
   * Control bar have buttons like run, reset and stop, show grid button, mouse X,Y coordinates
   * @constructor initiate local variables and preload button images
   */

  /**
   * @method OnInit
   * @memberOf GameZoneComponent
   * @description This method will pass game data and objects like sprites class, interpreter class to gameStageService.
   * GameStageService take care of game functionality.
   * And bind mousemove event to the component for mouse X,Y coordinates. 
   */

  /**
   * @method ngOnChanges
   * @memberOf GameZoneComponent
   * @description Input watcher and reader, which comes from parent Coding Screen.
   * this methid will call appropriate methods of GameStageService as per input.
   */

  /**
   * @method getFeedback
   * @memberOf GameZoneComponent
   * @description Handle Feedback and call feedback services.
   * Get called from InterpreterService as callback.
   * @param code the raw code(JS) comes from interpreter.
   * @param xml the XML code of workspace (used to save xml for next screen)
   * @param sprites Characters object are passed to feedback services
   */

  /**
   * @method compileCode
   * @memberOf GameZoneComponent
   * @description Used to check/show errors before executing(run) the raw code (JS).
   */

export class GameZoneComponent implements OnInit, OnChanges {

  @Input() blockInput: any;
  @Output() feedbackStatement = new EventEmitter();
  @Output() compilerError = new EventEmitter();
  @Output() updateSprite = new EventEmitter();

  private gridButtonSrc: any;
  private zoomtab: any;
  private buttonSrcs: any;
  private buttonStatus: String;
  private pageId: String;
  private pageData: any;
  private xCoordinate: Number;
  private yCoordinate: Number;
  private showGrid: Boolean;
  private loading: Boolean;

  constructor(private sp: SpriteService,
    private route: ActivatedRoute,
    private feedback: FeedbackService,
    private interpreter: InterpreterService,
    private audio: AudioService,
    private stageService: GameStageService) {
    this.showGrid = false;
    this.loading = true;
    this.xCoordinate = 0;
    this.yCoordinate = 0;
    this.gridButtonSrc = './../../../assets/icons/grid_toggle.svg';
    this.zoomtab = './../../../assets/icons/enter_full_screen.svg';
    
    this.buttonStatus = 'run';
    let buttonLoadCount = 0;
    const onButtonLoaded = () => {
      ++buttonLoadCount;
    }
    this.buttonSrcs = {
      reset: './../../../assets/images/reset_button.svg',
      run: './../../../assets/images/run_button.svg',
      stop: './../../../assets/images/stop_button.svg',
    }
    let controlButton = Object.keys(this.buttonSrcs).map(key => {
      let image = new Image();
      image.onload = onButtonLoaded;
      image.src = this.buttonSrcs[key];
      return image;
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.pageId = params.pageId;
      this.pageData = blocksData[`${this.pageId}`];
      this.sp = new SpriteService();
      this.stageService = new GameStageService();
      this.stageService.init(this.sp, this.interpreter, this.audio, this.pageData, this.pageId, () => {
        this.loading = false;
      });
    })

    const game = document.getElementById('game');
    game.addEventListener('mousemove', e => {
      const { x, y } = this.stageService.getMouseCoordinates(e);
      this.xCoordinate = x;
      this.yCoordinate = y;
    });
  }

  ngOnChanges() {
    if (this.blockInput.showVariables) {
      this.stageService.showVariables();
      return;
    }
    if (this.blockInput.characterVisibleToggle) {
      this.stageService.visibilityToggle(this.blockInput.characterVisibleToggle);
      return;
    }
  }

  getFeedback = (codes, xml, sprites) => {
    const bg = this.pageData.backgrounds[this.pageData.currentBackgroundIdx];
    this.feedback.setBlockList(this.pageId, codes, sprites, this.stageService.spriteStatusList, bg, obj => {
      if (typeof (obj) == 'object' && obj.success && this.pageData.activity_name === 'monkey_menace') {
        localStorage.setItem('lastCodeXml', xml);
      }
      this.stageService.stopExecution();
      this.feedbackStatement.emit(obj);
    });
    this.buttonStatus = 'reset';
    let json = null;
    codes.forEach(v => {
      json = JSON.parse(v);
      if (json.type && json.type === 'event') {
        this.buttonStatus = 'stop';
      }
    })
  }

  compileCode = (callback) => {
    this.feedbackStatement.emit('');
    this.stageService.spriteStatusList = [];
    const pageId = this.route.snapshot.paramMap.get('pageId');
    this.interpreter.compileCode(this.pageId, (err, code) => {
      if (err) {
        this.compilerError.emit(err);
      } else {
        callback(code);
      }
    })
  }

  onButtonClick = () => {
    switch (this.buttonStatus) {
      case 'run':
        this.compileCode(code => {
          this.buttonStatus = 'stop';
          this.stageService.runCode(code, this.getFeedback, () => {
            this.updateSprite.emit(true);
          });
        })
        break;
      case 'reset':
        this.stageService.resetStage();
        this.buttonStatus = 'run';
        this.feedbackStatement.emit('');
        break;
      case 'stop':
        this.stageService.stopExecution();
        this.buttonStatus = 'reset';
        break;
    }
  }

  tmpButton() {
    this.interpreter.getXml();
  }

}
