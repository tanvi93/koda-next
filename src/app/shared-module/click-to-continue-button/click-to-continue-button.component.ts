import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-click-to-continue-button',
  templateUrl: './click-to-continue-button.component.html',
  styleUrls: ['./click-to-continue-button.component.scss']
})
export class ClickToContinueButtonComponent implements OnInit {
@Input() position;
  constructor() { }

  ngOnInit() {
  }

}
