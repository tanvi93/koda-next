import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './../material.module';
import { HeaderComponent } from './header/header.component';
import { LevelProgressComponent } from './header/level-progress/level-progress.component';
import { ProfileStatusComponent } from './header/profile-status/profile-status.component';
import { InstructionBarComponent } from './instruction-bar/instruction-bar.component';
import { SpeechBubbleComponent } from './speech-bubble/speech-bubble.component';
import { ClickToContinueButtonComponent } from './click-to-continue-button/click-to-continue-button.component';
import { NarrationContainerComponent } from './narration-container/narration-container.component';
import { ContinueButtonComponent } from './continue-button/continue-button.component';
import { LoadingComponent } from './loading/loading.component';
import { HintModalComponent } from './hint-modal/hint-modal.component';
import { PreviewModalComponent } from './preview-modal/preview-modal.component';
import { QuizQuestionComponent } from './quiz-question/quiz-question.component';
import { ErrorMsgComponent } from './error-msg/error-msg.component';
import { SuccessModalComponent } from './success-modal/success-modal.component';



@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],

  // tslint:disable-next-line:max-line-length
  declarations: [HeaderComponent, LevelProgressComponent, ProfileStatusComponent, InstructionBarComponent, SpeechBubbleComponent, ClickToContinueButtonComponent, NarrationContainerComponent, ContinueButtonComponent, LoadingComponent, HintModalComponent, PreviewModalComponent, QuizQuestionComponent, ErrorMsgComponent, SuccessModalComponent],
  exports: [
    CommonModule, 
    HeaderComponent,
    InstructionBarComponent,
    SpeechBubbleComponent,
    ClickToContinueButtonComponent,
    NarrationContainerComponent,
    ContinueButtonComponent,
    LoadingComponent,
    MaterialModule,
    QuizQuestionComponent,
    ErrorMsgComponent,
    SuccessModalComponent
  ],
  entryComponents: [HintModalComponent, PreviewModalComponent, SuccessModalComponent]
})
export class SharedModuleModule { }
