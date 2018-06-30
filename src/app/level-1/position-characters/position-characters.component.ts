import { Component, OnInit } from '@angular/core';
import { positionCharacterContent } from './../../data/positionCharacterContent';

@Component({
  selector: 'app-position-characters',
  templateUrl: './position-characters.component.html',
  styleUrls: ['./position-characters.component.scss']
})
  
export class PositionCharactersComponent implements OnInit {
  private pageData = positionCharacterContent;
  private contentData = positionCharacterContent;
  constructor() { }

  ngOnInit() {
  }

}
