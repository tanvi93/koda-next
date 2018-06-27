import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-select-elements-zone',
  templateUrl: './select-elements-zone.component.html',
  styleUrls: ['./select-elements-zone.component.scss']
})
export class SelectElementsZoneComponent implements OnInit {
  @Input() gameInfo;
  @Input() presentQuestionData;
  private questionCount: number;
  private charClicked: any;
  private showRules: Boolean;
  // private noCorrectOption: Boolean;

  constructor() {
    this.questionCount = 0;
    this.charClicked = [];
    this.showRules = false;
    // this.noCorrectOption = true;
  }

  ngOnInit() {
    this.presentQuestionData = this.gameInfo.validation[this.questionCount];
    console.log(this.presentQuestionData);
  }

  elementClicked(event) {
    for (let i = 0; i < this.presentQuestionData.options.length; i++) {

      if (this.presentQuestionData.options[i].option === event.target.id) {
        if (this.presentQuestionData.options[i].isCorrect) {
          console.log(this.presentQuestionData.options[i].correctMsg);
          this.presentQuestionData.options[i].isCorrect = false;
          this.charClicked.push(event.target.id);
          console.log(this.charClicked);
          if (this.charClicked.length >= 3) {
            console.log("inside" ,this.charClicked);
            this.questionCount++;
            setTimeout(() => {
              this.presentQuestionData = this.gameInfo.validation[this.questionCount];
              if (this.charClicked.length > 3) {
                this.showRules = true;
              }
            }, 20);
          }
          
        } else {
          console.log(this.presentQuestionData.options[i].errorMsg);
        }
      }
    }
  }

}
