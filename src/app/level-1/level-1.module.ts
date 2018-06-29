import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModuleModule } from './../shared-module/shared-module.module';
import { Level1RoutingModule } from './level-1-routing.module';

import { SelectCharactersComponent } from './select-characters/select-characters.component';
import { PositionCharactersComponent } from './position-characters/position-characters.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModuleModule,
    Level1RoutingModule
  ],
  declarations: [SelectCharactersComponent, PositionCharactersComponent]
})
export class Level1Module { }
