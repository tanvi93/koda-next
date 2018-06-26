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
import { CheckboxComponentComponent } from './checkbox-component/checkbox-component.component';
import { DropdownComponentComponent } from './dropdown-component/dropdown-component.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [HeaderComponent, LevelProgressComponent, ProfileStatusComponent, InstructionBarComponent, SpeechBubbleComponent, ClickToContinueButtonComponent, NarrationContainerComponent, ContinueButtonComponent, LoadingComponent, CheckboxComponentComponent, DropdownComponentComponent],
  exports: [
    CommonModule, 
    HeaderComponent,
    InstructionBarComponent,
    SpeechBubbleComponent,
    ClickToContinueButtonComponent,
    NarrationContainerComponent,
    ContinueButtonComponent,
    LoadingComponent,
    MaterialModule
  ]
})
export class SharedModuleModule { }
