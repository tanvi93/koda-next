import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RadioQuizComponent } from './radio-quiz/radio-quiz.component';

const routes: Routes = [
  {
    path: 'radio/:pageId',
    component: RadioQuizComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizModuleRoutingModule { }
