import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectCharactersComponent } from './select-characters/select-characters.component';
import { PositionCharactersComponent } from './position-characters/position-characters.component';
import { FoxGrapeComponent } from './fox-grape/fox-grape.component';
import { DragonCapture2Component } from './dragon-capture2/dragon-capture2.component';

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
    path: 'dragon-capture-2',
    component: DragonCapture2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Level1RoutingModule { }
