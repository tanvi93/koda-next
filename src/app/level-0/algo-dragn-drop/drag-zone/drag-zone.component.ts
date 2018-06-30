import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-drag-zone',
  templateUrl: './drag-zone.component.html',
  styleUrls: ['./drag-zone.component.scss']
})
export class DragZoneComponent implements OnInit {
  @Input() algo;

  constructor() { }

  ngOnInit() {
    console.log(this.algo);
  }

}
