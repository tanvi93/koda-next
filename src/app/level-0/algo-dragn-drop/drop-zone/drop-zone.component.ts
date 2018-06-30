import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { DropWrapperComponent } from '../../../shared-module/drop-wrapper/drop-wrapper.component';

@Component({
  selector: 'app-drop-zone',
  templateUrl: './drop-zone.component.html',
  styleUrls: ['./drop-zone.component.scss']
})
export class DropZoneComponent implements OnInit {
  @Input() algo;
  @Input() dropStep;
  @Input() diffLook;
  @Input() errorShow;
  @Output() stepAtDropZone = new EventEmitter();
 
  private correctAlgo: any;
  private success: Boolean;
  private extraStepObj: any;
  private errorMsg: String;
  private extraStepPresent: Boolean;
  private localData: any;
  private dropData: any;
  private stepPlacedAt;

  constructor() {
    this.dropData = {};
   }

  ngOnInit() {
    
  }


  correctSequence($event) {
    console.log($event);
    this.dropData = $event.data;
    let indexPresent = false;
    this.extraStepPresent = false;
    this.errorShow = false;
    if (!$event.order) {
      for (let i = 0; i <= Object.keys(this.correctAlgo).length; i++) {
        if (this.correctAlgo[i] === $event.index) {
          indexPresent = true;
          delete this.correctAlgo[i];
          break;
        }
      }
      if (indexPresent === false) {
        if ($event.order === '') {
          delete this.extraStepObj[$event.index];
        } else {
          this.extraStepObj[$event.index] = $event.msg;
        }
      }
    } else {
      this.correctAlgo[Number($event.order)] = $event.index;
    }
  }
}
