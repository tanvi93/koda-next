import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-bubble-msg',
  templateUrl: './bubble-msg.component.html',
  styleUrls: ['./bubble-msg.component.css']
})
export class BubbleMsgComponent implements OnInit, OnChanges {

  @Input() message: string;
  @Input() hideMsg: boolean;
  @Input() pos: string;
  @Input() popUpleft;
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges() {
  }
  

}
