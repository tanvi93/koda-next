import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CodingModuleRoutingModule } from './coding-module-routing.module';
import { CodingScreenComponent } from './coding-screen/coding-screen.component';
import { BlocklyZoneComponent } from './blockly-zone/blockly-zone.component';
import { GameZoneComponent } from './game-zone/game-zone.component';
import { GamePlayScreenComponent } from './game-play-screen/game-play-screen.component';
import { GameCanvasComponent } from './game-canvas/game-canvas.component';

import { SpriteService } from './services/sprite.service';

@NgModule({
  imports: [
    CommonModule,
    CodingModuleRoutingModule
  ],
  declarations: [CodingScreenComponent, BlocklyZoneComponent, GameZoneComponent, GamePlayScreenComponent, GameCanvasComponent],
  providers: [SpriteService]
})
export class CodingModuleModule { }
