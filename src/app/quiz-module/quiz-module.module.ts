import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModuleModule } from './../shared-module/shared-module.module';
import { CodingModuleModule } from '../coding-module/coding-module.module';

import { QuizModuleRoutingModule } from './quiz-module-routing.module';
import { QuizWrapperComponent } from './quiz-wrapper/quiz-wrapper.component';
import { RadioQuizComponent } from './radio-quiz/radio-quiz.component';
import { FormulaQuizComponent } from './formula-quiz/formula-quiz.component';
import { CheckboxQuizComponent } from './checkbox-quiz/checkbox-quiz.component';
import { DropdownQuizComponent } from './dropdown-quiz/dropdown-quiz.component';
import { SelectOptionComponent } from './dropdown-quiz/select-option/select-option.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CandyJarComponent } from './candy-jar/candy-jar.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModuleModule,
    QuizModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CodingModuleModule
  ],
  declarations: [
    QuizWrapperComponent,
    RadioQuizComponent,
    CheckboxQuizComponent,
    DropdownQuizComponent,
    SelectOptionComponent,
    FormulaQuizComponent,
    CandyJarComponent
  ]
})
export class QuizModuleModule { }
