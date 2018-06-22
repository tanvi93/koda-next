import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'level-1',
    loadChildren: 'app/level-0/level-0.module#Level0Module'
  }, {
    path: 'quiz/:pageId',
    loadChildren: 'app/quiz-module/quiz-module.module#QuizModuleModule'
  }, {
    path: 'coding',
    loadChildren: 'app/coding-module/coding-module.module#CodingModuleModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
