import { Component, OnInit } from '@angular/core';
import { marsContent } from './../../data/marsRover'

@Component({
  selector: 'app-mars-rover',
  templateUrl: './mars-rover.component.html',
  styleUrls: ['./mars-rover.component.scss']
})
export class MarsRoverComponent implements OnInit {
  private contentData = marsContent;
  constructor() { }

  ngOnInit() {
  }

}
