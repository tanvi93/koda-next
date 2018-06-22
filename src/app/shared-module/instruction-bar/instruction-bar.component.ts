import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-instruction-bar',
  templateUrl: './instruction-bar.component.html',
  styleUrls: ['./instruction-bar.component.scss']
})

/** 
 * @name InstructionBar
 * @description This component is for showing instruction on top of the page
 * Intruction is consists of one mascot image on left in side a circle and one
 * text box with instruction in it. Text can have HTML tags
 * @param {string} mascotImage head image of mascot, this will appear on left
 * @param {string} mascotBgColor background colour for circle
 * @param {string} instructions plain text/HTML for instruction
 */
  
export class InstructionBarComponent {
  @Input() mascotImage: string;
  @Input() mascotBgColor: string;
  @Input() instructions: string;

  constructor() { }

}
