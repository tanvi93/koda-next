import { Component, OnInit } from '@angular/core';
import { selectCharacterContent } from './../../data/selectCharacterContent';
@Component({
  selector: 'app-select-characters',
  templateUrl: './select-characters.component.html',
  styleUrls: ['./select-characters.component.scss']
})
export class SelectCharactersComponent implements OnInit {
  private characterData = selectCharacterContent;
  constructor() { }

  ngOnInit() {
  }

}
