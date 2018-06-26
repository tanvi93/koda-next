import { Component, OnInit, Input, Output } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-custom-slider',
  templateUrl: './custom-slider.component.html',
  styleUrls: ['./custom-slider.component.scss']
})
export class CustomSliderComponent implements OnInit {
  start: number = 0;
  end: number = 0;
  totalItems: number;
  style: any;
  limit: number;
  sliderIndex: number = 1;
  constructor() { }
  @Input() items: any;
  @Input() rows: number;
  @Input() cols: number;
  ngOnInit() {
    this.totalItems = this.items.length;
    this.limit = this.rows * this.cols;
    this.end = this.limit;
    this.style = {
      height: 100 / this.rows + '%',
      width: 100 / this.cols + '%',
      cursor: 'pointer'
    };
  }

  rightNavigation() {
    if (this.end < this.totalItems) {
      this.start = this.start + this.limit;
      this.end = this.end + this.limit;
    }
  }
  leftNavigation() {
    if (this.start > 0) {
      this.start = this.start - this.limit;
      this.end = this.end - this.limit;
    }
  }
}
