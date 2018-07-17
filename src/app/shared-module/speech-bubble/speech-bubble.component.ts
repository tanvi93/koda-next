import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-speech-bubble',
  templateUrl: './speech-bubble.component.html',
  styleUrls: ['./speech-bubble.component.scss']
})
/**
 * @name SpeechBubbleComponent<app-speech-bubble>
 * @input() speechContent It contain various parameter which will change its appearance like different css parameter i.e speechContent.fontSize = 20px will set the font size as 20px for the text.
 * @param msg using this variable we can make the speech bubble visible or hidden.
 * @param position using this variable we will set which position we need to show our notch by setting 
 * ngClass = "true? speechContent.position : ''".
 */
export class SpeechBubbleComponent {

  @Input() speechContent;

  constructor() {
  }

}
