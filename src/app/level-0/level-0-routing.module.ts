import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { MascotTalkingComponent } from './mascot-talking/mascot-talking.component';
import { SummaryGameElementsComponent } from './summary-game-elements/summary-game-elements.component';
import { ChooseAvatarComponent } from './choose-avatar/choose-avatar.component';
import { GameElementsComponent } from './game-elements/game-elements.component';
import { AlgoDragnDropComponent } from './algo-dragn-drop/algo-dragn-drop.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'intro',
    pathMatch: 'full'
  }, {
    path: 'intro',
    component: LandingPageComponent
  }, {
    path: 'mascot-talking/:pageId',
    component: MascotTalkingComponent
  }, {
    path: 'summary-game-elements',
    component: SummaryGameElementsComponent
  }, {
    path: 'choose-avatar',
    component: ChooseAvatarComponent
  }, {
    path: 'game-elements',
    component: GameElementsComponent
  }, {
    path: 'algo-arrangement',
    component: AlgoDragnDropComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Level0RoutingModule { }
