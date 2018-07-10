import { Injectable } from '@angular/core';
import { RandomPositionService } from './feedback/random-position.service';
import { MakeFruitFallService } from './feedback/make-fruit-fall.service';
import { MoveFruitToHandService } from './feedback/move-fruit-to-hand.service';
import { MonkeyMoveToNewPositionService } from './feedback/monkey-move-to-new-position.service';
import { MonkeyLeftmostLimit } from './feedback/monkey-leftmost-limit.service';
import { MonkeyRightLimitService } from './feedback/monkey-right-limit.service';
import { ThrowThreefruitsService } from './feedback/throw-threefruits.service';
import { MoveCapToLeftendService } from './feedback/move-cap-to-leftend.service';
import { workspacePlayground } from './interpreter.service';
import { VenusFlytrapService } from './feedback/venus-flytrap.service';
import { RelativePositioningService } from './feedback/relative-positioning.service';
import { Throw5FruitService } from './feedback/throw-5-fruit.service';
import { ThrowFruitsForeverService } from './feedback/throw-fruits-forever.service';
import { MagicalCaveService } from './feedback/magical-cave.service';
import { MoveCapLeftService } from './feedback/move-cap-left.service';
import { MoveCapRightService } from './feedback/move-cap-right.service';
import { CreateAndUpdateScoreService } from './feedback/create-and-update-score.service';
import { LandmineDetonatorCoding1Service } from './feedback/landmine-detonator-coding1.service';
import { LandmineDetonatorCoding2Service } from './feedback/landmine-detonator-coding2.service';
import { PackagingMilkCode1Service } from './feedback/packaging-milk-code1.service';
import { DiscoLightCodingService } from './feedback/disco-light-coding.service';
import { NaptimeActivityService } from './feedback/naptime-activity.service';
import { PackagingMilkCode2Service } from './feedback/packaging-milk-code2.service';

@Injectable()
export class WorkspaceOnChangeService {
  private pageId: String;
  private mm2_2_c3: RandomPositionService;
  private mm2_1_c1: MonkeyMoveToNewPositionService;
  private mm2_1_c2: MoveFruitToHandService;
  private mm2_1_c3: MakeFruitFallService;
  private mm2_2_c1: MonkeyLeftmostLimit;
  private mm2_2_c2: MonkeyRightLimitService;
  private mm2_2_c5: ThrowThreefruitsService;
  private mm3_1_c1: MoveCapLeftService;
  private mm3_5_c1: MoveCapToLeftendService;
  private mm2_2_c4: RelativePositioningService;
  private mm2_6_c1: Throw5FruitService;
  private mm2_6_c2: ThrowFruitsForeverService;
  private mm3_1_c2: MoveCapRightService;
  private mm4_1_c1: CreateAndUpdateScoreService;
  private venus_flytrap_coding: VenusFlytrapService;
  private magical_cave_coding: MagicalCaveService;
  private landmine_detonator_coding1: LandmineDetonatorCoding1Service;
  private landmine_detonator_coding2: LandmineDetonatorCoding2Service;
  private packaging_milk_coding1_challenge: PackagingMilkCode1Service;
  private disco_lights_coding: DiscoLightCodingService;
  private naptime_coding: NaptimeActivityService;
  private packaging_milk_coding2_challenge: PackagingMilkCode2Service;
  private timer;
  public callback;
  public workSpace;

  constructor(pageId) {
    this.pageId = pageId;
    this.mm2_1_c1 = new MonkeyMoveToNewPositionService();
    this.mm2_2_c3 = new RandomPositionService();
    this.mm2_1_c2 = new MoveFruitToHandService();
    this.mm2_1_c3 = new MakeFruitFallService();
    this.mm2_2_c1 = new MonkeyLeftmostLimit();
    this.mm2_2_c2 = new MonkeyRightLimitService();
    this.mm2_2_c5 = new ThrowThreefruitsService();
    this.mm3_5_c1 = new MoveCapToLeftendService();
    this.mm2_2_c4 = new RelativePositioningService();
    this.mm2_6_c1 = new Throw5FruitService();
    this.mm2_6_c2 = new ThrowFruitsForeverService();
    this.mm3_1_c1 = new MoveCapLeftService();
    this.mm3_1_c2 = new MoveCapRightService();
    this.mm4_1_c1 = new CreateAndUpdateScoreService();
    this.venus_flytrap_coding = new VenusFlytrapService();
    this.magical_cave_coding = new MagicalCaveService();
    this.landmine_detonator_coding1 = new LandmineDetonatorCoding1Service();
    this.landmine_detonator_coding2 = new LandmineDetonatorCoding2Service();
    this.packaging_milk_coding1_challenge = new PackagingMilkCode1Service();
    this.packaging_milk_coding2_challenge = new PackagingMilkCode2Service();
    this.disco_lights_coding = new DiscoLightCodingService();
    this.naptime_coding = new NaptimeActivityService();
    this.callback = null;
    this.timer = null;
  }

  init = e => {    
    /*
      Some code which will be used for every coding page, like stop deleting default blocks
    */
    if (this[`${this.pageId}`] && this[`${this.pageId}`].workSpaceOnChange) {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (e.type === 'move') {
        this.timer = setTimeout(() => {
          this[`${this.pageId}`].workSpaceOnChange(e, this.callback, this.workSpace);
        }, 300);
      } else {
        this[`${this.pageId}`].workSpaceOnChange(e, this.callback, this.workSpace);
      }  
    }

  }
 
}
