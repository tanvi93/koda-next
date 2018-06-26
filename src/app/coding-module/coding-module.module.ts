import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CodingModuleRoutingModule } from './coding-module-routing.module';
import { SharedModuleModule } from './../shared-module/shared-module.module';

import { CodingScreenComponent } from './coding-screen/coding-screen.component';
import { BlocklyZoneComponent } from './blockly-zone/blockly-zone.component';
import { GameZoneComponent } from './game-zone/game-zone.component';
import { GamePlayScreenComponent } from './game-play-screen/game-play-screen.component';
import { GameCanvasComponent } from './game-canvas/game-canvas.component';

import { SpriteService } from './services/sprite.service';
import { AlgoModalComponent } from './coding-screen/algo-modal/algo-modal.component';

@NgModule({
  imports: [
    CommonModule,
    CodingModuleRoutingModule,
    SharedModuleModule
  ],
  declarations: [CodingScreenComponent, BlocklyZoneComponent, GameZoneComponent, GamePlayScreenComponent, GameCanvasComponent, AlgoModalComponent],
  providers: [SpriteService]
})
export class CodingModuleModule { }
