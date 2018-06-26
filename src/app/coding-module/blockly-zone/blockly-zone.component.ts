import { Component, Output, Input, EventEmitter, AfterViewInit, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InterpreterService, workspacePlayground } from './../services/interpreter.service';
import { blocksData } from './../../data/coding';

declare let Blockly: any;

@Component({
  selector: 'app-blockly-zone',
  templateUrl: './blockly-zone.component.html',
  styleUrls: ['./blockly-zone.component.scss']
})
export class BlocklyZoneComponent implements AfterViewInit, OnChanges{
  @Output() showVariables = new EventEmitter();
  @Output() showFeedback = new EventEmitter();
  @Output() popUpClose = new EventEmitter();
  @Input() doRefresh: Boolean;
  @Input() errorMsg: string;
  @Input() popUpActive: boolean;
  private pageId: String;

  constructor(private interpreter: InterpreterService, private route: ActivatedRoute) {
    window.addEventListener('resize', this.resizeCanvas, false);
  }

  ngOnChanges() {
    if (this.doRefresh) {
      this.interpreter.getInitialXMLToWorkspace(blocksData[`${this.pageId}`].activity_name, blocksData[`${this.pageId}`].initialCode);
    }
  }

  ngAfterViewInit() {
    this.popUpActive = false;
    this.route.params.subscribe(params => {
      this.pageId = params.pageId;
      this.interpreter.init(blocksData[`${this.pageId}`], this.pageId, this.workspaceChangesFeedback, bool => {
        this.showVariables.emit(bool);
      });
      this.resizeCanvas();
      Blockly.svgResize(workspacePlayground);
    });
  }

  workspaceChangesFeedback = str => {
    this.showFeedback.emit(str);
  }

  resizeCanvas() {
    let blocklyDiv = document.getElementById('blocklyDiv');
    let blocklyArea = document.getElementById('blocklyArea');
    blocklyDiv.style.width = blocklyArea.offsetWidth + 'px';
    blocklyDiv.style.height = blocklyArea.offsetHeight + 'px';
  }

  closePopUp() {
    this.popUpActive = false;
    this.popUpClose.emit('false');
  }

}
