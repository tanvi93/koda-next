import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dragon-capture-output',
  templateUrl: './dragon-capture-output.component.html',
  styleUrls: ['./dragon-capture-output.component.scss']
})
export class DragonCaptureOutputComponent implements OnInit {
  @Input() contentData;
  @Output() dragonObject = new EventEmitter<number>();
  private backgroundImage: string;
  constructor() { }

  ngOnInit() {
    this.backgroundImage = this.contentData.backgroundImage[1];
  }

}
