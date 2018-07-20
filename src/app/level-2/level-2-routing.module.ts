import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroToBlocksComponent } from './intro-to-blocks/intro-to-blocks.component';
import { ReletivePositionLearningComponent } from './reletive-position-learning/reletive-position-learning.component';
import { RepetitiveCodeComponent } from './repetitive-code/repetitive-code.component';
import { ToTheHillsComponent } from './to-the-hills/to-the-hills.component';
import { CaptchaActivityComponent } from './captcha-activity/captcha-activity.component';

const routes: Routes = [
  {
    path: 'intro-to-blocks',
    component: IntroToBlocksComponent
  }, {
    path: 'relative-positioning-learning',
    component: ReletivePositionLearningComponent
  }, {
    path: 'repetitive-code-learning',
    component: RepetitiveCodeComponent
  }, {
    path: 'drag-n-drop/:pageId',
    component: ToTheHillsComponent
  }, {
    path: 'captcha-activity/:pageId',
    component: CaptchaActivityComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Level2RoutingModule { }
