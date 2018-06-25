import { Component, OnInit } from '@angular/core';
import { map } from './../../../map';

@Component({
  selector: 'app-dashboard-body',
  templateUrl: './dashboard-body.component.html',
  styleUrls: ['./dashboard-body.component.scss']
})
export class DashboardBodyComponent implements OnInit {
  private items;

  constructor() { }

  ngOnInit() {
    this.items = [];
    let isLocked = true;
    let gameProgress = JSON.parse(localStorage.getItem('gameProgress'));
    let atLevel = gameProgress.atLevel;
    let atModule = gameProgress.atModule;
    let atResource = gameProgress.atResource;
    map.forEach((v, i) => {
      if (i < atLevel) isLocked = false;
      v.modules.forEach((u, j) => {
        if (i === atLevel && j < atModule) isLocked = false;
        u.resources.forEach((w, k) => {
          if (i === atLevel && j === atModule && k < atResource) isLocked = false;
          if (w.type === 'activity-narration') {
            this.items.push({ ...w, isLocked, atLevel: i, atModule: j, atResource: k });
          }
        })
      });
    });
  }

}
