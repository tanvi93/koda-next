import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularDraggableModule } from 'angular2-draggable';

import { SharedModuleModule } from './../shared-module/shared-module.module';
import { Level1RoutingModule } from './level-1-routing.module';

import { SelectCharactersComponent } from './select-characters/select-characters.component';
import { PositionCharactersComponent } from './position-characters/position-characters.component';
import { PositionValidationComponent } from './position-characters/position-validation/position-validation.component';
import { CharacterPositioningComponent } from './position-characters/character-positioning/character-positioning.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModuleModule,
    Level1RoutingModule,
    AngularDraggableModule
  ],
  declarations: [SelectCharactersComponent, PositionCharactersComponent, PositionValidationComponent, CharacterPositioningComponent]
})
export class Level1Module { }
