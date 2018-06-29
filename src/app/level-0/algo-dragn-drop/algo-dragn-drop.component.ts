import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { algoStep } from '../../data/dragAndDrop';

@Component({
  selector: 'app-algo-dragn-drop',
  templateUrl: './algo-dragn-drop.component.html',
  styleUrls: ['./algo-dragn-drop.component.scss']
})
export class AlgoDragnDropComponent implements OnInit {
  private algorithmObj: any;
  private pageId: String;
  private loading: Boolean;
  private imageCount;

  constructor(private route: ActivatedRoute) {
    this.loading = true;
    this.imageCount = 0;
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.pageId = params.pageId;
      this.algorithmObj = algoStep[`${this.pageId}`];
    });

    const imageLoad = () => {
      this.imageCount++;
      if (this.algorithmObj.steps.length === this.imageCount) {
        this.loading = false;
      }
    };

    for (let i = 0; i < this.algorithmObj.steps.length; i++) {
      const image = new Image();
      image.onload = imageLoad;
      image.src = this.algorithmObj.steps[i].icon;
    }
  }

}
