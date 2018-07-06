import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModuleModule } from './../shared-module/shared-module.module';
import { Level3RoutingModule } from './level-3-routing.module';
import { IntroToEventsComponent } from './intro-to-events/intro-to-events.component';
import { IntroToConditionalsComponent } from './intro-to-conditionals/intro-to-conditionals.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModuleModule,
    Level3RoutingModule
  ],
  declarations: [IntroToEventsComponent, IntroToConditionalsComponent]
})
export class Level3Module { }
