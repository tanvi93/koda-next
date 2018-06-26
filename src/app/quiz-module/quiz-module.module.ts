import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModuleModule } from './../shared-module/shared-module.module';

import { QuizModuleRoutingModule } from './quiz-module-routing.module';
import { QuizWrapperComponent } from './quiz-wrapper/quiz-wrapper.component';
import { RadioComponentComponent } from './radio-component/radio-component.component';

import { RadioQuizComponent } from './radio-quiz/radio-quiz.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModuleModule,
    QuizModuleRoutingModule
  ],
  declarations: [QuizWrapperComponent, RadioComponentComponent, RadioQuizComponent]
})
export class QuizModuleModule { }
