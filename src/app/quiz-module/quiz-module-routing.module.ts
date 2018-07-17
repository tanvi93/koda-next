import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RadioQuizComponent } from './radio-quiz/radio-quiz.component';
import { FormulaQuizComponent } from './formula-quiz/formula-quiz.component';
import { DropdownQuizComponent } from './dropdown-quiz/dropdown-quiz.component';
import { CheckboxQuizComponent } from './checkbox-quiz/checkbox-quiz.component';
import { CandyJarComponent } from './candy-jar/candy-jar.component';

const routes: Routes = [
  {
    path: 'radio/:pageId',
    component: RadioQuizComponent
  },
  {
    path: 'formula/:pageId',
    component: FormulaQuizComponent
  },
  {
    path: 'dropdown/:pageId',
    component: DropdownQuizComponent
  },
  {
    path: 'checkbox/:pageId',
    component: CheckboxQuizComponent,
  },
  {
    path: 'candy_jar_activity',
    component: CandyJarComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizModuleRoutingModule { }
