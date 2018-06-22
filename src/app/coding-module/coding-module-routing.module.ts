import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GamePlayScreenComponent } from './game-play-screen/game-play-screen.component';

const routes: Routes = [
  {
    path: 'play/:pageId',
    component: GamePlayScreenComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CodingModuleRoutingModule { }
