import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-imagetray',
  templateUrl: './imagetray.component.html',
  styleUrls: ['./imagetray.component.scss']
})
  
export class ImagetrayComponent implements OnInit {
  @Input() characters: String;
  private images;
  constructor() { }

  ngOnInit() {
    this.images = this.characters.length > 3 ? this.characters.slice(0,3) : this.characters;
  }
}
