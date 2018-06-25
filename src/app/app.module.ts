import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { SharedModuleModule } from './shared-module/shared-module.module';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { BadgesComponent } from './shared-pages/badges/badges.component';
import { DashboardComponent } from './shared-pages/dashboard/dashboard.component';
import { AlgoStepsComponent } from './shared-pages/algo-steps/algo-steps.component';
import { LinearFlowScreenComponent } from './shared-pages/linear-flow-screen/linear-flow-screen.component';
import { ForkScreenComponent } from './shared-pages/fork-screen/fork-screen.component';
import { StorylineScreenComponent } from './shared-pages/storyline-screen/storyline-screen.component';
import { VideoScreenComponent } from './shared-pages/video-screen/video-screen.component';

import { AudioService } from './shared-services/audio.service';
import { UtilitiesService } from './shared-services/utilities.service';
import { ApiService } from './shared-services/api.service';


@NgModule({
  declarations: [
    AppComponent,
    BadgesComponent,
    DashboardComponent,
    AlgoStepsComponent,
    LinearFlowScreenComponent,
    ForkScreenComponent,
    StorylineScreenComponent,
    VideoScreenComponent
  ],
  imports: [
    BrowserModule,
    SharedModuleModule,
    MaterialModule,
    HttpClientModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [AudioService, UtilitiesService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
