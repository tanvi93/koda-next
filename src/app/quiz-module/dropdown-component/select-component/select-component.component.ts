import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-select-component',
  templateUrl: './select-component.component.html',
  styleUrls: ['./select-component.component.scss']
})
export class SelectComponentComponent implements OnInit {
  @Input() dataOption;
  correctOption: string;
  constructor() {
    this.dataOption.forEach(element => {
      if (element.isCorrect) {
        this.correctOption = element.option;
      }
    });
  }

  selected = new FormControl('Choose From', [
    Validators.pattern(this.correctOption)
  ]);

  ngOnInit() {
  }

}
