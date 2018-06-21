import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuizWrapperComponent } from './quiz-wrapper/quiz-wrapper.component';

const routes: Routes = [
  {
    path: '',
    component: QuizWrapperComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizModuleRoutingModule { }
