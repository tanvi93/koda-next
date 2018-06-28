import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Level2RoutingModule } from './level-2-routing.module';

import { IntroToBlocksComponent } from './intro-to-blocks/intro-to-blocks.component';

@NgModule({
  imports: [
    CommonModule,
    Level2RoutingModule
  ],
  declarations: [IntroToBlocksComponent]
})
export class Level2Module { }
