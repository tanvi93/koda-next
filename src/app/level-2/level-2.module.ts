import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Level2RoutingModule } from './level-2-routing.module';
import { SharedModuleModule } from './../shared-module/shared-module.module';

import { IntroToBlocksComponent } from './intro-to-blocks/intro-to-blocks.component';
import { ReletivePositionLearningComponent } from './reletive-position-learning/reletive-position-learning.component';
import { RepetitiveCodeComponent } from './repetitive-code/repetitive-code.component';
import { ToTheHillsComponent } from './to-the-hills/to-the-hills.component';
import { DragContainerComponent } from './to-the-hills/drag-container/drag-container.component';
import { DropContainerComponent } from './to-the-hills/drop-container/drop-container.component';
import { StepDragComponent } from './to-the-hills/drag-container/step-drag/step-drag.component';
import { StepDropComponent } from './to-the-hills/drop-container/step-drop/step-drop.component';
import { CaptchaActivityComponent } from './captcha-activity/captcha-activity.component';
import { CaptchaInputComponent } from './captcha-activity/captcha-input/captcha-input.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModuleModule,
    Level2RoutingModule,
    FormsModule
  ],
  declarations: [IntroToBlocksComponent, ReletivePositionLearningComponent, RepetitiveCodeComponent, ToTheHillsComponent, DragContainerComponent, DropContainerComponent, StepDragComponent, StepDropComponent, CaptchaActivityComponent, CaptchaInputComponent]
})
export class Level2Module { }
