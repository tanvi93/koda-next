import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModuleModule } from './../shared-module/shared-module.module';
import { Level0RoutingModule } from './level-0-routing.module';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { MascotTalkingComponent } from './mascot-talking/mascot-talking.component';
import { SummaryGameElementsComponent } from './summary-game-elements/summary-game-elements.component';
import { ChooseAvatarComponent } from './choose-avatar/choose-avatar.component';
import { GameElementsComponent } from './game-elements/game-elements.component';
import { AlgoDragnDropComponent } from './algo-dragn-drop/algo-dragn-drop.component';
import { DragZoneComponent } from './algo-dragn-drop/drag-zone/drag-zone.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModuleModule,
    Level0RoutingModule
  ],
  declarations: [LandingPageComponent, MascotTalkingComponent, SummaryGameElementsComponent, ChooseAvatarComponent, GameElementsComponent, AlgoDragnDropComponent, DragZoneComponent]
})
export class Level0Module { }

