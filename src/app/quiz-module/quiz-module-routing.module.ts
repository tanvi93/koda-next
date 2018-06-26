import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RadioQuizComponent } from './radio-quiz/radio-quiz.component';
import { CheckboxQuizComponent } from './checkbox-quiz/checkbox-quiz.component';

const routes: Routes = [
  {
    path: 'radio/:pageId',
    component: RadioQuizComponent,
    
  },
  {
    path: 'checkbox/:pageId',
    component: CheckboxQuizComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizModuleRoutingModule { }
