import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RadioQuizComponent } from './radio-quiz/radio-quiz.component';
import { FormulaQuizComponent } from './formula-quiz/formula-quiz.component';

const routes: Routes = [
  {
    path: 'radio/:pageId',
    component: RadioQuizComponent
  },
  {
    path: 'formula/:pageId',
    component: FormulaQuizComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizModuleRoutingModule { }
