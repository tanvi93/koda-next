import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-image-inside-tray',
  templateUrl: './image-inside-tray.component.html',
  styleUrls: ['./image-inside-tray.component.scss']
})
export class ImageInsideTrayComponent implements OnChanges {
  @Input() imagesInTray: any;
  @Input() tooltipContent: any;
  position = 'above'; // position of tooltip
  private ttContent: String;
  constructor() { 

  }

  ngOnChanges() {
    setTimeout(() => {
      const offset = this.tooltipContent.currentOffset ? this.tooltipContent.currentOffset : this.tooltipContent.initialOffset;
      this.ttContent = this.tooltipContent.name;
      if (offset) {
        this.ttContent += `(${offset.x}, ${offset.y})`;
      }
    }, 200);
  }
}
