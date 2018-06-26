import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModuleModule } from './../shared-module/shared-module.module';

import { QuizModuleRoutingModule } from './quiz-module-routing.module';
import { QuizWrapperComponent } from './quiz-wrapper/quiz-wrapper.component';
import { CheckboxComponentComponent } from './checkbox-component/checkbox-component.component';
import { DropdownComponentComponent } from './dropdown-component/dropdown-component.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModuleModule,
    QuizModuleRoutingModule
  ],
  declarations: [QuizWrapperComponent, , CheckboxComponentComponent, DropdownComponentComponent]
})
export class QuizModuleModule { }
