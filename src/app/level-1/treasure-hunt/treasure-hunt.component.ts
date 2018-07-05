import { Component, OnInit } from '@angular/core';
import { treasureContent } from './../../data/treasureHunt'

@Component({
  selector: 'app-treasure-hunt',
  templateUrl: './treasure-hunt.component.html',
  styleUrls: ['./treasure-hunt.component.scss']
})
export class TreasureHuntComponent implements OnInit {
  private contentData
  constructor() { }

  ngOnInit() {
  }

}
