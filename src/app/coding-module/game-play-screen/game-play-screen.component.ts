import { Component, OnDestroy } from '@angular/core';
import { InterpreterService } from './../services/interpreter.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SpriteService } from './../services/sprite.service';
import { blocksData } from './../../data/coding';
import { GameStageService } from './../services/game-stage.service';
import { UtilitiesService } from './../../shared-services/utilities.service'
import { AudioService } from './../../shared-services/audio.service';

@Component({
  selector: 'app-game-play-screen',
  templateUrl: './game-play-screen.component.html',
  styleUrls: ['./game-play-screen.component.scss'],
  providers: [InterpreterService, GameStageService]
})
export class GamePlayScreenComponent implements OnDestroy {
  private pageId: string;
  private pageData: any;
  private arrow: any;
  private show: boolean;
  private count: number;
  private loading: boolean;

  constructor(private sp: SpriteService,
    private route: ActivatedRoute,
    private interpreter: InterpreterService,
    private stageService: GameStageService,
    private router: Router,
    private audio: AudioService,
    private utility: UtilitiesService) {
    this.pageId = this.route.snapshot.paramMap.get('pageId');
    this.pageData = blocksData[`${this.pageId}`];
    this.sp = new SpriteService();
    this.interpreter = new InterpreterService();
    this.stageService = new GameStageService();
    this.count = 0;
    this.loading = true;
    this.stageService.init(this.sp, this.interpreter, this.audio, this.pageData, this.pageId, () => {
      this.stageService.runCode(this.pageData.gameScript);
      this.loading = false;
      this.stageService.returnControl = () => {
        this.gameOver();
      }
    });
    this.arrow = './../../../assets/images/monkey_menace/continue_icon.png';
    let image = new Image();
    image.src = this.arrow;
  }

  goNext() {
    this.utility.nextPage(this.router.url.substr(1));
  }

  gameOver() {
    this.count++;
    if (this.count === 2) {
      this.show = true;
      this.count = 0;
    }
  }

  ngOnDestroy() {
    this.stageService.stopExecution();
  }

}
