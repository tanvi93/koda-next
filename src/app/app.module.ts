import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { SharedModuleModule } from './shared-module/shared-module.module';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AudioService } from './shared-services/audio.service';
import { UtilitiesService } from './shared-services/utilities.service';
import { ApiService } from './shared-services/api.service';

import { AppComponent } from './app.component';
import { BadgesComponent } from './shared-pages/badges/badges.component';
import { DashboardComponent } from './shared-pages/dashboard/dashboard.component';
import { DashboardToolbarComponent } from './shared-pages/dashboard/dashboard-toolbar/dashboard-toolbar.component';
import { DashboardBodyComponent } from './shared-pages/dashboard/dashboard-body/dashboard-body.component';
import { UserProfileComponent } from './shared-pages/dashboard/user-profile/user-profile.component';
import { CustomSliderComponent } from './shared-pages/dashboard/dashboard-body/custom-slider/custom-slider.component';
import { ProjectsComponent } from './shared-pages/dashboard/dashboard-body/projects/projects.component';
import { AlgoStepsComponent } from './shared-pages/algo-steps/algo-steps.component';
import { LinearFlowScreenComponent } from './shared-pages/linear-flow-screen/linear-flow-screen.component';
import { ForkScreenComponent } from './shared-pages/fork-screen/fork-screen.component';
import { StorylineScreenComponent } from './shared-pages/storyline-screen/storyline-screen.component';
import { VideoScreenComponent } from './shared-pages/video-screen/video-screen.component';
import { SelectActivityComponent } from './shared-pages/select-activity/select-activity.component';
import { ActivityThumbnailComponent } from './shared-pages/select-activity/activity-thumbnail/activity-thumbnail.component';


@NgModule({
  declarations: [
    AppComponent,
    BadgesComponent,
    DashboardComponent,
    DashboardToolbarComponent,
    DashboardBodyComponent,
    UserProfileComponent,
    CustomSliderComponent,
    ProjectsComponent,
    AlgoStepsComponent,
    LinearFlowScreenComponent,
    ForkScreenComponent,
    StorylineScreenComponent,
    VideoScreenComponent,
    SelectActivityComponent,
    ActivityThumbnailComponent
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
