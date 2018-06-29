import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from './../../../../map';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  private levels;
  private showHide;
  private selectedLevel;
  private gameProgress;

  constructor(private route: Router) { }

  ngOnInit() {
    this.gameProgress = JSON.parse(localStorage.getItem('gameProgress'));
    let atLevel = this.gameProgress.atLevel - 1;
    this.levels = map.map((v, i) => {
      let elm = {
        modules: v.modules.map(u => {
          let json = {
            name: u.name,
            link: u.resources[0].path
          }
          return json;
        }),
        status: i < atLevel ? 'Completed' : i === atLevel ? 'Inprogress' : 'Locked'
      }  
      return elm;
    });
    this.levels = this.levels.slice(1);
  }

  showModulesToogle(level) {
    this.showHide = !this.showHide;
    this.selectedLevel = level;
  }

  resume() {
    const { atLevel, atModule, atResource } = this.gameProgress;
    let path = map[atLevel].modules[atModule-1].resources[atResource].path;
    this.route.navigate([path]);
  }

}
