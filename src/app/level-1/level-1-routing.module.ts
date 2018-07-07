import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectCharactersComponent } from './select-characters/select-characters.component';
import { PositionCharactersComponent } from './position-characters/position-characters.component';
import { FoxGrapeComponent } from './fox-grape/fox-grape.component';
import { DragonCapture2Component } from './dragon-capture2/dragon-capture2.component';
import { MarsRoverComponent } from './mars-rover/mars-rover.component';
import { TreasureHuntComponent } from './treasure-hunt/treasure-hunt.component';
import { DragonCapture1Component } from './dragon-capture1/dragon-capture1.component';

const routes: Routes = [
  {
    path: 'select-character',
    component: SelectCharactersComponent
  }, {
    path: 'position-character',
    component: PositionCharactersComponent
  }, {
    path: 'fox-grape',
    component: FoxGrapeComponent
  }, {
    path: 'mars-rover',
    component: MarsRoverComponent
  }, {
    path: 'dragon-capture-2',
    component: DragonCapture2Component
  }, {
    path: 'treasure-hunt',
    component: TreasureHuntComponent
  }, {
    path: 'dragon-capture-1',
    component: DragonCapture1Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Level1RoutingModule { }
