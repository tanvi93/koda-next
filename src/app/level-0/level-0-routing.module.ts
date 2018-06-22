import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { MascotTalkingComponent } from './mascot-talking/mascot-talking.component';
import { SummaryGameElementsComponent } from './summary-game-elements/summary-game-elements.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Level0RoutingModule { }
