import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Level0RoutingModule } from './level-0-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';

@NgModule({
  imports: [
    CommonModule,
    Level0RoutingModule
  ],
  declarations: [LandingPageComponent]
})
export class Level0Module { }
