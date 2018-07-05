import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroToEventsComponent } from './intro-to-events/intro-to-events.component';

const routes: Routes = [
  {
    path: 'intro-to-events',
    component: IntroToEventsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Level3RoutingModule { }
