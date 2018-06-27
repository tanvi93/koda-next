import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModuleModule } from './../shared-module/shared-module.module';

import { QuizModuleRoutingModule } from './quiz-module-routing.module';
import { QuizWrapperComponent } from './quiz-wrapper/quiz-wrapper.component';

import { RadioQuizComponent } from './radio-quiz/radio-quiz.component';
import { FormulaQuizComponent } from './formula-quiz/formula-quiz.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModuleModule,
    QuizModuleRoutingModule
  ],
  declarations: [QuizWrapperComponent,  RadioQuizComponent, FormulaQuizComponent]
})
export class QuizModuleModule { }
