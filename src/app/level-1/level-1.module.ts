import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularDraggableModule } from 'angular2-draggable';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModuleModule } from './../shared-module/shared-module.module';
import { Level1RoutingModule } from './level-1-routing.module';

import { SelectCharactersComponent } from './select-characters/select-characters.component';
import { PositionCharactersComponent } from './position-characters/position-characters.component';
import { PositionValidationComponent } from './position-characters/position-validation/position-validation.component';
import { CharacterPositioningComponent } from './position-characters/character-positioning/character-positioning.component';
import { InputCoordinateComponent } from './shared/input-coordinate/input-coordinate.component';
import { BubbleMsgComponent } from './shared/bubble-msg/bubble-msg.component';
import { FoxGrapeComponent } from './fox-grape/fox-grape.component';
import { FoxOutputSectionComponent } from './fox-grape/fox-output-section/fox-output-section.component';
import { CharacterSelectionSectionComponent } from './select-characters/character-selection-section/character-selection-section.component';
import { CharacterDisplaySectionComponent } from './select-characters/character-display-section/character-display-section.component';
import { DragonCapture2Component } from './dragon-capture2/dragon-capture2.component';
import { DragonOutputSectionComponent } from './dragon-capture2/dragon-output-section/dragon-output-section.component';
import { MarsRoverComponent } from './mars-rover/mars-rover.component';
import { MarsOutputSectionComponent } from './mars-rover/mars-output-section/mars-output-section.component';
import { TreasureHuntComponent } from './treasure-hunt/treasure-hunt.component';
import { TreasureActivitySectionComponent } from './treasure-hunt/treasure-activity-section/treasure-activity-section.component';
import { DragonCapture1Component } from './dragon-capture1/dragon-capture1.component';
import { DragonCaptureOutputComponent } from './dragon-capture1/dragon-capture-output/dragon-capture-output.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModuleModule,
    Level1RoutingModule,
    AngularDraggableModule,
    FormsModule
  ],

  declarations: [
    SelectCharactersComponent, 
    PositionCharactersComponent, PositionValidationComponent, CharacterPositioningComponent,
    InputCoordinateComponent, 
    BubbleMsgComponent,
    FoxGrapeComponent, 
    FoxOutputSectionComponent, 
    CharacterSelectionSectionComponent,
    CharacterDisplaySectionComponent,
    MarsRoverComponent, MarsOutputSectionComponent, 
    DragonCapture2Component, DragonOutputSectionComponent,
    TreasureHuntComponent, TreasureActivitySectionComponent, DragonCapture1Component,  DragonCaptureOutputComponent,
  ]
 
})
export class Level1Module { }
