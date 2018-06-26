import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RadioQuizComponent } from './radio-quiz/radio-quiz.component';
import { QuizWrapperComponent } from './quiz-wrapper/quiz-wrapper.component';

const routes: Routes = [
  {
    path: '',
    component: RadioQuizComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizModuleRoutingModule { }
