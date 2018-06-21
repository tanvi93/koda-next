import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-instruction-bar',
  templateUrl: './instruction-bar.component.html',
  styleUrls: ['./instruction-bar.component.scss']
})
export class InstructionBarComponent {
  @Input() headerMascotImage: string;
  @Input() headerBgColor: string;
  @Input() mascotBgColor: string;
  @Input() headerContent: string;

  constructor() { }

}
