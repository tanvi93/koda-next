import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModuleModule } from './../shared-module/shared-module.module';
import { Level1RoutingModule } from './level-1-routing.module';

import { SelectCharactersComponent } from './select-characters/select-characters.component';
import { PositionCharactersComponent } from './position-characters/position-characters.component';
import { InputCoordinateComponent } from './shared/input-coordinate/input-coordinate.component';
import { FoxGrapeComponent } from './fox-grape/fox-grape.component';
import { InputSectionComponent } from './fox-grape/input-section/input-section.component';
import { OutputSectionComponent } from './fox-grape/output-section/output-section.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModuleModule,
    Level1RoutingModule
  ],
  declarations: [SelectCharactersComponent, PositionCharactersComponent, InputCoordinateComponent, FoxGrapeComponent, InputSectionComponent, OutputSectionComponent]
})
export class Level1Module { }
