import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroToEventsComponent } from './intro-to-events/intro-to-events.component';
import { IntroToConditionalsComponent } from './intro-to-conditionals/intro-to-conditionals.component';
import { MascotTalkingComponent } from './mascot-talking/mascot-talking.component';

const routes: Routes = [
  {
    path: 'intro-to-events',
    component: IntroToEventsComponent
  },
  {
    path: 'intro-to-conditionals',
    component: IntroToConditionalsComponent
  },
  {
    path: 'mascot-talking',
    component: MascotTalkingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Level3RoutingModule { }
