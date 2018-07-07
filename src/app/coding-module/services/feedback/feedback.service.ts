import { Injectable } from '@angular/core';
import { MoveFruitToHandService } from './move-fruit-to-hand.service';
import { MonkeyMoveToNewPositionService } from './monkey-move-to-new-position.service';
import { RandomPositionService } from './random-position.service';
import { MonkeyLeftmostLimit } from './monkey-leftmost-limit.service';
import { MonkeyRightLimitService } from './monkey-right-limit.service';
import { ThrowThreefruitsService } from './throw-threefruits.service';
import { MakeFruitFallService } from './make-fruit-fall.service';
import { MoveCapLeftService } from './move-cap-left.service';
import { MoveCapRightService } from './move-cap-right.service';
import { CodingFirstService } from './coding-first.service';
import { VenusFlytrapService } from './venus-flytrap.service';
import { MoveCapToLeftendService } from './move-cap-to-leftend.service';
import { RelativePositioningService } from './relative-positioning.service';
import { Throw5FruitService } from './throw-5-fruit.service';
import { ThrowFruitsForeverService } from './throw-fruits-forever.service';
import { MagicalCaveService } from './magical-cave.service';
import { CreateAndUpdateScoreService } from './create-and-update-score.service';
import { LandmineDetonatorCoding1Service } from './landmine-detonator-coding1.service';
import { LandmineDetonatorCoding2Service } from './landmine-detonator-coding2.service';
import { PackagingMilkCode1Service } from './packaging-milk-code1.service';
import { DiscoLightCodingService } from './disco-light-coding.service';
import { NaptimeActivityService } from './naptime-activity.service';
import { PackagingMilkCode2Service } from './packaging-milk-code2.service';

@Injectable()
export class FeedbackService {
  private blockList: any;
  private codes: Array<String>;
  private mm2_1_c1: MonkeyMoveToNewPositionService;
  private mm2_2_c1: MonkeyLeftmostLimit;
  private mm2_2_c3: RandomPositionService;
  private mm2_1_c2: MoveFruitToHandService;
  private mm2_1_c3: MakeFruitFallService;
  private mm2_2_c2: MonkeyRightLimitService;
  private mm2_2_c4: RelativePositioningService;
  private mm2_2_c5: ThrowThreefruitsService;
  private venus_flytrap_coding: VenusFlytrapService;
  private mm3_5_c1: MoveCapToLeftendService;
  private mm2_6_c1: Throw5FruitService;
  private mm2_6_c2: ThrowFruitsForeverService;
  private mm3_1_c1: MoveCapLeftService;
  private mm3_1_c2: MoveCapRightService;
  private mm4_1_c1: CreateAndUpdateScoreService;
  private magical_cave_coding: MagicalCaveService; 
  private landmine_detonator_coding1: LandmineDetonatorCoding1Service;
  private landmine_detonator_coding2: LandmineDetonatorCoding2Service;
  private packaging_milk_coding1: PackagingMilkCode1Service;
  private disco_lights_coding = new DiscoLightCodingService;
  private naptime_coding: NaptimeActivityService;
  private packaging_milk_coding2: PackagingMilkCode2Service;

  constructor() {
    this.mm2_1_c1 = new MonkeyMoveToNewPositionService();
    this.mm2_2_c1 = new MonkeyLeftmostLimit();
    this.mm2_2_c3 = new RandomPositionService();
    this.mm2_1_c2 = new MoveFruitToHandService();
    this.mm2_1_c3 = new MakeFruitFallService();
    this.mm2_2_c2 = new MonkeyRightLimitService();
    this.mm2_2_c5 = new ThrowThreefruitsService();
    this.venus_flytrap_coding = new VenusFlytrapService();
    this.mm3_5_c1 = new MoveCapToLeftendService();
    this.mm2_2_c4 = new RelativePositioningService();
    this.mm2_6_c1 = new Throw5FruitService();
    this.mm2_6_c2 = new ThrowFruitsForeverService();
    this.mm3_1_c1 = new MoveCapLeftService();
    this.mm3_1_c2 = new MoveCapRightService();
    this.mm4_1_c1 = new CreateAndUpdateScoreService();
    this.magical_cave_coding = new MagicalCaveService();
    this.landmine_detonator_coding1 = new LandmineDetonatorCoding1Service();
    this.landmine_detonator_coding2 = new LandmineDetonatorCoding2Service();
    this.packaging_milk_coding1 = new PackagingMilkCode1Service();
    this.disco_lights_coding = new DiscoLightCodingService();
    this.naptime_coding = new NaptimeActivityService();
    this.packaging_milk_coding2 = new PackagingMilkCode2Service();
  }

  getHighlightIndex() {
    for (let i = 0; i < this.codes.length; i++) {
      if (this.codes[i].indexOf('highlightBlock') !== -1) {
        this.codes.splice(i, 1);
        i--;
      }
    }
  }

  setBlockList = (pageId, list, sprites, spriteStatus, bgDetails, callback) => {
    this.codes = list;
    this.codes.splice(this.codes.length - 1, 1);
    // this.getHighlightIndex();
    this.blockList = this.codes.map(v => {
      return v.split('(')[0];
    });
    const spritesData = [...sprites, { id: 'background', ...bgDetails }];
    if (this[`${pageId}`]) {
      this[`${pageId}`].validateCode(this.blockList, this.codes, spritesData, spriteStatus, callback);
    }
  }

}

export let feedbackStatement = null;
