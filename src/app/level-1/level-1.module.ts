import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModuleModule } from './../shared-module/shared-module.module';
import { Level1RoutingModule } from './level-1-routing.module';

import { SelectCharactersComponent } from './select-characters/select-characters.component';
import { PositionCharactersComponent } from './position-characters/position-characters.component';
import { InputCoordinateComponent } from './shared/input-coordinate/input-coordinate.component';
import { BubbleMsgComponent } from './shared/bubble-msg/bubble-msg.component';
import { FoxGrapeComponent } from './fox-grape/fox-grape.component';
import { FoxInputSectionComponent } from './fox-grape/fox-input-section/fox-input-section.component';
import { FoxOutputSectionComponent } from './fox-grape/fox-output-section/fox-output-section.component';
import { CharacterSelectionSectionComponent } from './select-characters/character-selection-section/character-selection-section.component';
import { CharacterDisplaySectionComponent } from './select-characters/character-display-section/character-display-section.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModuleModule,
    Level1RoutingModule,
    FormsModule
  ],
  declarations: [SelectCharactersComponent, PositionCharactersComponent, InputCoordinateComponent, BubbleMsgComponent, FoxGrapeComponent, FoxInputSectionComponent, FoxOutputSectionComponent, CharacterSelectionSectionComponent, CharacterDisplaySectionComponent]
 
})
export class Level1Module { }
