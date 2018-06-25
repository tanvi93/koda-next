import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BadgesComponent } from './shared-pages/badges/badges.component';
import { DashboardComponent } from './shared-pages/dashboard/dashboard.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
