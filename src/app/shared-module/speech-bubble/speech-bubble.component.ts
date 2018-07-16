import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-speech-bubble',
  templateUrl: './speech-bubble.component.html',
  styleUrls: ['./speech-bubble.component.scss']
})
/**
 * @name SpeechBubbleComponent<app-speech-bubble>
 * @input() speechContent It contain various parameter which will change its appearance.
 * @param width using this variable we can fix the width of our speech bubbe eg. speechContent.width = '200px';
 * @param padding using this variable we can fix the padding of our speech bubbe eg. speechContent.padding = '20px 20px';
 * @param fontSize using this variable we can fix the font-size of our speech bubbe eg. speechContent.font-size = '20px';
 * @param top using this variable we can fix the top position of our speech bubbe eg. speechContent.top = '200px';
 * @param left using this variable we can fix the left position of our speech bubbe eg. speechContent.left = '200px';
 * @param backgroundColor using this variable we can fix the backgroundColor of our speech bubbe eg. speechContent.backgroundColor = '#ddd';
 * @param color using this variable we can fix the color of our speech bubbe eg. speechContent.color = '#fff';
 * @param position using this variable we will set which position we need to show our notch by setting 
 * ngClass = "true? speechContent.position : ''"
 */
export class SpeechBubbleComponent {

  @Input() speechContent;

  constructor() {
  }

}
