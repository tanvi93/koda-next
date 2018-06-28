import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Level2RoutingModule } from './level-2-routing.module';
import { SharedModuleModule } from './../shared-module/shared-module.module';

import { IntroToBlocksComponent } from './intro-to-blocks/intro-to-blocks.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModuleModule,
    Level2RoutingModule
  ],
  declarations: [IntroToBlocksComponent]
})
export class Level2Module { }
