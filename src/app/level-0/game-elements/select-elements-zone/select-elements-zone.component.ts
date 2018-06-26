import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-select-elements-zone',
  templateUrl: './select-elements-zone.component.html',
  styleUrls: ['./select-elements-zone.component.scss']
})
export class SelectElementsZoneComponent implements OnInit {
  @Input() gameInfo;
  
  constructor() { }

  ngOnInit() {
  }

}
