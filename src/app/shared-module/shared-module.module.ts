import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './../material.module';
import { HeaderComponent } from './header/header.component';
import { LevelProgressComponent } from './header/level-progress/level-progress.component';
import { ProfileStatusComponent } from './header/profile-status/profile-status.component';
import { InstructionBarComponent } from './instruction-bar/instruction-bar.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [HeaderComponent, LevelProgressComponent, ProfileStatusComponent, InstructionBarComponent],
  exports: [CommonModule, HeaderComponent]
})
export class SharedModuleModule { }
