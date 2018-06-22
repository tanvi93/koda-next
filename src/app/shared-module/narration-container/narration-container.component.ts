import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-narration-container',
  templateUrl: './narration-container.component.html',
  styleUrls: ['./narration-container.component.scss']
})
export class NarrationContainerComponent {
  @Input() bgColor;

  constructor() { }

}
