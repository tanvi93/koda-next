import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModuleModule } from './../shared-module/shared-module.module';

import { QuizModuleRoutingModule } from './quiz-module-routing.module';
import { QuizWrapperComponent } from './quiz-wrapper/quiz-wrapper.component';
import { RadioQuizComponent } from './radio-quiz/radio-quiz.component';

import { DropdownComponentComponent } from './dropdown-component/dropdown-component.component';
import { SelectComponentComponent } from './dropdown-component/select-component/select-component.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModuleModule,
    QuizModuleRoutingModule
  ],
  declarations: [QuizWrapperComponent, DropdownComponentComponent, SelectComponentComponent, RadioQuizComponent]
})
export class QuizModuleModule { }
