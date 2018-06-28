import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroToBlocksComponent } from './intro-to-blocks/intro-to-blocks.component';
import { ReletivePositionLearningComponent } from './reletive-position-learning/reletive-position-learning.component';

const routes: Routes = [
  {
    path: 'intro-to-blocks',
    component: IntroToBlocksComponent
  }, {
    path: 'relative-positioning-learning',
    component: ReletivePositionLearningComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Level2RoutingModule { }
