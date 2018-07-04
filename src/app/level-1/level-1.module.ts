import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModuleModule } from './../shared-module/shared-module.module';
import { Level1RoutingModule } from './level-1-routing.module';

import { SelectCharactersComponent } from './select-characters/select-characters.component';
import { PositionCharactersComponent } from './position-characters/position-characters.component';
import { CharacterSelectionSectionComponent } from './select-characters/character-selection-section/character-selection-section.component';
import { CharacterDisplaySectionComponent } from './select-characters/character-display-section/character-display-section.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModuleModule,
    Level1RoutingModule
  ],
  declarations: [SelectCharactersComponent, PositionCharactersComponent, CharacterSelectionSectionComponent, CharacterDisplaySectionComponent]
})
export class Level1Module { }
