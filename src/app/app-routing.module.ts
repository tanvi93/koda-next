import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BadgesComponent } from './shared-pages/badges/badges.component';
import { DashboardComponent } from './shared-pages/dashboard/dashboard.component';
import { AlgoStepsComponent } from './shared-pages/algo-steps/algo-steps.component';
import { LinearFlowScreenComponent } from './shared-pages/linear-flow-screen/linear-flow-screen.component';
import { ForkScreenComponent } from './shared-pages/fork-screen/fork-screen.component';

const routes: Routes = [
  {
    path: 'level-1',
    loadChildren: 'app/level-0/level-0.module#Level0Module'
  }, {
    path: 'quiz',
    loadChildren: 'app/quiz-module/quiz-module.module#QuizModuleModule'
  }, {
    path: 'coding',
    loadChildren: 'app/coding-module/coding-module.module#CodingModuleModule'
  }, {
    path: 'badge/:pageId',
    component: BadgesComponent
  }, {
    path: 'dashboard',
    component: DashboardComponent
  }, {
    path: 'algo-steps/:stepId',
    component: AlgoStepsComponent
  }, {
    path: 'continue/:pageId',
    component: LinearFlowScreenComponent
  }, {
    path: 'fork/:pageId',
    component: ForkScreenComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
