import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mars-output-section',
  templateUrl: './mars-output-section.component.html',
  styleUrls: ['./mars-output-section.component.scss']
})
export class MarsOutputSectionComponent implements OnInit {
  @Input() contentData;
  constructor() { }

  ngOnInit() {
  }

}
