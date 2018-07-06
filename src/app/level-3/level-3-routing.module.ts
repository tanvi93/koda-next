import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroToEventsComponent } from './intro-to-events/intro-to-events.component';
import { IntroToConditionalsComponent } from './intro-to-conditionals/intro-to-conditionals.component';

const routes: Routes = [
  {
    path: 'intro-to-events',
    component: IntroToEventsComponent
  },
  {
    path: 'intro-to-conditionals',
    component: IntroToConditionalsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Level3RoutingModule { }
